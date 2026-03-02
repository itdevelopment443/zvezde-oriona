import Image from "next/image";
import ComboboxAwards from "./ComboboxAwards";

export default function AwardsHero() {
  return (
    <section className="flex flex-col gap-10 pb-30 ">
      <div className="flex items-center px-16 py-16">
        <div className=" flex flex-row items-center gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="max-w-[20ch]">Kategorije nagrade Zvezde Oriona</h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="max-w-[50ch]">
              Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh
              fusce inceptos iaculis orci. Pretium pede mattis mollis praesent
              odio eleifend egestas. Tempor nascetur orci malesuada lacinia
              lectus est litora adipiscing
            </p>{" "}
            <ComboboxAwards />
          </div>
        </div>
      </div>
      <div className="h-full">
        <Image
          src={"/cgp/placholder-2.png"}
          width={2000}
          height={1200}
          alt="Hero slika"
          className=" h-100 w-full object-cover"
        />
      </div>
    </section>
  );
}
