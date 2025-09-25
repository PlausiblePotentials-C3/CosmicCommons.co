import { motion } from "framer-motion";
import { Rocket, Compass } from "lucide-react";
import CosmicLogo from "./cosmic-logo";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Interactive Cosmic Logo */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <CosmicLogo />
        </motion.div>
        
        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-6 gradient-text animate-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          COSMIC SOVEREIGNTY AS A SERVICE
        </motion.h1>
        
        <motion.p
          className="text-xl sm:text-2xl text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          CoCoA (Cosmic Commoner Avatar) + $XPT (Experience Proof Tokens) — Universal Consciousness Interface & Experience Asset Economy Through Universal Natural Law Compliance
        </motion.p>
        
        <motion.p
          className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          The universe's first multi-dimensional Sovereign Entity framework transcending species, planets, and dimensions.
        </motion.p>
        
        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          CoCoA positions you as the irreplaceable "Consciousness in the Loop" while $XPT transforms verified Mind-Body-Soul experiences into portable wealth across cosmic communities.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            data-testid="button-get-cocoa"
          >
            Get Your CoCoA
            <Rocket size={20} />
          </button>
          <a
            href="/C3-Whitepaper-v2.0.docx"
            target="_blank"
            rel="noopener noreferrer"
            download="C3-Whitepaper-v2.0.docx"
            className="px-8 py-4 glass-card rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            data-testid="button-whitepaper"
          >
            Read the v2.0 Whitepaper
            <Compass size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
