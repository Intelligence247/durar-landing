import Image from "next/image";
import Link from "next/link";

import { GreenCallToActionButton } from "@/components/GreenCallToActionButton";
import { headerLinks } from "@/constants/routes";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-white border-4 border-orange/50 rounded-full pl-0 md:pl-4 lg:pl-14 pr-5 py-3 w-full max-w-[360px] md:max-w-[960px] mx-auto">
      <div>
        <Link href="/">
          <Image alt="Durar Logo" width={146} height={46} src="/durar-green.svg" className="scale-75 md:scale-90 lg:scale-100" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-12 text-high font-medium text-lg">
        {headerLinks.map((headerLink) => (
          <Link key={headerLink.url} href={headerLink.url} className="hover:underline hover:underline-offset-4 decoration-2">
            {headerLink.label}
          </Link>
        ))}
      </nav>

      <GreenCallToActionButton />
    </header>
  );
}
