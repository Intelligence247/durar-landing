import Image from "next/image";

const companiesImage = ["/company1.svg", "/company2.svg", "/company3.svg", "/company4.svg", "/company5.svg"];

export function Partners() {
  return (
    <section className="bg-darkgreen w-full py-12">
      <div className="mx-auto flex items-center opacity-75 flex-wrap xl:flex-nowrap justify-center gap-12 w-11/12 xl:justify-between xl:gap-20 xl:w-5/6">
        <h3 className="font-semibold text-white text-2xl leading-9 shrink-0">Our partners</h3>

        <div className="flex max-lg:justify-center items-center gap-10 flex-wrap lg:flex-nowrap">
          {companiesImage.map((companyImage, index) => (
            <Image key={index} src={companyImage} alt={`Our Partner ${index}`} width={146} height={42} />
          ))}
        </div>
      </div>
    </section>
  );
}
