import { motion } from "framer-motion";
import mangoImg from "@/assets/mango.png";

interface FloatingMangoProps {
  className?: string;
}

export function FloatingMango({ className }: FloatingMangoProps) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center ${className ?? ""}`}>
      {/* Glow */}
      <div className="absolute h-64 w-64 rounded-full bg-[#ffb84d]/30 blur-3xl" />

      {/* Shadow */}
      <motion.div
        className="absolute bottom-10 h-6 w-48 rounded-[50%] bg-black/50 blur-md"
        animate={{ scale: [1, 0.85, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mango */}
      <motion.img
        src={mangoImg}
        alt="Fresh ripe mango"
        width={1024}
        height={1024}
        className="relative z-10 h-auto w-[70%] max-w-md drop-shadow-2xl"
        animate={{ y: [0, -24, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
