# C3 Alliance

## Overview

C3 Alliance (Cosmic Commons Communities Alliance) is a modern full-stack web application implementing the v2.0 framework for "Cosmic Sovereignty as a Service Through Universal Natural Law Compliance." The platform provides a universal consciousness framework transcending species boundaries, featuring CoCoA (Cosmic Commoner Avatar) consciousness interfaces and $XPT (Experience Proof Tokens) for the post-human labor economy.

## Recent Changes (September 2025)

### V2.0 Website Restructure Completed
- **Complete terminology migration**: ME-HAI → CoCoA, $TKR → $XPT across all components
- **Five foundational pillars**: CoCoA, $XPT, PPT, VELOC, JLZ fully integrated
- **Two new sections**: Rights & Governance, Infrastructure sections added
- **Comprehensive glossary modal**: Search/filter functionality for all v2.0 terminology
- **Updated positioning**: "Consciousness in the Loop" service provider framework
- **SEO optimization**: Meta tags updated for cosmic sovereignty branding
- **Trinity references removed**: All hallucinated Trinity terminology eliminated

### New Website Sections
- **Hero**: CoCoA + $XPT positioning with cosmic sovereignty messaging
- **Services**: 5 foundational pillars with progressive disclosure
- **Economy**: Experience asset economy with PPT, VELOC, JLZ mechanics
- **How It Works**: 3-step cosmic system flow
- **Rights & Governance**: Universal Rights Charter and Constitutional framework
- **Infrastructure**: SECO, Nexus Nodes, and DePIN networks
- **Glossary Modal**: Comprehensive terminology reference with search

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a single-page application (SPA) architecture
- **Styling**: Tailwind CSS with a custom cosmic/space theme using CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component system providing accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and cosmic visual effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints with JSON communication
- **Validation**: Zod schemas for runtime type checking and validation
- **Storage**: In-memory storage implementation with interface-based design for easy database migration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not yet implemented)

### Data Storage Strategy
- **Current**: In-memory storage using Maps for development and testing
- **Future-Ready**: Drizzle ORM configured for PostgreSQL with migration system
- **Schema Management**: Shared TypeScript schemas between frontend and backend using Drizzle-Zod integration
- **Database Design**: Two main entities - users (authentication) and contacts (form submissions)

### V2.0 Content Framework
- **CoCoA (Cosmic Commoner Avatar)**: AI-enhanced consciousness interface for "Consciousness in the Loop" positioning
- **$XPT (Experience Proof Tokens)**: Verified Mind-Body-Soul experiences as portable digital wealth
- **PPT (Patronage Proof Tokens)**: Multiplier rewards for specialized contributions
- **VELOC**: Credit enhancement system for expanded opportunities
- **JLZ**: Energy exchange protocol for cosmic community coordination
- **Universal Natural Law**: Constitutional governance framework transcending species boundaries

### Development and Build System
- **Bundler**: Vite for fast development and optimized production builds
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Hot Reload**: Vite HMR with custom error overlay for development experience
- **Production Build**: ESBuild for backend bundling with platform-specific optimizations

### UI/UX Design Philosophy
- **Theme**: Cosmic/space-inspired design with animated backgrounds and orbital rings
- **Color Scheme**: Dark theme with purple, teal, and blue cosmic colors
- **Logo**: Cosmic orbital rings with three C's representing C3 Alliance
- **Typography**: Custom font stack with Inter for readability
- **Responsiveness**: Mobile-first design with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Progressive Disclosure**: Glossary modal and accordion sections for complex terminology

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL serverless connections
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, select, etc.)
- **tailwindcss**: Utility-first CSS framework for styling
- **framer-motion**: Animation library for smooth transitions and effects
- **class-variance-authority**: Type-safe variant creation for component styling
- **clsx & tailwind-merge**: Utility functions for conditional classes

### Form and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: Schema validation library for runtime type checking
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema consistency

### Development and Tooling
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancement plugins

### Backend Infrastructure
- **express**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **wouter**: Lightweight router for React applications
- **@tanstack/react-query**: Data fetching and caching library

### Utilities and Helpers
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Secure, URL-friendly unique string ID generator
- **cmdk**: Command palette component for enhanced user experience
- **embla-carousel-react**: Carousel component library