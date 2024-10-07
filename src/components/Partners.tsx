import Image from "next/image";

const companiesImage = ["/company1.svg", "/company2.svg", "/company3.svg", "/company4.svg", "/company5.svg"];

export function Partners() {
  return (
    <div className="bg-darkgreen w-full py-12">
      <div className="w-5/6 mx-auto flex items-center gap-20 justify-between opacity-75">
        <h3 className="font-semibold text-white text-2xl leading-9 shrink-0">Our partners</h3>

        <div className="flex items-center gap-10">
          {companiesImage.map((companyImage, index) => (
            <Image key={index} src={companyImage} alt={`Our Partner ${index}`} width={146} height={42} />
          ))}
        </div>
      </div>
    </div>
  );
}
