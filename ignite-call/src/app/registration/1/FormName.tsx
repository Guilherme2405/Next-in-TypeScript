"use client";
import { SubmitingButton } from "../../../components/submitingButton";

export function FormComponents() {
  return (
    <div className="w-full flex flex-col flex-wrap">
      <div>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome de usuário</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="zuzsten"
              className="w-full h-12 bg-[#121214] rounded-lg p-4 text-white focus:outline-none border-2 border-transparent focus:border-[#00B37E] transition-all focus:duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full h-12 bg-[#121214] rounded-lg p-4 text-white focus:outline-none border-2 border-transparent focus:border-[#00B37E] transition-all focus:duration-300"
            />
          </div>
          <SubmitingButton children="Próximo passo" />
        </form>
      </div>
    </div>
  );
}
