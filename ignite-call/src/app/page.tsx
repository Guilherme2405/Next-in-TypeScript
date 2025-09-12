"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import Image from "next/image";

import maskAuth from "@/public/images/mask-auth.png";
import calendarAuth from "@/public/images/calendar-auth.png";

const handlePreSubmitschema = z.object({
  username: z
    .string()
    .min(3, { message: "Username deve ter pelo menos 3 caracteres" })
    .max(25, { message: "Username deve ter no máximo 25 caracteres" })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: "Username deve conter apenas letras, números e hífens",
    })
    .transform((val) => val.toLowerCase()),
});

export default function LandingAuth() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof handlePreSubmitschema>>({
    resolver: zodResolver(handlePreSubmitschema),
  });

  async function handlePreSubmit(data: z.infer<typeof handlePreSubmitschema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success("Username cadastrado com sucesso", {
        style: { background: "#00875F", color: "#fff" },
      });
      router.push(`/registration/1?username=${data.username}`);
    } catch (error) {
       toast.error("Erro ao cadastrar username", {
         style: { background: "#F75A68", color: "#fff" },
       });
      console.log(error);
    }
  }

  return (
    <div
      className="w-full h-170 flex flex-wrap items-center justify-between xs:gap-4 gap-0"
      style={{
        backgroundImage: `url(${maskAuth.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex flex-col flex-wrap items-center justify-center gap-6 px-6">
        <div className="max-w-120 w-full flex flex-col flex-wrap gap-6">
          <div>
            <h1 className="md:text-6xl text-4xl font-bold text-white">
              Agendamento descomplicado
            </h1>
            <span className="text-sm text-gray-400">
              Conecte seu calendário e permita que as pessoas marquem
              agendamentos no seu tempo livre.
            </span>
          </div>

          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 bg-[#202024] rounded-lg p-4 border-solid border-1 border-[#323238]">
            <form
              action=""
              className="w-full flex flex-row md:flex-nowrap flex-wrap items-center justify-center gap-4"
              onSubmit={handleSubmit(handlePreSubmit)}
            >
              <input
                type="text"
                placeholder="Username"
                className="w-full h-12 bg-[#121214] rounded-lg  text-white flex items-center justify-center gap-2 px-6 py-3 focus:outline-none border-2 border-transparent focus:border-[#00875F]"
                {...register("username")}
              />

              <button
                className="w-30 md:h-12 h-10 bg-[#00875F] rounded-lg text-white flex items-center justify-center gap-2 px-3 py-3 cursor-pointer hover:bg-[#00B37E] transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                <span>Reservar</span>
                <ArrowRight size={16} />
                {
                  (errors.username &&
                    toast.error(errors.username.message, {
                      style: { background: "#F75A68", color: "#fff" },
                    }),
                  "")
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={calendarAuth}
          alt="Agendamento descomplicado"
          height={442}
          quality={100}
          className="2xl:block hidden"
          priority
        />
      </div>
      <Toaster />
    </div>
  );
}
