import { motion } from "framer-motion";
import { User, Globe, Network } from "lucide-react";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { value: "500+", label: "Active Communities" },
    { value: "50K+", label: "Cosmic Commoners" },
    { value: "25", label: "Partner Networks" },
    { value: "99.9%", label: "Network Uptime" },
  ];

  const features = [
    {
      icon: User,
      title: "Universal Sovereignty",
      description: "Complete control over your universal consciousness interface, CoCoA enhancement, and experience data. Own your achievements and monetize them through verified credentials and liquid experience assets.",
      gradient: "from-primary to-cosmic-blue"
    },
    {
      icon: Globe,
      title: "Community Networks",
      description: "Interconnected cosmic communities where experience assets flow between projects. Your contributions build portable wealth that enhances collaboration and exponential opportunities.",
      gradient: "from-cosmic-blue to-accent"
    },
    {
      icon: Network,
      title: "Alliance Infrastructure",
      description: "Shared cosmic sovereignty infrastructure that scales trust across universal networks. Constitutional governance powered by verified experience and CoCoA-enhanced decision making.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Universal Framework</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            C3 Cosmic Commons delivers universal sovereignty infrastructure where Cosmic Commoners control their consciousness interface, 
            cosmic communities benefit from liquid experience asset networks, and alliances scale trust through Constitutional governance. 
            Because experience {'>'}  tokens for authentic coordination.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card rounded-xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
