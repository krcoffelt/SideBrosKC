'use client';

import Image from "next/image";
import { useState, CSSProperties } from "react";
import clsx from "clsx";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  label: string;
};

export function BeforeAfterSlider({ beforeSrc, afterSrc, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200">
        <Image
          src={afterSrc}
          alt={`${label} after cleaning`}
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
          aria-hidden="true"
        >
          <Image
            src={beforeSrc}
            alt=""
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-[calc(var(--pos)*1%)] flex -translate-x-1/2 items-center"
          style={{ "--pos": position } as CSSProperties}
          aria-hidden="true"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow">
            <span className="text-xs font-semibold text-slate-600">Drag</span>
          </div>
        </div>
      </div>
      <label className="block text-sm font-medium text-slate-700">
        Before / After: {label}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className={clsx(
            "mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200",
            "accent-indigo-600"
          )}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={position}
        />
      </label>
    </div>
  );
}
