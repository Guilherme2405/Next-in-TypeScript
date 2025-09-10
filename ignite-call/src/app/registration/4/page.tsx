import { Resumer } from "@/src/components/resumer";
import { FormDescripition } from "./FormDescripition";

export default function Registration4() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-6">
      <Resumer
        title="Defina sua disponibilidade"
        children="Por último, uma breve descrição e uma foto de perfil."
        step={4}
      />
      
      <FormDescripition />
    </div>
  );
}