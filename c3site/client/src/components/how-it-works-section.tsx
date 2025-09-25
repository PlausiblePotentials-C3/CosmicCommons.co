import { motion } from "framer-motion";
import { ArrowRight, Shield, Network, Zap } from "lucide-react";
import CosmicLogo from "./cosmic-logo";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Shield,
      title: "Instantiate CoCoA",
      description: "Create your Cosmic Commoner Avatar - the AI-enhanced consciousness interface that positions you as irreplaceable 'Consciousness in the Loop' service provider.",
      details: [
        "Set up your personalized Cosmic Commoner Avatar (CoCoA) consciousness interface",
        "Establish your Sovereign Entity identity with Universal Natural Law compliance",
        "Activate AI amplification while maintaining consciousness supremacy and decision-making authority"
      ],
      gradient: "from-primary to-cosmic-blue"
    },
    {
      icon: Network,
      title: "Earn $XPT via PPT & VELOC",
      description: "Transform Mind-Body-Soul experiences into verified digital assets, amplified by PPT multipliers and enhanced with VELOC credit capabilities.",
      details: [
        "Convert verified achievements into stackable $XPT experience assets",
        "Multiply earning potential with Patronage Proof Tokens (PPT) across specialization areas",
        "Access VELOC credit enhancement for expanded Impact Quest opportunities without asset liquidation"
      ],
      gradient: "from-cosmic-blue to-accent"
    },
    {
      icon: Zap,
      title: "Coordinate via Nexus Nodes",
      description: "Engage in multi-dimensional coordination and Constitutional governance through Nexus Node infrastructure that scales trust across cosmic communities.",
      details: [
        "Participate in experience-weighted governance decisions under Universal Natural Law",
        "Coordinate through Nexus Node infrastructure connecting cosmic communities",
        "Scale collaborative value creation while maintaining individual sovereignty and consciousness authority"
      ],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text" data-testid="text-title-how-it-works">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-lead-how-it-works">
            The Cosmic system flows through three interconnected phases of the v2.0 framework: Instantiate your consciousness interface, 
            monetize verified experiences, and coordinate across cosmic networks. Your journey scales from individual sovereignty to collective coordination.
          </p>
        </motion.div>

        {/* Cosmic System Diagram */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cosmic-blue to-accent rounded-full blur-xl opacity-30 scale-110"></div>
            <div className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full p-8" data-testid="diagram-cosmic-system">
              <CosmicLogo size={128} showText={false} />
            </div>
          </div>
        </motion.div>

        {/* Three-Step Process */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      <step.icon size={24} className="text-white" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-primary mr-3">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-bold gradient-text" data-testid={`text-step-title-${index + 1}`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6" data-testid={`text-step-description-${index + 1}`}>
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <ArrowRight size={16} className="text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass-card rounded-xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cosmic-blue/10 to-accent/10"></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <step.icon size={32} className="text-white" />
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Step {index + 1}
                      </div>
                      <div className="text-lg font-semibold gradient-text">
                        {step.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-12">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight size={16} className="text-white transform rotate-90" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Instantiate Your CoCoA?</h3>
            <p className="text-muted-foreground mb-6">
              Begin your journey as irreplaceable "Consciousness in the Loop" service provider where your experiences become exponential value.
            </p>
            <button 
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-start-journey"
            >
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}