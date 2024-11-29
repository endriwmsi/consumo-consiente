import Image from "next/image";
import { Badge } from "../ui/badge";
import img from "../../../public/images/banner-about.png";

export default function About() {
  return (
    <section>
      <div className="w-full px-4 sm:px-6 bg-primary/5">
        <div className="mx-auto flex flex-col lg:flex-row py-[120px] max-w-6xl px-4 sm:px-6 gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-top">
            <div>
              <Badge>O projeto</Badge>
            </div>

            <h2 className="text-4xl font-bold mt-2 mb-10">Sobre nós</h2>

            <span className="">
              Somos um projeto engajado, criado a partir de uma realidade que
              vivenciamos em nosso colégio: muitos alunos não consumiam de forma
              consciente. Inspirados por essa situação, decidimos tomar a
              iniciativa e criamos o projeto "Consumo Consciente", uma ação
              voltada para promover a sustentabilidade e conscientizar as
              pessoas sobre a importância de atitudes responsáveis no dia a dia.
              <br />
              <br />
              Nosso projeto ganhou vida em 2023, durante a Feira de Ciências,
              quando percebemos a dificuldade enfrentada não apenas em nossa
              escola, mas também em nossa cidade e nas regiões vizinhas. Uma
              pesquisa mostrou que cerca de 76% dos brasileiros não praticam
              consumo consciente, o que nos motivou a agir. Decidimos
              conscientizar as pessoas por meio de diversas ferramentas, como
              sites, livros, e agora, nosso chatbot inteligente.
            </span>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end items-center">
            <Image
              className="w-[351px] h-[250px] md:w-[751px] md:h-[536px] mt-5 lg:mt-0 lg:w-[639px] lg:h-[487px] object-cover border-2 border-primary/75 rounded-3xl"
              src={img}
              alt="Secondary illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
