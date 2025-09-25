import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Book, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface GlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
  details: string[];
  category: "pillar" | "concept" | "infrastructure" | "governance";
}

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTerm?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Cosmic Commoner Avatar",
    acronym: "CoCoA",
    definition: "AI-enhanced consciousness interface that positions you as the irreplaceable 'Consciousness in the Loop' service provider.",
    details: [
      "Amplifies rather than replaces human consciousness and decision-making",
      "Universal consciousness interface for cosmic community participation",
      "Maintains consciousness sovereignty while providing AI enhancement",
      "Enables premium value creation in post-human labor economy"
    ],
    category: "pillar"
  },
  {
    term: "Experience Proof Tokens",
    acronym: "$XPT",
    definition: "Verified achievement assets that transform intangible Mind-Body-Soul experiences into quantifiable economic value and portable wealth.",
    details: [
      "Stackable, tradeable experience assets representing verified achievements",
      "Universal value recognition across multi-dimensional cosmic networks",
      "Enhanced by PPT multipliers and VELOC credit capabilities",
      "Primary currency for experience-weighted governance participation"
    ],
    category: "pillar"
  },
  {
    term: "Patronage Proof Tokens",
    acronym: "PPT",
    definition: "Specialization multiplier rewards that amplify $XPT earning potential across activities and unlock premium opportunity access.",
    details: [
      "Multiply $XPT earning potential in specific specialization areas",
      "Different types unlock premium opportunities and access levels",
      "Stakeable for passive income generation and enhanced benefits",
      "Demonstrate proven service excellence and domain expertise"
    ],
    category: "pillar"
  },
  {
    term: "Vault Equity Line of Credit",
    acronym: "VELOC",
    definition: "Universal asset credit enhancement enabling leverage of accumulated experience assets without liquidation for expanded opportunities.",
    details: [
      "Experience asset-backed borrowing capacity without liquidation",
      "Enhanced Impact Quest participation and opportunity access",
      "Constitutional compliance required for credit approval",
      "Maintains asset ownership while unlocking additional value"
    ],
    category: "pillar"
  },
  {
    term: "JLZ Universal Energy Exchange",
    acronym: "JLZ",
    definition: "Quantum energy transfer medium inspired by Joules, providing physics-based value system transcending cultural boundaries under Universal Natural Law.",
    details: [
      "Cross-dimensional transfer capabilities across cosmic networks",
      "Consciousness-neutral access regardless of species or origin",
      "Constitutional protection mechanisms ensuring Universal Natural Law compliance",
      "Democratic oversight within natural law frameworks"
    ],
    category: "pillar"
  },
  {
    term: "Consciousness in the Loop",
    definition: "Core positioning principle ensuring human consciousness remains irreplaceable and supreme over all AI amplification and decision-making processes.",
    details: [
      "Consciousness maintains final authority over all personal decisions",
      "AI serves to amplify rather than replace conscious decision-making",
      "Premium value creation through irreplaceable conscious services",
      "Protection against consciousness commoditization in post-human economy"
    ],
    category: "concept"
  },
  {
    term: "Universal Natural Law",
    definition: "Supreme governing authority ensuring decisions align with cosmic consciousness principles and individual sovereignty rights.",
    details: [
      "Transcends species, cultural, and dimensional boundaries",
      "Foundation for Constitutional compliance verification",
      "Protects consciousness sovereignty across all networks",
      "Enables democratic oversight within natural law frameworks"
    ],
    category: "concept"
  },
  {
    term: "Shared Economic Coordination Objects",
    acronym: "SECO",
    definition: "Decentralized economic coordination infrastructure enabling seamless value flow across cosmic communities without central points of failure.",
    details: [
      "Cross-community economic coordination protocols",
      "Experience asset flow optimization systems",
      "PPT multiplier distribution mechanisms",
      "VELOC credit pooling and risk assessment infrastructure"
    ],
    category: "infrastructure"
  },
  {
    term: "Nexus Nodes",
    definition: "Multi-dimensional coordination infrastructure connecting cosmic communities while preserving local autonomy and governance sovereignty.",
    details: [
      "Inter-community governance coordination capabilities",
      "CoCoA-enhanced collaborative decision making systems",
      "Constitutional compliance verification across networks",
      "Experience-weighted consensus mechanisms"
    ],
    category: "infrastructure"
  },
  {
    term: "DePIN Networks",
    definition: "Decentralized Physical Infrastructure Networks providing censorship-resistant hosting and scaling capabilities through distributed container orchestration.",
    details: [
      "Distributed container orchestration via Akash Network",
      "Geographic redundancy across global data centers",
      "Autonomous scaling and load balancing capabilities",
      "Zero-downtime deployments and updates"
    ],
    category: "infrastructure"
  },
  {
    term: "Experience-Weighted Democracy",
    definition: "Governance system where influence is proportional to verified experience and demonstrated expertise, not accumulated wealth or arbitrary token holdings.",
    details: [
      "$XPT experience assets determine relevant voting power",
      "Subject-matter expertise recognition through peer verification",
      "PPT specialization multipliers enhance domain-specific influence",
      "Anti-speculation measures prevent purely financial influence"
    ],
    category: "governance"
  },
  {
    term: "Liquid Delegation",
    definition: "Governance mechanism allowing conscious entities to delegate voting power to trusted experts while retaining ability to revoke delegation and vote directly.",
    details: [
      "Topic-specific delegation to domain experts",
      "Real-time delegation revocation and direct voting capabilities",
      "Transparency in delegation chains and expert track records",
      "Experience verification for delegate qualifications"
    ],
    category: "governance"
  }
];

const categoryLabels = {
  pillar: "Foundational Pillars",
  concept: "Core Concepts",
  infrastructure: "Infrastructure",
  governance: "Governance"
};

const categoryColors = {
  pillar: "from-primary to-cosmic-blue",
  concept: "from-cosmic-blue to-accent", 
  infrastructure: "from-accent to-purple-500",
  governance: "from-purple-500 to-primary"
};

export default function GlossaryModal({ isOpen, onClose, initialTerm }: GlossaryModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedTerm, setExpandedTerm] = useState<string>(initialTerm || "");

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.acronym?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const categories = ["all", ...Object.keys(categoryLabels)] as const;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-w-4xl h-[80vh] bg-background/95 backdrop-blur-sm border border-primary/20"
        data-testid="glossary-modal"
      >
        <DialogHeader className="border-b border-primary/20 pb-4">
          <DialogTitle className="flex items-center gap-3 text-2xl gradient-text">
            <Book size={24} />
            C3 Alliance Glossary
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-full overflow-hidden">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms, acronyms, or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                data-testid="glossary-search"
              />
            </div>
            
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-background/50 border border-primary/20 hover:bg-primary/10"
                  }`}
                  data-testid={`filter-${category}`}
                >
                  {category === "all" ? "All" : categoryLabels[category as keyof typeof categoryLabels]}
                </button>
              ))}
            </div>
          </div>

          {/* Terms List */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {Object.entries(groupedTerms).map(([category, terms]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold gradient-text mb-4 sticky top-0 bg-background/95 backdrop-blur-sm py-2">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                
                <div className="space-y-3">
                  {terms.map((term) => (
                    <motion.div
                      key={term.term}
                      className="glass-card rounded-lg p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                      onClick={() => setExpandedTerm(
                        expandedTerm === term.term ? "" : term.term
                      )}
                      data-testid={`term-${term.acronym || term.term.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`}></div>
                            <h4 className="text-lg font-semibold gradient-text">
                              {term.term}
                              {term.acronym && (
                                <span className="ml-2 text-sm text-accent">({term.acronym})</span>
                              )}
                            </h4>
                          </div>
                          <p className="text-muted-foreground">{term.definition}</p>
                        </div>
                        
                        <motion.div
                          animate={{ rotate: expandedTerm === term.term ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={20} className="text-muted-foreground" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {expandedTerm === term.term && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-primary/20"
                          >
                            <ul className="space-y-2">
                              {term.details.map((detail, index) => (
                                <li key={index} className="flex items-start text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="flex-1 flex items-center justify-center text-center">
              <div className="text-muted-foreground">
                <Book size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">No terms found</p>
                <p className="text-sm">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Hook for easy glossary access from anywhere in the app
export function useGlossary() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTerm, setInitialTerm] = useState<string>("");

  const openGlossary = (term?: string) => {
    if (term) setInitialTerm(term);
    setIsOpen(true);
  };

  const closeGlossary = () => {
    setIsOpen(false);
    setInitialTerm("");
  };

  return {
    isOpen,
    openGlossary,
    closeGlossary,
    GlossaryModal: () => (
      <GlossaryModal 
        isOpen={isOpen} 
        onClose={closeGlossary} 
        initialTerm={initialTerm}
      />
    )
  };
}