"use client";

import Link from "next/link";
import Logo from "./logo";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <div>
            <ul className="flex flex-1 items-center justify-end gap-4">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/sobre">SOBRE</Link>
              </li>
            </ul>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <a
                target="_blank"
                href="https://wa.me/5599984309220?text=Ol%C3%A1%2C%20Como%20funcionar%20o%20Consumo%20Consciente%3F "
              >
                <Button>Conversar agora!</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
