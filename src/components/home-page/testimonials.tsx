"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import patagoniaLogo from "../../../public/images/logo-patagonia.svg";
import teslaLogo from "../../../public/images/logo-tesla.svg";
import unileverLogo from "../../../public/images/logo-unilever.svg";
import ikeaLogo from "../../../public/images/logo-ikea.svg";
import microsoftLogo from "../../../public/images/logo-microsoft.svg";
import seventhLogo from "../../../public/images/logo-seventh.svg";

const testimonials = [
  {
    img: patagoniaLogo,
    company: "Patagonia",
    content:
      "Nossa missão de 'salvar nosso planeta' guia todas as nossas ações. Com o programa Worn Wear, reparamos e reaproveitamos equipamentos, reduzindo o desperdício e inspirando uma comunidade global a pensar de forma sustentável.",
  },
  {
    img: teslaLogo,
    company: "Tesla",
    content:
      "Na Tesla, sustentabilidade não é só um conceito—é nosso propósito. Cada veículo elétrico que fabricamos nos aproxima de um futuro mais limpo e com energia renovável.",
  },
  {
    img: unileverLogo,
    company: "Unilever",
    content:
      "Com o nosso Plano de Vida Sustentável, reduzimos impactos ambientais enquanto empoderamos comunidades. Desde embalagens ecológicas até a compra ética de matérias-primas, estamos transformando o consumo global",
  },
  {
    img: ikeaLogo,
    company: "Ikea",
    content:
      "Acreditamos que é possível oferecer produtos acessíveis e sustentáveis. Por meio de iniciativas de design circular e materiais renováveis, estamos construindo um amanhã melhor enquanto mobiliamos lares hoje.",
  },
  {
    img: microsoftLogo,
    company: "Microsoft",
    content:
      "Nos comprometemos a ser carbono negativo até 2030, provando que inovação tecnológica e responsabilidade ambiental podem criar um futuro que nos orgulha.",
  },
  {
    img: seventhLogo,
    company: "Seventh Generation",
    content:
      "De produtos de limpeza biodegradáveis à luta pela justiça climática, nosso objetivo é proteger o planeta para as próximas sete gerações—e além.",
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Não confie apenas na nossa palavra
          </h2>
          <p className="text-lg text-indigo-200/65">
            Empresas que inspiram um consumo consciente e mostram que é possível
            cuidar do planeta enquanto criam soluções inovadoras para a
            sociedade.
          </p>
        </div>

        {/* Cards */}
        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial testimonial={testimonial} category={category}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    company: string;
    content: string;
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] "opacity-30"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={testimonial.img} height={36} alt="Client logo" />
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </div>
    </article>
  );
}
