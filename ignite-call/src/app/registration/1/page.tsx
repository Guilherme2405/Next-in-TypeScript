"use client";
import { FormComponents } from "@/src/app/registration/1/FormName";

import { Resumer } from "@/src/components/resumer";
export default function RegistrationOne() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 ">
      <Resumer
        title="Bem-vindo ao Ignite Call"
        children="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
        step={1}
      />
      <div className="w-full max-w-127.5 flex flex-col flex-wrap gap-4 p-6 bg-[#202024] rounded-lg border-solid border-1 border-[#323238]">
        <FormComponents />
      </div>
    </div>
  );
}
