import { Logotype } from "@/src/components/brand/logotype";
import { MenuIcon, SparklesIcon } from "lucide-react";
import heroImgSrc from "../assets/images/hero.png";
import Image from "next/image";
import { typography } from "../assets/fonts";
import { Button } from "design-system/components/ui/button";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center mx-auto w-full max-w-screen-xl p-5 md:px-10 md:py-6 lg:px-10">
        <Logotype className="h-10 w-auto" />

        <div>
          <MenuIcon className="text-primary" size={32} strokeWidth={2} />
        </div>
      </header>

      <main className="mt-1">
        {/* Hero */}
        <section className="flex flex-col px-5 gap-7 mx-auto max-w-xl md:gap-10 lg:max-w-screen-xl lg:flex-row lg:px-10">
          <div className="flex flex-col gap-4 md:gap-7 lg:justify-center">
            <div className="text-content font-semibold">
              <h1 className="text-[34px] leading-[1.33] md:text-5xl lg:text-[56px] lg:leading-[1.57]">
                Libere <strong className="font-semibold text-primary">a inteligência</strong>
              </h1>

              <h2 className="text-2xl md:text-4xl lg:text-[44px]">
                que há dentro de você.
              </h2>
            </div>

            <p className={`${typography.petrona.className} text-[15px] text-paragraph font-semibold md:text-lg lg:text-[22px] lg:leading-[1.3] lg:max-w-[600px]`}>
              Aprimore suas habilidades com conteúdo exclusivo, guiado pelos melhores especialistas. Comece hoje e construa o  futuro dos seus sonhos.
            </p>

            <div className="w-full flex gap-x-3 gap-y-1 items-center flex-wrap md:gap-x-4 lg:mt-[22px]">
              <Button className="lg:h-[46px] lg:w-[248px] lg:text-sm">
                Comece agora mesmo!
              </Button>

              <Button
                className="flex items-center gap-1 underline text-content px-0 font-semibold transition-all hover:bg-accent md:gap-3 lg:h-[46px] lg:w-[248px] lg:text-sm"
                variant="link"
              >
                <SparklesIcon className="text-content md:!w-5 md:!h-5" />

                Insigths com ChatGPT!
              </Button>
            </div>
          </div>

          <Image
            className="max-w-[90%] mx-auto translate-y-[1px] min-[400px]:max-w-xs md:max-w-sm"
            src={heroImgSrc}
            priority
            alt="Mulher jovem de cabelos cacheados sorridente com blusa branca e casaco azul claro de linhas brancas, segurando livros e com um fone de ouvido headset laranja em seu pescoço. À sua direita um ícone de brilho e à esquerda um ícone de coroa, ambos em cor azul escura e minimalistas. Atrás dela um retângulo azul claro com bordar curvas semi-transparente."
          />
        </section>

        <footer className="bg-[#0C2542] flex items-center justify-center py-6 px-8">
          <p className="font-semibold text-xs text-[#BFBFBF] text-center">
            Todos os direitos reservados © HenriqueSenaDev 2024
          </p>
        </footer>
      </main>
    </div>
  );
}
