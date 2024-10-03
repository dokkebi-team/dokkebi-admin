"use client";

import { cn } from "@/utils/ui";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

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

  const [isSelecting, setIsSelecting] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsSelecting(false);
  }, []);

  const handleMouseMove = useCallback(() => {
    if (window.getSelection()?.toString()) {
      setIsSelecting(true);
    }
  }, []);

  return (
    <div
      className={cn("cursor-pointer outline-none", className)}
      onClick={(e) => {
        if (isSelecting) {
          e.preventDefault();
          e.stopPropagation();
          setIsSelecting(false);
          return;
        }

        handleFlip();
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
        <div
          className="absolute z-[2] flex h-full w-full justify-center overflow-hidden bg-white [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
