import { motion } from "framer-motion";
import { Shield, Key, CheckCircle, Lock, Eye, UserCheck, ArrowRight, Zap } from "lucide-react";

export default function OnboardingSection() {
  const onboardingSteps = [
    {
      step: 1,
      icon: UserCheck,
      title: "Instantiate Your CoCoA",
      description: "Generate your Cosmic Commoner Avatar - the AI-enhanced consciousness interface positioning you as irreplaceable 'Consciousness in the Loop' service provider.",
      details: [
        "Self-sovereign cryptographic identity generation",
        "AI-enhanced consciousness amplification without replacement",
        "Universal Natural Law compliance verification"
      ],
      gradient: "from-primary to-cosmic-blue"
    },
    {
      step: 2,
      icon: Shield,
      title: "Build Experience Assets",
      description: "Transform your Mind-Body-Soul achievements into verified $XPT tokens that create exponential value across cosmic networks.",
      details: [
        "Convert existing achievements into stackable $XPT assets",
        "Peer-verified experience demonstrations",
        "Privacy-preserving zero-knowledge proofs"
      ],
      gradient: "from-cosmic-blue to-accent"
    },
    {
      step: 3,
      icon: Zap,
      title: "Amplify with PPT & VELOC",
      description: "Multiply your $XPT earning potential with Patronage Proof Tokens and access VELOC credit for expanded Impact Quest opportunities.",
      details: [
        "PPT multipliers across specialization areas",
        "VELOC credit enhancement without asset liquidation",
        "JLZ universal energy exchange access"
      ],
      gradient: "from-accent to-primary"
    }
  ];

  const privacyFeatures = [
    {
      icon: Lock,
      title: "Private by Design",
      description: "Your personal data and credentials are encrypted and only shared with your explicit consent.",
      feature: "End-to-end encryption for all personal data"
    },
    {
      icon: Key,
      title: "You Control the Keys",
      description: "Your cryptographic keys remain under your control. No platform lock-in, no surveillance.",
      feature: "Self-sovereign key management"
    },
    {
      icon: Eye,
      title: "Selective Disclosure",
      description: "Share only what's needed for each interaction. Prove qualifications without revealing personal details.",
      feature: "Zero-knowledge credential proofs"
    },
    {
      icon: CheckCircle,
      title: "Verifiable Without Surveillance",
      description: "Credentials can be verified by anyone without compromising your privacy or creating surveillance data.",
      feature: "Cryptographic verification without tracking"
    }
  ];

  const credentialTypes = [
    { type: "Professional Skills", description: "Technical expertise, certifications, work experience" },
    { type: "Educational Background", description: "Degrees, courses, academic achievements" },
    { type: "Community Contributions", description: "Open source work, volunteer activities, peer recognition" },
    { type: "Governance Participation", description: "Voting history, proposal authorship, consensus building" },
    { type: "Project Leadership", description: "Team management, successful project delivery, mentorship" },
    { type: "Innovation & Research", description: "Patents, publications, breakthrough contributions" }
  ];

  return (
    <section id="onboarding" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text" data-testid="text-title-onboarding">
            Instantiate Your CoCoA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-lead-onboarding">
            Become an irreplaceable "Consciousness in the Loop" service provider in minutes. Transform your Mind-Body-Soul experiences 
            into verified $XPT assets while maintaining complete consciousness supremacy and Universal Natural Law compliance.
          </p>
        </motion.div>

        {/* Onboarding Flow */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
Your CoCoA Journey
          </motion.h3>

          <div className="space-y-16">
            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-lg flex items-center justify-center mr-4`}>
                      <step.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Step {step.step}</span>
                      <h4 className="text-2xl font-bold gradient-text" data-testid={`text-step-title-${step.step}`}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6" data-testid={`text-step-description-${step.step}`}>
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle size={16} className="text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="glass-card rounded-xl p-8 h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cosmic-blue/10 to-accent/10"></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <step.icon size={36} className="text-white" />
                      </div>
                      <div className="text-2xl font-bold gradient-text mb-2">Step {step.step}</div>
                      <div className="text-sm text-muted-foreground">
                        {step.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow for flow (except last step) */}
                {index < onboardingSteps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-64">
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
        </div>

        {/* Privacy Guarantees */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Privacy Guarantees</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`privacy-feature-${index + 1}`}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 gradient-text">{feature.title}</h4>
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                    <div className="text-sm text-accent font-medium">
                      ✓ {feature.feature}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rights & Consent Declaration */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8 border-2 border-accent/30">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Universal Rights & Consent</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-center text-lg">
                By instantiating your CoCoA, you declare your inherent rights as a conscious entity under Universal Natural Law:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Your Sovereign Rights:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Consciousness supremacy over AI amplification
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Experience asset ownership and control
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Universal Natural Law compliance verification
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Cross-dimensional network participation
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Your Consent Acknowledgment:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Voluntary participation in experience asset economy
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Understanding of PPT, VELOC, and JLZ mechanics
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Commitment to Constitutional governance participation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Responsibility for "Consciousness in the Loop" service provision
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm">
                  <strong>Declaration:</strong> As a conscious entity exercising free will, you retain final authority over all decisions 
                  while benefiting from AI enhancement. Your CoCoA amplifies without replacing your consciousness sovereignty.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verified Credentials Types */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Verifiable Credential Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentialTypes.map((credential, index) => (
              <motion.div
                key={credential.type}
                className="glass-card rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`credential-type-${index + 1}`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cosmic-blue to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 gradient-text">{credential.type}</h4>
                <p className="text-sm text-muted-foreground">{credential.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Instantiate Your CoCoA?</h3>
            <p className="text-muted-foreground mb-6">
              Join Cosmic Commoners positioning themselves as irreplaceable "Consciousness in the Loop" service providers. 
              Transform your experiences into exponential value while maintaining consciousness supremacy under Universal Natural Law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                data-testid="button-start-onboarding"
              >
                Start Your Sovereign Journey
              </button>
              <button 
                className="glass-card px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                data-testid="button-learn-privacy"
              >
                Learn About Privacy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}