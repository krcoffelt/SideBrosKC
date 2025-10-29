'use client';

import { useState } from "react";
import clsx from "clsx";

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQ[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-white">
                {item.question}
              </span>
              <span
                className={clsx(
                  "inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-purple-200 transition",
                  isOpen ? "rotate-45" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "grid overflow-hidden px-6 text-sm text-slate-200/80 transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
