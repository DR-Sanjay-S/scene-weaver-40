import { motion } from "framer-motion";
import mangoFront from "@/assets/mango-front.png";
import mangoBitten from "@/assets/mango-bitten.png";

interface FloatingMangoProps {
  className?: string;
}

export function FloatingMango({ className }: FloatingMangoProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${className ?? ""}`}
      style={{ perspective: "1400px" }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-[#ffb84d]/40 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ground shadow */}
      <motion.div
        className="absolute bottom-8 h-8 w-56 rounded-[50%] bg-black/70 blur-xl"
        animate={{ scaleX: [1, 0.65, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating wrapper handles vertical bob + tilt */}
      <motion.div
        className="relative z-10 w-[70%] max-w-md"
        style={{ perspective: "1400px" }}
        animate={{ y: [0, -45, 0], rotateZ: [-5, 5, -5] }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Inner card handles the Y-axis flip with two faces */}
        <motion.div
          className="relative aspect-square w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          {/* Front face — whole mango */}
          <img
            src={mangoFront}
            alt="Fresh whole mango"
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(255,140,0,0.5)]"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          />

          {/* Back face — bitten mango (rotated 180° so it faces out) */}
          <img
            src={mangoBitten}
            alt="Juicy bitten mango"
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(255,140,0,0.5)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
