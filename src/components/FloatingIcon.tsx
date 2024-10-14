import Link from "next/link";
import Image from "next/image";

export function FloatingIcon() {
  return (
    <div className="fixed bottom-4 right-4 z-10 h-12 w-12 md:w-14 md:h-14">
      <Link href="https://wa.me/2347078874420">
        <Image src={"/whatsapp.svg"} fill alt="Contact Us Icon" className="drop-shadow-2xl animate-bounce transition hover:grayscale" />
      </Link>
    </div>
  );
}
