"use client";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import { useSearchParams, useRouter } from "next/navigation";

import { SubmitingButton } from "../../../components/submitingButton";

const handlePreSubmitSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username deve ter pelo menos 3 caracteres" })
    .max(25, { message: "Username deve ter no máximo 25 caracteres" })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: "Username deve conter apenas letras, números e hífens",
    }),
  name: z
    .string()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
    .max(50, { message: "Nome deve ter no máximo 50 caracteres" })
    .regex(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i, {
      message: "Nome deve conter apenas letras",
    }),
});

export function FormComponents() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof handlePreSubmitSchema>>({
    resolver: zodResolver(handlePreSubmitSchema),
  });

  useEffect(() => {
    setValue("username", String(searchParams.get("username")));
  }, [searchParams.get("username")]);

  async function handlePreSubmit(data: z.infer<typeof handlePreSubmitSchema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success("Username cadastrado com sucesso", {
        style: { background: "#00875F", color: "#fff" },
      });
      router.push("/registration/2");
    } catch (error) {
      toast.error("Erro ao cadastrar nome", {
        style: { background: "#F75A68", color: "#fff" },
      });
      console.log(error);
    }
  }

  return (
    <div className="w-full flex flex-col flex-wrap">
      <div>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handlePreSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome de usuário</label>
            <input
              type="text"
              id="username"
              placeholder="zuzsten"
              {...register("username")}
              className="w-full h-12 bg-[#121214] rounded-lg p-4 text-white focus:outline-none border-2 border-transparent focus:border-[#00B37E] transition-all focus:duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="John Doe"
              className="w-full h-12 bg-[#121214] rounded-lg p-4 text-white focus:outline-none border-2 border-transparent focus:border-[#00B37E] transition-all focus:duration-300"
            />
          </div>
          <SubmitingButton
            children="Próximo passo"
            type="submit"
            disabled={isSubmitting}
          />
        </form>
        <Toaster />
        {
          (errors.username &&
            toast.error(errors.username.message, {
              style: { background: "#F75A68", color: "#fff" },
            }),
          "")
        }
        {
          (errors.name &&
            toast.error(errors.name.message, {
              style: { background: "#F75A68", color: "#fff" },
            }),
          "")
        }
      </div>
    </div>
  );
}
