import { motion } from "framer-motion";
import { Server, Network, Globe, Cpu, Layers, Zap, Shield, ChevronRight, Database } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function InfrastructureSection() {
  const infrastructureComponents = [
    {
      icon: Database,
      title: "SECO (Shared Economic Coordination Objects)",
      description: "Decentralized economic coordination infrastructure enabling seamless value flow across cosmic communities.",
      features: [
        "Cross-community economic coordination protocols",
        "Experience asset flow optimization systems",
        "PPT multiplier distribution mechanisms",
        "VELOC credit pooling and risk assessment"
      ],
      gradient: "from-primary to-cosmic-blue",
      stats: { label: "Network Efficiency", value: "99.9%" }
    },
    {
      icon: Network,
      title: "Nexus Nodes",
      description: "Multi-dimensional coordination infrastructure connecting cosmic communities while preserving local autonomy.",
      features: [
        "Inter-community governance coordination",
        "CoCoA-enhanced collaborative decision making", 
        "Constitutional compliance verification",
        "Experience-weighted consensus mechanisms"
      ],
      gradient: "from-cosmic-blue to-accent",
      stats: { label: "Active Nodes", value: "∞" }
    },
    {
      icon: Globe,
      title: "DePIN Networks",
      description: "Decentralized Physical Infrastructure Networks providing censorship-resistant hosting and scaling capabilities.",
      features: [
        "Distributed container orchestration via Akash",
        "Geographic redundancy across data centers",
        "Autonomous scaling and load balancing",
        "Zero-downtime deployments and updates"
      ],
      gradient: "from-accent to-purple-500",
      stats: { label: "Uptime", value: "99.99%" }
    },
    {
      icon: Shield,
      title: "JLZ Energy Infrastructure",
      description: "Universal energy exchange infrastructure providing physics-based value transfer across dimensional boundaries.",
      features: [
        "Quantum energy transfer protocols",
        "Cross-dimensional value synchronization",
        "Universal Natural Law compliance verification",
        "Consciousness-neutral access mechanisms"
      ],
      gradient: "from-purple-500 to-primary",
      stats: { label: "Energy Flow", value: "∞ Joules" }
    }
  ];

  const technicalSpecs = [
    {
      title: "SECO Architecture & Economic Coordination",
      content: `Shared Economic Coordination Objects (SECO) provide the backbone for seamless economic coordination across cosmic communities without central points of failure.

Technical architecture:
• Distributed state machines coordinating experience asset flows
• Atomic transaction protocols ensuring PPT multiplier accuracy
• VELOC credit pool management with constitutional compliance
• Cross-community value settlement through JLZ energy exchange
• Fault-tolerant coordination with automatic failover mechanisms
• Real-time economic flow optimization and congestion management`
    },
    {
      title: "Nexus Node Infrastructure",
      content: `Nexus Nodes enable multi-dimensional governance coordination while preserving individual community autonomy and consciousness sovereignty.

Infrastructure capabilities:
• Decentralized governance protocol coordination across networks
• CoCoA-enhanced collaborative decision making with AI amplification
• Experience-weighted voting aggregation and consensus building
• Constitutional compliance monitoring and verification systems
• Liquid delegation management across community boundaries
• Local autonomy preservation within universal frameworks`
    },
    {
      title: "DePIN Network Implementation",
      content: `Decentralized Physical Infrastructure Networks provide censorship-resistant, globally distributed hosting through containerized deployment.

Implementation details:
• Kubernetes orchestration via Akash Network decentralized cloud
• Multi-region deployment with automatic geographic load balancing
• Docker containerization ensuring consistent execution environments
• Immutable infrastructure as code with rollback capabilities
• Zero-trust security with encrypted communication channels
• Resource optimization through dynamic scaling and cost minimization`
    },
    {
      title: "Universal Energy Exchange (JLZ) Infrastructure",
      content: `JLZ infrastructure provides physics-based value transfer mechanisms transcending cultural and species boundaries under Universal Natural Law.

Energy exchange mechanics:
• Quantum field interaction protocols for energy transfer
• Cross-dimensional synchronization ensuring universal value consistency
• Consciousness-neutral access providing species-agnostic participation
• Constitutional protection mechanisms ensuring Universal Natural Law compliance
• Democratic oversight through experience-weighted governance verification
• Energy conservation protocols maintaining thermodynamic equilibrium`
    }
  ];

  const scalingMetrics = [
    { metric: "Community Networks", value: "Unlimited", trend: "expanding" },
    { metric: "Transaction Throughput", value: "100k+ TPS", trend: "scaling" },
    { metric: "Geographic Coverage", value: "Global", trend: "distributed" },
    { metric: "Consensus Latency", value: "<1 second", trend: "optimizing" }
  ];

  return (
    <section id="infrastructure" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text" data-testid="text-title-infrastructure">
            Cosmic Infrastructure
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-lead-infrastructure">
            Decentralized infrastructure enabling cosmic-scale coordination through SECO, Nexus Nodes, and DePIN networks. 
            Built for Universal Natural Law compliance, consciousness sovereignty, and infinite scalability.
          </p>
        </motion.div>

        {/* Infrastructure Components Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {infrastructureComponents.map((component, index) => (
            <motion.div
              key={component.title}
              className="glass-card rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`infrastructure-${component.title.toLowerCase().split(' ')[0]}`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${component.gradient} rounded-lg flex items-center justify-center`}>
                    <component.icon size={24} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{component.stats.label}</div>
                    <div className="text-lg font-bold gradient-text">{component.stats.value}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 gradient-text">{component.title}</h3>
                <p className="text-muted-foreground mb-6">{component.description}</p>
                
                <ul className="space-y-3">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ChevronRight size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scaling Metrics */}
        <motion.div
          className="glass-card rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Infrastructure Performance</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {scalingMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`metric-${metric.metric.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                <div className="text-xs text-accent capitalize">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Technical Architecture</h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-technical-specs">
              {technicalSpecs.map((spec, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold gradient-text hover:no-underline py-6">
                    {spec.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line pb-6">
                    {spec.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Deployment Architecture */}
        <motion.div
          className="glass-card rounded-xl p-8 mt-16 border-2 border-cosmic-blue/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cosmic-blue to-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Decentralized Deployment Architecture</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-cosmic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 gradient-text">Container Orchestration</h4>
              <p className="text-sm text-muted-foreground">
                Docker containerization with Kubernetes orchestration via Akash Network's decentralized cloud infrastructure
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-cosmic-blue to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 gradient-text">Global Distribution</h4>
              <p className="text-sm text-muted-foreground">
                Multi-region deployment with automatic geographic load balancing and censorship resistance
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap size={20} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 gradient-text">Autonomous Scaling</h4>
              <p className="text-sm text-muted-foreground">
                Dynamic resource allocation with cost optimization and zero-downtime deployments
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Scale Across Cosmic Networks?</h3>
            <p className="text-muted-foreground mb-6">
              Join the infrastructure that enables consciousness-driven coordination across unlimited cosmic communities 
              through SECO, Nexus Nodes, and DePIN networks.
            </p>
            <button 
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-explore-infrastructure"
            >
              Explore Infrastructure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}