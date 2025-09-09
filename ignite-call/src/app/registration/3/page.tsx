import { FormWeekend } from "./FormWeekend";
import { Resumer } from "@/src/components/resumer";

export default function Registration3() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      <Resumer
        title="Quase lá"
        children="Defina o intervalo de horários que você está disponível em cada dia da semana."
        step={3}
      />
      <FormWeekend />
    </div>
  );
}
