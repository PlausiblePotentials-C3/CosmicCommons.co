import { 
  type User, type InsertUser, 
  type Contact, type InsertContact,
  type TeamMember, type InsertTeamMember,
  type BlogPost, type InsertBlogPost,
  type ForumCategory, type InsertForumCategory,
  type ForumTopic, type InsertForumTopic,
  type ForumReply, type InsertForumReply
} from "@shared/schema";
import bcrypt from "bcrypt";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createUserWithPassword(username: string, password: string): Promise<User>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember>;
  updateTeamMember(id: string, teamMember: Partial<InsertTeamMember>): Promise<TeamMember>;
  deleteTeamMember(id: string): Promise<boolean>;
  
  // Blog Posts
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, blogPost: Partial<InsertBlogPost>): Promise<BlogPost>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Forum Categories
  getForumCategories(): Promise<ForumCategory[]>;
  createForumCategory(category: InsertForumCategory): Promise<ForumCategory>;
  
  // Forum Topics
  getForumTopics(categoryId?: string): Promise<ForumTopic[]>;
  getForumTopic(id: string): Promise<ForumTopic | undefined>;
  createForumTopic(topic: InsertForumTopic): Promise<ForumTopic>;
  updateForumTopic(id: string, topic: Partial<InsertForumTopic>): Promise<ForumTopic>;
  
  // Forum Replies
  getForumReplies(topicId: string): Promise<ForumReply[]>;
  createForumReply(reply: InsertForumReply): Promise<ForumReply>;
}

import { db } from "./db";
import { 
  users, contacts, teamMembers, blogPosts, 
  forumCategories, forumTopics, forumReplies 
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createUserWithPassword(username: string, password: string): Promise<User> {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    const [user] = await db.insert(users).values({
      username,
      passwordHash,
    }).returning();
    return user;
  }

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers)
      .where(eq(teamMembers.isActive, true))
      .orderBy(teamMembers.displayOrder);
  }

  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const [teamMember] = await db.insert(teamMembers).values(insertTeamMember).returning();
    return teamMember;
  }

  async updateTeamMember(id: string, updateData: Partial<InsertTeamMember>): Promise<TeamMember> {
    const [teamMember] = await db.update(teamMembers)
      .set(updateData)
      .where(eq(teamMembers.id, id))
      .returning();
    return teamMember;
  }

  async deleteTeamMember(id: string): Promise<boolean> {
    const result = await db.update(teamMembers)
      .set({ isActive: false })
      .where(eq(teamMembers.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Blog Posts
  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    if (published !== undefined) {
      return await db.select().from(blogPosts)
        .where(eq(blogPosts.isPublished, published))
        .orderBy(desc(blogPosts.createdAt));
    }
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(insertBlogPost).returning();
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost> {
    const [post] = await db.update(blogPosts)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Forum Categories
  async getForumCategories(): Promise<ForumCategory[]> {
    return await db.select().from(forumCategories)
      .where(eq(forumCategories.isActive, true))
      .orderBy(forumCategories.displayOrder);
  }

  async createForumCategory(insertCategory: InsertForumCategory): Promise<ForumCategory> {
    const [category] = await db.insert(forumCategories).values(insertCategory).returning();
    return category;
  }

  // Forum Topics
  async getForumTopics(categoryId?: string): Promise<ForumTopic[]> {
    if (categoryId) {
      return await db.select().from(forumTopics)
        .where(eq(forumTopics.categoryId, categoryId))
        .orderBy(desc(forumTopics.isPinned), desc(forumTopics.lastReplyAt));
    }
    return await db.select().from(forumTopics)
      .orderBy(desc(forumTopics.isPinned), desc(forumTopics.lastReplyAt));
  }

  async getForumTopic(id: string): Promise<ForumTopic | undefined> {
    const [topic] = await db.select().from(forumTopics).where(eq(forumTopics.id, id));
    return topic || undefined;
  }

  async createForumTopic(insertTopic: InsertForumTopic): Promise<ForumTopic> {
    const [topic] = await db.insert(forumTopics).values(insertTopic).returning();
    return topic;
  }

  async updateForumTopic(id: string, updateData: Partial<InsertForumTopic>): Promise<ForumTopic> {
    const [topic] = await db.update(forumTopics)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(forumTopics.id, id))
      .returning();
    return topic;
  }

  // Forum Replies
  async getForumReplies(topicId: string): Promise<ForumReply[]> {
    return await db.select().from(forumReplies)
      .where(eq(forumReplies.topicId, topicId))
      .orderBy(forumReplies.createdAt);
  }

  async createForumReply(insertReply: InsertForumReply): Promise<ForumReply> {
    const [reply] = await db.insert(forumReplies).values(insertReply).returning();
    
    // Update topic last reply timestamp (reply count will be computed on demand)
    if (insertReply.topicId) {
      await db.update(forumTopics)
        .set({ 
          lastReplyAt: new Date() 
        })
        .where(eq(forumTopics.id, insertReply.topicId));
    }
    
    return reply;
  }
}

export const storage = new DatabaseStorage();
