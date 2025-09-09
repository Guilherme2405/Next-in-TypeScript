"use client";
import Image from "next/image";
import calendarAuth from "@/public/images/calendar-auth.png";
import maskAuth from "@/public/images/mask-auth.png";
import { GoogleLogo } from "@phosphor-icons/react";

export default function LandingAuth() {
  return (
    <div
      className="w-full h-170 flex flex-wrap items-center justify-between md:gap-4 gap-0"
      style={{ backgroundImage: `url(${maskAuth.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex-1 flex flex-col flex-wrap items-center justify-center gap-6 px-6">
        <div className="max-w-120 w-full flex flex-col flex-wrap gap-6">
          <div>
            <h1 className="md:text-6xl text-2xl font-bold text-white">
              Agendamento descomplicado
            </h1>
            <span className="md:text-sm text-xs text-gray-400">
              Conecte seu calendário e permita que as pessoas marquem
              agendamentos no seu tempo livre.
            </span>
          </div>
          <button className="md:w-55 w-full md:h-12 h-10 bg-[#DB4437] rounded-lg p-4 text-white flex items-center justify-center gap-2 px-6 py-3">
            <GoogleLogo size={16} />
            Entrar com Google
          </button>
        </div>
      </div>

      <div>
        <Image
          src={calendarAuth}
          alt="Agendamento descomplicado"
          width={824}
          height={442}
          className="2xl:block hidden"
        />
      </div>
    </div>
  );
}
