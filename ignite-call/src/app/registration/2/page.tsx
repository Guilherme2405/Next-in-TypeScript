import { FormComponents } from "@/src/components/formComponents";
import { Resumer } from "@/src/components/resumer";
import { FormGoogleAgend } from "./FormGoogleAgend";

export default function Registration2() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4">
      <Resumer
        title="Conecte sua agenda!"
        children="Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados."
      />
      <div className="w-full max-w-127.5 flex flex-col flex-wrap gap-4 p-6 bg-[#202024] rounded-lg">
        <FormGoogleAgend />
      </div>
    </div>
  );
}
