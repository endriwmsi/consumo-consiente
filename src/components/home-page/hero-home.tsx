import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Escolhas Inteligentes para um Futuro Sustentável.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Consumir com consciência é escolher o que faz bem para o planeta
                e para a sociedade. Cada escolha conta para um futuro
                sustentável.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-2">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Button variant="outline">
                    <span className="relative inline-flex items-center">
                      <Link href="/sobre">Saiba Mais</Link>
                    </span>
                  </Button>
                </div>

                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    target="_blank"
                    href="https://wa.me/5599984309220?text=Ol%C3%A1%2C%20Como%20funcionar%20o%20Consumo%20Consciente%3F "
                  >
                    <Button>Conversar agora!</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
