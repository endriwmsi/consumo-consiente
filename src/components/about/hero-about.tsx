import { Badge } from "../ui/badge";
import { ChecklistItem } from "../ui/check-list-icon";

export default function HeroHome() {
  return (
    <section>
      <div className="w-full px-4 sm:px-6 bg-black">
        {/* Hero content */}

        <div className="mx-auto flex py-[120px] max-w-6xl px-4 sm:px-6">
          <div className="w-1/2">
            <Badge>Missão</Badge>
            <h2 className="text-4xl font-bold mt-2 mb-4">
              Assistente Virtual
              <br />
              para o Consumo
              <br />
              Consciente
            </h2>

            <span className="">
              Nossa IA no WhatsApp sugere receitas com os
              <br />
              ingredientes disponíveis em casa, combatendo o
              <br />
              desperdício de alimentos.
            </span>

            <div className="flex flex-col gap-2 mt-5">
              <ChecklistItem text="Redução do desperdício de recursos." />
              <ChecklistItem text="Economia financeira a longo prazo." />
              <ChecklistItem text="Menor impacto ambiental." />
            </div>
          </div>
          <div className="w-1/2">b</div>
        </div>
      </div>
    </section>
  );
}
