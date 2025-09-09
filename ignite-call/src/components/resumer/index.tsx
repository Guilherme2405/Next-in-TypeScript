"use client";
import { useState } from "react";

interface ResumerProps {
  children: React.ReactNode;
  title: string;
}

export function Resumer({ children, title }: ResumerProps) {
  const [useProgress, setUseProgress] = useState(true);
  return (
    <div className="max-w-135 flex flex-col flex-wrap gap-4 px-6">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <span className="text-sm text-gray-400">{children}</span>
      </div>
      {useProgress && (
        <>
          <span className="text-[12px] text-grey-200">Passo 1 de 4</span>
          <div className="flex gap-2 flex-wrap items-center">
            <div className="h-1 sm:w-29.25 w-18 bg-white rounded-full" />
            <div className="h-1 sm:w-29.25 w-18 bg-white rounded-full" />
            <div className="h-1 sm:w-29.25 w-18 bg-white rounded-full" />
            <div className="h-1 sm:w-29.25 w-18 bg-white rounded-full" />
          </div>
        </>
      )}
    </div>
  );
}
