import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-12 border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">C3 Alliance</div>
          <p className="text-muted-foreground mb-6">Cosmic Commons Communities Alliance</p>
          <p className="text-sm text-muted-foreground">
            © 2024 C3 Alliance. Building the future of decentralized communities across the cosmic web.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
