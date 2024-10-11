import Link from "next/link";
import Image from "next/image";

export function FloatingIcon() {
  return (
    <div className="fixed bottom-4 right-4 z-10 w-14 h-14">
      <Link href="/">
        <Image src={"/whatsapp.svg"} fill alt="Contact Us Icon" className="drop-shadow-2xl animate-bounce transition hover:grayscale" />
      </Link>
    </div>
  );
}
