"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlipCard(
  { frontContent, backContent }: FlipCardProps = {
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
      className="perspective-1000 h-[400px] w-full cursor-pointer"
      onClick={handleFlip}
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
        <Card className="absolute h-full w-full [backface-visibility:hidden]">
          <CardContent className="flex h-full items-center justify-center p-4">
            {frontContent}
          </CardContent>
        </Card>
        <Card className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <CardContent className="flex h-full items-center justify-center p-4">
            {backContent}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
