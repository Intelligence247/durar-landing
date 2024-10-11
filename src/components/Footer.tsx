import Image from "next/image";
import Link from "next/link";

import { footerLinks, socialLinks } from "@/constants/routes";

export function Footer() {
  return (
    <footer className="bg-darkgreen py-16 rounded-t-[40px]">
      <div className="lg:w-11/12 mx-auto flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="">
          <Link href="/">
            <Image alt="Durar Logo" width={220} height={70} src="/durar-white.svg" className="lg:scale-75 xl:scale-100" />
          </Link>
        </div>

        <nav className="flex items-center lg:justify-center gap-3 xl:gap-6 text-white font-medium text-base xl:text-lg">
          {footerLinks.map((footerLink) => (
            <Link key={footerLink.url} href={footerLink.url} className="hover:underline hover:underline-offset-4 decoration-2">
              {footerLink.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center lg:justify-center">
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.url}
              href={socialLink.url}
              className="flex justify-center items-center bg-white border-2 border-orange rounded-full w-11 h-11 scale-90 xl:scale-100">
              <Image
                src={socialLink.icon}
                width={socialLink.icon === "/facebook.svg" ? 12 : 20}
                height={socialLink.icon === "/facebook.svg" ? 24 : 20}
                alt="Social Link Icon"
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
