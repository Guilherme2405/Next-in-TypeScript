"use client";
import { ArrowRight } from "@phosphor-icons/react";

interface SubmitingButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function SubmitingButton({ children, type = "button", disabled }: SubmitingButtonProps) {
  return (
    <button disabled={disabled} type={type} className="w-full h-12 bg-[#00875F] rounded-lg p-4 text-white cursor-pointer flex items-center justify-center gap-2 hover:bg-[#00B27E] transition-all duration-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed">
        <span className="flex items-center justify-center gap-2">
          {children}
          <ArrowRight size={16} weight="bold" />
        </span>
    </button>
  );
}
