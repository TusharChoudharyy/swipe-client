// @ts-nocheck
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Item {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export function AnimatedTooltip({ items }: { items: Item[] }) {
  let [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="flex items-center">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="-mr-3 relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.img
            src={item.image}
            alt={item.name}
            className={cn(
              "h-12 w-12 rounded-full object-cover ring-2 ring-white cursor-pointer",
              hoveredIndex === idx && "z-20"
            )}
            whileHover={{ scale: 1.2, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 w-max px-4 py-2 rounded-xl bg-gray-900 text-white text-sm shadow-lg"
            >
              <p className="font-semibold">{item.name}</p>
              <p className="text-xs opacity-80">{item.designation}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
