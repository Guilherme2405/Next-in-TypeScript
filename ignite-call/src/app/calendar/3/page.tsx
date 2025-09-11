"use client";

import { CalendarBlank, Clock } from "@phosphor-icons/react";

import { Avatar } from "@/src/components/avatar";

import { useDate } from "@/src/hook/useDate";

export default function Calendar3() {
  const { date, setDate, selectedTime, setSelectedTime } = useDate();
  return (
    <div className="w-full flex flex-col flex-wrap items-center justify-center gap-6 pb-6">
      <div className="flex flex-col flex-wrap items-center justify-center gap-2">
        <Avatar />
        <h1 className="text-2xl font-bold text-white">jhon doe</h1>
        <span className="text-sm text-gray-400">CTO @ignite-call</span>
      </div>

      <div className="w-full max-w-127.5 flex flex-col flex-wrap gap-4 p-6 bg-[#202024] rounded-lg border-solid border-1 border-[#323238]">
        <div className="flex flex-row flex-wrap items-center justify-start gap-4 border-b-1 border-[#323238] pb-4">
          <div className="flex flex-row flex-wrap items-center justify-start gap-2">
            <CalendarBlank size={20} />
            <span>
              {date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-start gap-2">
            <Clock size={20} />
            <span>{selectedTime}</span>
          </div>
        </div>

        <div>
          <form action="" className="w-full flex flex-col flex-wrap gap-4">
            <div>
              <label htmlFor="name">Seu nome</label>
              <input
                type="text"
                placeholder="Nome"
                className="w-full h-12 bg-[#121214] rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3"
              />
            </div>

            <div>
              <label htmlFor="email">Endereço de e-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full h-12 bg-[#121214] rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3"
              />
            </div>

            <div>
              <label htmlFor="observations">Observações</label>
              <textarea
                placeholder="Observações"
                className="w-full h-20 bg-[#121214] rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3"
              />
            </div>

            <div className="flex flex-row flex-wrap items-center justify-end gap-4">
              <button
                type="submit"
                className="w-28 h-12 bg-transparent rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Cancelar</span>
                </span>
              </button>

              <button
                type="submit"
                className="w-28 h-12 bg-[#00875F] rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Confirmar</span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
