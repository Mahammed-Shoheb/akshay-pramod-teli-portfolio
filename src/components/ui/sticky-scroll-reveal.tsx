"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title?: string;
    date?: string;
    logo?: React.ReactNode;
    description: React.ReactNode;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[] | null[]>([]);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const [cardsBreakpoints, setCardsBreakpoints] = useState<number[]>([]);

  useEffect(() => {
    const breakpoints = cardRefs.current.map((cardRef) => {
      const rect = cardRef?.getBoundingClientRect();
      if (rect && ref.current) {
        // Calculate the top position relative to the scroll container
        const containerRect = ref.current.getBoundingClientRect();
        const relativeTop = rect.top - containerRect.top;
        // const scrollHeight =
        //   ref.current.scrollHeight - ref.current.clientHeight;

        // Normalize the breakpoint to a range of 0 to 1
        return relativeTop / ref.current.scrollHeight;
      }
      return 0;
    });
    setCardsBreakpoints(breakpoints);
  }, [content]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (cardsBreakpoints.length > 0) {
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);

          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );

      setActiveCard(closestBreakpointIndex);
    }
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] sm:h-[30rem] overflow-y-auto no-scrollbar flex flex-col sm:flex-row-reverse sm:justify-center relative space-x-10 rounded-md pt-20 p-2 sm:p-10"
      ref={ref}
    >
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "min-h-60 sm:h-60 sm:w-80 rounded-md bg-white sticky -top-16 sm:top-10 overflow-hidden z-10",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title ?? "title" + index}
              className="my-20"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              {item.logo && (
                <motion.div
                  className="w-20 h-20 mb-2"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                >
                  {item.logo}
                </motion.div>
              )}
              {item.title && (
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
              )}
              {item.date && (
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="uppercase text-slate-600 tracking-wide text-sm"
                >
                  {item.date}
                </motion.p>
              )}
              {item.description && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
