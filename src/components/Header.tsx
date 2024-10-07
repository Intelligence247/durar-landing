import Image from "next/image";
import Link from "next/link";

import { GreenCallToActionButton } from "@/components/GreenCallToActionButton";
import { headerLinks } from "@/constants/routes";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-white border-4 border-orange/50 rounded-full pl-14 pr-5 py-6 w-full max-w-[960px] mx-auto">
      <div>
        <Image alt="Durar Logo" width={146} height={46} src="/durar-green.svg" />
      </div>

      <nav className="flex items-center justify-center gap-12 text-high font-medium text-lg">
        {headerLinks.map((headerLink) => (
          <Link key={headerLink.url} href={headerLink.url} className="hover:underline hover:underline-offset-4">
            {headerLink.label}
          </Link>
        ))}
      </nav>

      <GreenCallToActionButton />
    </header>
  );
}
