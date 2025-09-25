import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Clock, PlaneTakeoff, Twitter, Github, MessageSquare, Edit } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      communityType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Launched Successfully! 🚀",
        description: "We'll respond within one cosmic rotation (24 hours).",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Launch Failed",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Cosmic Communication",
      value: "hello@cosmiccommons.co",
      gradient: "from-primary to-accent"
    },
    {
      icon: Globe,
      title: "Digital Headquarters",
      value: "Decentralized across the cosmic web",
      gradient: "from-cosmic-blue to-accent"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within one cosmic rotation (24 hours)",
      gradient: "from-accent to-primary"
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageSquare, href: "#", label: "Discord" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Edit, href: "#", label: "Medium" },
  ];

  const communityTypes = [
    "Decentralized Autonomous Organization",
    "Creative Collective",
    "Developer Community",
    "Research Network",
    "Social Impact Initiative",
    "Other"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Connect with the Cosmos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Ready to join the cosmic community alliance? Reach out to us and let's build the future together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-card rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Cosmic Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your cosmic name"
                  {...form.register("name")}
                  className="bg-white/5 border-white/10 focus:ring-primary focus:border-transparent"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@cosmos.space"
                  {...form.register("email")}
                  className="bg-white/5 border-white/10 focus:ring-primary focus:border-transparent"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="communityType">Community Type</Label>
                <Select
                  value={form.watch("communityType")}
                  onValueChange={(value) => form.setValue("communityType", value)}
                >
                  <SelectTrigger 
                    className="bg-white/5 border-white/10 focus:ring-primary focus:border-transparent"
                    data-testid="select-community-type"
                  >
                    <SelectValue placeholder="Select your community type" />
                  </SelectTrigger>
                  <SelectContent>
                    {communityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.communityType && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.communityType.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your cosmic vision..."
                  {...form.register("message")}
                  className="bg-white/5 border-white/10 focus:ring-primary focus:border-transparent"
                  data-testid="textarea-message"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? "Launching..." : "Launch Message Into Space"}
                <PlaneTakeoff className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`contact-info-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center mr-4`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold gradient-text">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold gradient-text mb-4">Follow Our Cosmic Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white hover:transform hover:scale-110 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
