import { ChevronRight } from "lucide-react";

export function GreenCallToActionButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-1 rounded-full py-3 md:py-4 lg:py-5 px-4 lg:px-8 bg-darkgreen hover:bg-darkgreen/80 active:bg-darkgreen/90 visited:bg-darkgreen text-[#FCFCFC] text-center text-xs md:text-base leading-3 md:leading-5 font-semibold transition">
      Get started
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
