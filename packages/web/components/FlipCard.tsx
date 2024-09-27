"use client";

import { cn } from "@/utils/ui";
import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
  className?: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlipCard(
  { frontContent, backContent, className }: FlipCardProps = {
    frontContent: "Front Content",
    backContent: "Back Content",
  },
) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={cn("perspective-1000 cursor-pointer outline-none", className)}
      onMouseDown={() => {
        console.log("???");
        handleFlip();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleFlip();
        }
      }}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute z-[2] flex h-full w-full items-center justify-center overflow-hidden [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
          {frontContent}
        </div>
        <div className="absolute flex h-full w-full justify-center overflow-hidden bg-white [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
