import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/SectionBadge";

const pricingsContent = [
  {
    for: "Nigerians",
    amount: "₦50,000",
    benefits: ["Free Trial", "Everything in the Monthly Plan", "10% discount on all future courses"],
  },
  {
    for: "Foreigners",
    amount: "$50",
    benefits: [
      "Choose course of your choice",
      "Recorded lectures",
      "Materials and study guides",
      "Personalized progress tracking",
      "Certificate upon completion",
    ],
  },
  {
    for: "2 Kids or more",
    amount: "Custom",
    benefits: ["Free Trial", "Everything in the Monthly Plan", "10% discount on all future courses"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="-scroll-m-16 pt-24 pb-36">
      <div className="w-full px-4 md:px-8 xl:px-0 xl:w-5/6 mx-auto text-center">
        <SectionBadge label="Pricing" />

        <h2 className="text-darkgreen font-semibold text-xl md:text-3xl md:leading-10 mt-8">No credit card required</h2>

        <div className="mt-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-9 lg:gap-4 xl:gap-9 max-lg:max-w-[480px] max-lg:mx-auto">
          {pricingsContent.map((pricingContent, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#FFF7ED] border border-black/5 rounded-3xl px-3 pt-3 pb-7 basis-1/3 text-left",
                index === 1 && "bg-darkgreen border-0"
              )}>
              <div
                className={cn(
                  "bg-white rounded-xl p-4 md:p-7 lg:p-4 xl:p-7 flex items-end justify-between",
                  index === 1 && "bg-[#FFF7ED]"
                )}>
                <div className="flex justify-between text-darkgreen flex-col gap-9">
                  <p className="text-xs">Subscription</p>

                  <h3 className="text-lg md:text-xl font-semibold">{pricingContent.for}</h3>

                  <p className="text-xl md:text-2xl font-medium flex items-center">
                    {index === 3 ? (
                      "Custom"
                    ) : (
                      <>
                        {pricingContent.amount} <span className="font-medium text-xs">/mo</span>
                      </>
                    )}
                  </p>
                </div>

                <button
                  className={cn(
                    "rounded-full text-center text-[#FCFCFC] font-semibold px-3 md:px-6 py-3 text-xs leading-3 bg-darkgreen hover:bg-darkgreen/80 active:bg-darkgreen visited:bg-darkgreen transition",
                    index === 1 && "bg-orange hover:bg-orange/80 active:bg-orange visited:bg-orange"
                  )}>
                  Get started
                </button>
              </div>

              <div className={cn("mt-7 pl-3 flex flex-col gap-4 text-sm", index === 1 && "text-white")}>
                {pricingContent.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
