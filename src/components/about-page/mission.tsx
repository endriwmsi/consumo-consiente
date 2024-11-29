// import { Badge } from "../ui/badge";

// export default function Mission() {
//   return (
//     <section>
//       <div className="w-full px-4 sm:px-6">
//         {/* Hero content */}

//         <div className="mx-auto flex py-[120px] max-w-6xl px-4 sm:px-6">
//           <div className="w-1/2">b</div>

//           <div className="w-1/2">
//             <Badge>Missão</Badge>
//             <h2 className="text-4xl font-bold mt-2 mb-4">
//               Nosso melhor resultado
//             </h2>

//             <span className="">
//               Nossa missão é ajudar as pessoas a adotarem hábitos mais
//               sustentáveis, começando por melhorar a educação em nossa escola e
//               expandindo nossa mensagem para faculdades e grandes instituições.
//               Acreditamos que a conscientização é a base para transformar o
//               mundo, e estamos determinados a levar essa ideia adiante.
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { Badge } from "../ui/badge";
import img from "../../../public/images/banner-mission.png";

export default function Mission() {
  return (
    <section>
      <div className="w-full px-4 sm:px-6">
        <div className="mx-auto flex flex-col lg:flex-row py-[120px] max-w-6xl px-4 sm:px-6 gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 flex justify-start items-center">
            <Image
              className="w-[351px] h-[250px] md:w-[751px] md:h-[536px] mt-5 lg:mt-0 lg:w-[639px] lg:h-[487px] object-cover border-2 border-primary/75 rounded-3xl"
              src={img}
              alt="Secondary illustration"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-top">
            <div>
              <Badge>Missão</Badge>
            </div>

            <h2 className="text-4xl font-bold mt-2 mb-10">
              Nosso melhor resultado
            </h2>

            <span className="">
              Nossa missão é inspirar pessoas a adotarem hábitos mais
              sustentáveis, promovendo a conscientização como base para
              transformar o mundo. Começamos com iniciativas locais em nossa
              escola, escrevendo livros e criando conteúdos educativos, mas
              sonhamos em expandir nossa mensagem para faculdades e grandes
              instituições.
              <br />
              <br />
              Por meio da inovação e da tecnologia, desenvolvemos um chatbot
              inteligente no WhatsApp, projetado para tornar o consumo
              consciente acessível e prático. Essa assistente virtual ajuda a
              evitar desperdícios ao sugerir receitas com os ingredientes
              disponíveis, oferece dicas de sustentabilidade e responde a
              dúvidas de forma clara e direta.
              <br />
              <br />
              Além disso, nosso projeto se destaca pela combinação de educação e
              acessibilidade. Livros informativos, linguagem simplificada e
              ferramentas práticas são os pilares que garantem que pessoas de
              todas as idades possam adotar mudanças significativas no dia a
              dia. Nossa ação local já demonstra impacto, e estamos determinados
              a levar essa transformação para um nível global.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
