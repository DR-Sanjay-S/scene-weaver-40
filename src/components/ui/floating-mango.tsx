import { motion } from "framer-motion";
import mangoImg from "@/assets/mango.png";

interface FloatingMangoProps {
  className?: string;
}

export function FloatingMango({ className }: FloatingMangoProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${className ?? ""}`}
      style={{ perspective: "1200px" }}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-[#ffb84d]/40 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ground shadow */}
      <motion.div
        className="absolute bottom-8 h-8 w-56 rounded-[50%] bg-black/60 blur-xl"
        animate={{ scaleX: [1, 0.7, 1], opacity: [0.6, 0.25, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating + flipping mango */}
      <motion.div
        className="relative z-10 w-[70%] max-w-md"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          y: [0, -50, 0, -30, 0],
          rotateY: [0, 180, 360],
          rotateX: [0, 10, -10, 5, 0],
          rotateZ: [-6, 6, -6],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img
          src={mangoImg}
          alt="Fresh ripe mango"
          width={1024}
          height={1024}
          className="h-auto w-full drop-shadow-[0_30px_40px_rgba(255,140,0,0.45)]"
        />
      </motion.div>
    </div>
  );
}
