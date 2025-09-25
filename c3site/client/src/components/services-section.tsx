import { motion } from "framer-motion";
import { 
  User,
  Coins,
  Award,
  CreditCard,
  Zap,
  Check
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: User,
      title: "CoCoA (Cosmic Commoner Avatar)",
      description: "AI-enhanced consciousness interface evolution positioning you as irreplaceable 'Consciousness in the Loop' service provider for post-human labor economy.",
      features: [
        "Universal consciousness interface amplification",
        "AI enhancement without replacement",
        "Mind-Body-Soul monetization capabilities",
        "Premium conscious services positioning"
      ],
      gradient: "from-primary to-cosmic-blue"
    },
    {
      icon: Coins,
      title: "$XPT (Experience Proof Tokens)",
      description: "Verified achievement assets that transform intangible Mind-Body-Soul experiences into quantifiable economic value and portable wealth.",
      features: [
        "Experience-to-asset conversion system",
        "Verified achievement reward mechanisms",
        "Stackable success modifiers",
        "Universal value across cosmic networks"
      ],
      gradient: "from-cosmic-blue to-accent"
    },
    {
      icon: Award,
      title: "PPT (Patronage Proof Tokens)",
      description: "Specialization multiplier rewards that amplify $XPT earning potential across activities and unlock premium opportunity access.",
      features: [
        "Multiply $XPT earning potential",
        "Different types unlock premium opportunities",
        "Stakeable for passive income generation",
        "Demonstrate proven service excellence"
      ],
      gradient: "from-accent to-purple-500"
    },
    {
      icon: CreditCard,
      title: "VELOC (Vault Equity Line of Credit)",
      description: "Universal asset credit enhancement enabling leverage of accumulated experience assets without liquidation for expanded opportunities.",
      features: [
        "Experience asset-backed borrowing capacity",
        "Enhanced Impact Quest participation",
        "Constitutional compliance required",
        "No asset liquidation necessary"
      ],
      gradient: "from-purple-500 to-primary"
    },
    {
      icon: Zap,
      title: "JLZ Universal Energy Exchange",
      description: "Quantum energy transfer medium inspired by Joules, providing physics-based value system transcending cultural boundaries under Universal Natural Law.",
      features: [
        "Cross-dimensional transfer capabilities",
        "Consciousness-neutral access",
        "Constitutional protection mechanisms",
        "Democratic oversight within natural law"
      ],
      gradient: "from-primary to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Foundational Pillars</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five foundational pillars delivering Cosmic Sovereignty as a Service through Universal Natural Law compliance, 
            where Sovereign Entities control their consciousness evolution and cosmic communities flourish through shared governance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check size={16} className="text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
