"use client";
import { SubmitingButton } from "@/src/components/submitingButton";
import { Avatar } from "@/src/components/avatar";

export function FormDescripition() {
  return (
    <div className="w-full max-w-127.5 flex flex-col flex-wrap gap-4 p-6 bg-[#202024] rounded-lg border-solid border-1 border-[#323238]">
      <div>
        <form action="" className="flex flex-col gap-4">
          <div className="w-full flex flex-wrap gap-4">
            <div className="w-full flex flex-col flex-wrap gap-4">
              <h1>Foto de perfil</h1>
              <div className="w-full flex flex-row flex-wrap items-center justify-start gap-4">
                <Avatar />

                <div
                  className="w-39 h-10 flex flex-row flex-nowrap items-center justify-center bg-transparent px-4 py-2 
                rounded-lg text-sm text-[#00B37E] font-bold border-solid border-2 border-[#00B37E] cursor-pointer"
                >
                  <label htmlFor="photo" className="cursor-pointer">
                    <span>Selecionar foto</span>
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    className="hidden"
                    title="Selecione uma foto"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col flex-wrap gap-2">
              <h1>Sobre você</h1>
              <textarea
                name="description"
                id="description"
                className="w-full h-30 bg-[#121214] rounded-lg p-4 text-white focus:outline-none border-2 border-transparent focus:border-[#00B37E] transition-all focus:duration-300"
              />

              <span className="text-sm text-gray-400">
                Fale um pouco sobre você. Isto será exibido em sua página
                pessoal.
              </span>
            </div>
          </div>
          <SubmitingButton children="Finalizar" />
        </form>
      </div>
    </div>
  );
}
