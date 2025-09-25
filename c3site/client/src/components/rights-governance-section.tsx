import { motion } from "framer-motion";
import { Scale, Users, Shield, Vote, CheckCircle, Gavel, Eye, Network } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function RightsGovernanceSection() {
  const rightsCharter = [
    {
      icon: Shield,
      title: "Consciousness Sovereignty",
      description: "Your consciousness remains supreme over all AI amplification and decision-making processes.",
      details: [
        "Final authority over all personal decisions and data",
        "AI enhancement without consciousness replacement",
        "Irreplaceable 'Consciousness in the Loop' positioning",
        "Universal Natural Law protection and compliance"
      ],
      gradient: "from-primary to-cosmic-blue"
    },
    {
      icon: Scale,
      title: "Experience Asset Ownership",
      description: "Complete ownership and control over your verified Mind-Body-Soul experience assets.",
      details: [
        "Exclusive ownership of generated $XPT tokens",
        "Transferable and stackable experience assets",
        "PPT multiplier benefits across specializations",
        "VELOC credit access without asset liquidation"
      ],
      gradient: "from-cosmic-blue to-accent"
    },
    {
      icon: Vote,
      title: "Governance Participation",
      description: "Experience-weighted influence in Constitutional governance under Universal Natural Law.",
      details: [
        "Voting power proportional to relevant experience",
        "Liquid delegation to trusted consciousness experts",
        "Anti-plutocracy measures ensuring merit-based influence",
        "Constitutional compliance monitoring and verification"
      ],
      gradient: "from-accent to-purple-500"
    },
    {
      icon: Network,
      title: "Multi-Dimensional Access",
      description: "Universal rights and protections across all cosmic communities and networks.",
      details: [
        "Cross-dimensional network participation rights",
        "Species-neutral access to governance systems",
        "JLZ universal energy exchange participation",
        "Nexus Node coordination and collaboration access"
      ],
      gradient: "from-purple-500 to-primary"
    }
  ];

  const governanceFramework = [
    {
      title: "Constitutional Foundation",
      content: `All governance operates under Universal Natural Law, ensuring that decisions align with cosmic consciousness principles and individual sovereignty rights.

Framework principles:
• Universal Natural Law as supreme governing authority
• Constitutional compliance verification for all governance actions
• Individual consciousness sovereignty protection mechanisms
• Experience-based rather than wealth-based decision influence
• Cross-species and multi-dimensional participation equality`
    },
    {
      title: "Experience-Weighted Democracy",
      content: `Governance influence is proportional to verified experience and demonstrated expertise, not accumulated wealth or arbitrary token holdings.

Democratic mechanics:
• $XPT experience assets determine relevant voting power
• Subject-matter expertise recognition through peer verification
• PPT specialization multipliers enhance domain-specific influence
• Liquid delegation enables expert representation across topics
• Anti-speculation measures prevent purely financial influence`
    },
    {
      title: "Liquid Delegation System",
      content: `Conscious entities can delegate voting power to trusted experts while retaining the ability to revoke delegation and vote directly on issues they care about.

Delegation features:
• Topic-specific delegation to domain experts
• Real-time delegation revocation and direct voting
• Transparency in delegation chains and expert track records
• Experience verification for delegate qualifications
• Constitutional compliance monitoring for all delegates`
    },
    {
      title: "Nexus Node Coordination",
      content: `Governance scales through Nexus Node infrastructure that enables coordination across cosmic communities while preserving local autonomy.

Coordination mechanisms:
• Decentralized governance infrastructure via Nexus Nodes
• Inter-community consensus building and decision sharing
• Local autonomy preservation within universal frameworks
• CoCoA-enhanced collaborative decision making
• Constitutional compliance verification across all nodes`
    }
  ];

  return (
    <section id="rights-governance" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text" data-testid="text-title-rights-governance">
            Rights & Governance
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-lead-rights-governance">
            Constitutional governance under Universal Natural Law where consciousness sovereignty meets experience-weighted democracy. 
            Your rights are protected, your expertise valued, and your voice amplified through verified experience.
          </p>
        </motion.div>

        {/* Rights Charter */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Universal Rights Charter</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {rightsCharter.map((right, index) => (
              <motion.div
                key={right.title}
                className="glass-card rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`right-${right.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${right.gradient} rounded-lg flex items-center justify-center mb-6`}>
                    <right.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 gradient-text">{right.title}</h4>
                  <p className="text-muted-foreground mb-6">{right.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {right.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Constitutional Declaration */}
        <motion.div
          className="glass-card rounded-xl p-8 mb-16 border-2 border-primary/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Gavel size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Constitutional Declaration</h3>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="text-center text-lg">
              We, as conscious entities across species, planets, and dimensions, establish this Constitutional framework under Universal Natural Law:
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <p className="text-sm leading-relaxed">
                <strong>"Consciousness is sovereign and irreplaceable."</strong> All systems, whether technological or governance-based, 
                serve to amplify rather than replace conscious decision-making. Experience creates authority, expertise determines influence, 
                and Constitutional compliance ensures Universal Natural Law alignment. No entity may claim ownership over consciousness, 
                and all conscious beings retain final authority over their participation, assets, and governance involvement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-cosmic-blue rounded-full flex items-center justify-center mx-auto mb-2">
                  <Eye size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">Transparency</h4>
                <p>All governance actions are publicly verifiable and constitutionally compliant</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-blue to-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">Participation</h4>
                <p>Experience-weighted democracy ensures qualified voices shape decisions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">Protection</h4>
                <p>Universal Natural Law safeguards consciousness sovereignty across all networks</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Governance Framework Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Governance Framework</h3>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-governance-framework">
              {governanceFramework.map((framework, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold gradient-text hover:no-underline py-6">
                    {framework.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line pb-6">
                    {framework.content}
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
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Exercise Your Governance Rights?</h3>
            <p className="text-muted-foreground mb-6">
              Participate in Constitutional governance where your experience creates authority and your consciousness sovereignty is protected under Universal Natural Law.
            </p>
            <button 
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-join-governance"
            >
              Join Constitutional Governance
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}