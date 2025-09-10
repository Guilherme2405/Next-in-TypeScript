"use client";
import { ArrowRight } from "@phosphor-icons/react";

interface SubmitingButtonProps {
  children: React.ReactNode;
}

export function SubmitingButton({ children }: SubmitingButtonProps) {
  return (
    <button type="submit" className="w-full h-12 bg-[#00875F] rounded-lg p-4 text-white flex items-center justify-center gap-2">
        <span className="flex items-center justify-center gap-2">
          {children}
          <ArrowRight size={16} weight="bold" />
        </span>
    </button>
  );
}
