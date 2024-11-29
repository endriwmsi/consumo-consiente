import Image from "next/image";
import { Badge } from "../ui/badge";
import { ChecklistItem } from "../ui/check-list-icon";
import img from "../../../public/images/banner-home.png";

export default function Resources() {
  return (
    <section>
      <div className="w-full px-4 sm:px-6 bg-primary/5">
        {/* Left content */}
        <div className="mx-auto flex flex-col lg:flex-row py-[120px] max-w-6xl px-4 sm:px-6">
          <div className="w-full lg:w-1/3 flex flex-col justify-top">
            <div>
              <Badge>Missão</Badge>
            </div>

            <h2 className="text-4xl font-bold mt-2 mb-10">
              Assistente Virtual para o Consumo Consciente
            </h2>

            <span className="">
              Nossa IA no WhatsApp sugere receitas com os ingredientes
              disponíveis em casa, combatendo o desperdício de alimentos.
            </span>

            <div className="flex flex-col gap-2 mt-10">
              <ChecklistItem text="Redução do desperdício de recursos." />
              <ChecklistItem text="Economia financeira a longo prazo." />
              <ChecklistItem text="Menor impacto ambiental." />
            </div>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-2/3 flex justify-end items-center">
            <Image
              className="w-[351px] h-[250px] md:w-[751px] md:h-[536px] mt-5 lg:mt-0 lg:w-[639px] lg:h-[487px] aspect-square border-2 border-primary/75 rounded-3xl"
              src={img}
              alt="Secondary illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
