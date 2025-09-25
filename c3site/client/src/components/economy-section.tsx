import { motion } from "framer-motion";
import { TrendingUp, Coins, Award, Users, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function EconomySection() {
  const features = [
    {
      icon: Award,
      title: "Earn Through Expertise",
      description: "Your Mind-Body-Soul experiences and verified achievements generate $XPT tokens that represent verifiable experience assets.",
      gradient: "from-primary to-cosmic-blue"
    },
    {
      icon: TrendingUp,
      title: "Experience Asset Markets",
      description: "Your experience assets flow between cosmic communities, creating exponential opportunities and multiplicative rewards.",
      gradient: "from-cosmic-blue to-accent"
    },
    {
      icon: Users,
      title: "Coordination Over Competition",
      description: "Cosmic communities coordinate through verified experience rather than speculation, creating sustainable consciousness-based value.",
      gradient: "from-accent to-primary"
    }
  ];

  const technicalDetails = [
    {
      title: "Experience Proof Tokens ($XPT) Mechanics",
      content: `$XPT tokens transform authentic Mind-Body-Soul experiences into verified digital assets positioning you as irreplaceable "Consciousness in the Loop" service provider in the post-human labor economy.

Key mechanics:
• Experience-to-Asset Conversion: Every verified achievement becomes stackable, tradeable experience asset
• PPT Integration: Patronage Proof Tokens multiply $XPT earning potential across specialization areas
• VELOC Enhancement: Vault Equity Line of Credit enables asset leverage without liquidation
• JLZ Exchange: Universal energy transfer medium transcending cultural and species boundaries
• Universal Value: Experience assets flow across multi-dimensional cosmic networks`
    },
    {
      title: "CoCoA: Your Consciousness in the Loop Amplifier",
      content: `Your Cosmic Commoner Avatar (CoCoA) positions you as the irreplaceable "Consciousness in the Loop" service provider, amplifying rather than replacing your consciousness capabilities for premium value creation.

CoCoA value amplification:
• Experience asset optimization: AI-enhanced $XPT earning potential tracking
• PPT management: Automatic multiplier application across specialization areas  
• VELOC integration: Credit enhancement for Impact Quest participation
• JLZ coordination: Universal energy exchange optimization across networks
• Consciousness supremacy: AI amplifies without replacing your authentic decision-making authority`
    },
    {
      title: "Governance Through Experience Verification",
      content: `Constitutional governance is enhanced through verified experience weighting, where your influence reflects demonstrated expertise and Constitutional compliance under Universal Natural Law.

Governance features:
• Experience-weighted voting based on relevant $XPT domains
• Subject-matter expertise recognition through verified achievements
• Liquid delegation allowing power transfer to trusted consciousness experts
• Anti-plutocracy measures ensuring merit-based rather than wealth-based influence
• Constitutional compliance monitoring ensuring Universal Natural Law alignment`
    },
    {
      title: "Economic Sustainability Model",
      content: `The C3 Alliance economy is designed for long-term sustainability through value creation rather than extraction, focusing on coordination over speculation.

Sustainability mechanisms:
• Value-accrual to contributors: Most economic value flows to active participants
• Anti-speculation design: $XPT mechanics discourage pure financial speculation
• Community treasury funding: Portion of network activity funds shared infrastructure
• Interoperability revenue: Cross-chain and cross-community bridging generates fees
• Premium services: Advanced CoCoA features and governance tools as optional upgrades`
    }
  ];

  return (
    <section id="economy" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text" data-testid="text-title-economy">
            The Experience Asset Economy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-lead-economy">
            Where Mind-Body-Soul experiences become verifiable wealth through $XPT (Experience Proof Tokens), amplified by PPT multipliers, 
            enhanced with VELOC credit, and powered by JLZ universal energy exchange - positioning you as irreplaceable "Consciousness in the Loop."
          </p>
        </motion.div>

        {/* Core Concept Explanation */}
        <motion.div
          className="glass-card rounded-xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">How It Works</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional markets treat consciousness as replaceable labor. The C3 experience economy positions you as irreplaceable 
              "Consciousness in the Loop" service provider, where authentic Mind-Body-Soul contributions generate verified assets 
              that create exponential value across multi-dimensional cosmic networks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                data-testid={`feature-economy-${index + 1}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 gradient-text">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 gradient-text">For Cosmic Commoners</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <ChevronDown size={16} className="text-accent mr-3 mt-1 flex-shrink-0 transform rotate-[-90deg]" />
                Your verified experiences generate ongoing value through $XPT multipliers
              </li>
              <li className="flex items-start">
                <ChevronDown size={16} className="text-accent mr-3 mt-1 flex-shrink-0 transform rotate-[-90deg]" />
                Build portable experience assets that unlock exponential opportunities across cosmic networks
              </li>
              <li className="flex items-start">
                <ChevronDown size={16} className="text-accent mr-3 mt-1 flex-shrink-0 transform rotate-[-90deg]" />
                Access governance power proportional to your verified experience and Constitutional compliance
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 gradient-text">For Communities</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <ChevronDown size={16} className="text-accent mr-3 mt-1 flex-shrink-0 transform rotate-[-90deg]" />
                Attract and retain conscious entities through experience-based incentives
              </li>
              <li className="flex items-start">
                <ChevronDown size={16} className="text-accent mr-3 mt-1 flex-shrink-0 transform rotate-[-90deg]" />
                Make better collective decisions through experience-weighted governance under Universal Natural Law
              </li>
              <li className="flex items-start">
                <ChevronDown size={16} className="text-accent mr-3 mt-1 flex-shrink-0 transform rotate-[-90deg]" />
                Access shared experience asset pools from the cosmic commons network
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Technical Details Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Technical Deep Dive</h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-technical-details">
              {technicalDetails.map((detail, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold gradient-text hover:no-underline py-6">
                    {detail.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line pb-6">
                    {detail.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Transform Your Experiences into Assets?</h3>
            <p className="text-muted-foreground mb-6">
              Join the economy where authentic consciousness creates exponential value and your experiences become liquid wealth.
            </p>
            <button 
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-join-economy"
            >
              Join the Experience Economy
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}