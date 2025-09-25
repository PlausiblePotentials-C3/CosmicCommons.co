import { motion } from "framer-motion";

export default function CosmicBackground() {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 6,
  }));

  return (
    <>
      <div className="cosmic-bg animate-cosmic-pulse" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="cosmic-particle"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </>
  );
}
