import Image from "next/image";
import Link from "next/link";

import { footerLinks, socialLinks } from "@/constants/routes";

export function Footer() {
  return (
    <footer className="bg-darkgreen py-16  rounded-t-[40px]">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div>
          <Image alt="Durar Logo" width={220} height={70} src="/durar-white.svg" />
        </div>

        <nav className="flex items-center justify-center gap-6 text-white font-medium text-lg">
          {footerLinks.map((footerLink) => (
            <Link key={footerLink.url} href={footerLink.url} className="hover:underline hover:underline-offset-4 decoration-2">
              {footerLink.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center justify-center">
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.url}
              href={socialLink.url}
              className="flex justify-center items-center bg-white border-2 border-orange rounded-full w-11 h-11">
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
