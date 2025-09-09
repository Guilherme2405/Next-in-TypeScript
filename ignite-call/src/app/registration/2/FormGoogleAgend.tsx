"use client";
import { ArrowRight } from "@phosphor-icons/react";
export function FormGoogleAgend() {
  return (
    <div className="w-full flex flex-col flex-wrap gap-6">
      <div className="w-full flex flex-row flex-wrap items-center justify-between border-1 border-[#323238] p-4 rounded-lg">
        <h1>Google Agenda</h1>

        <button className="w-28 h-10 bg-transparent rounded-lg p-4 text-white flex items-center justify-center gap-2 border-solid border-2 border-[#00B37E] px-6 py-3">
          <span className="flex items-center justify-center gap-2 text-[#00B37E]">
            Conectar <ArrowRight size={16} className="fill-[#00B37E]" />
          </span>
        </button>
      </div>
      <div>
        <button className="w-full h-12 bg-[#00875F] rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3">
          <span className="flex items-center justify-center gap-2">
            <span>Próximo passo</span> <ArrowRight size={16} />
          </span>
        </button>
      </div>
    </div>
  );
}
