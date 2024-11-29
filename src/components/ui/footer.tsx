import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "../../../public/images/footer-illustration.svg";
import { InstagramIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/home">
                  <span className="text-indigo-200/65 transition hover:text-primary">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <span className="text-indigo-200/65 transition hover:text-primary">
                    Sobre
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/assistente">
                  <span className="text-indigo-200/65 transition hover:text-primary">
                    Assistente Virtual
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 2th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">© Consumo Consiente</p>
              <ul className="inline-flex gap-1">
                <li>
                  <Link href="https://www.instagram.com/consumoconsciente.cepcamm/">
                    <InstagramIcon width={16} height={16} />
                  </Link>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Github"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-transparent flex justify-center p-4 border-t border-zinc-900/80 w-full">
          <span>
            © 2024 All rights reserved. Made with ❤️ by Lucas Guimarães
          </span>
        </div>
      </div>
    </footer>
  );
}
