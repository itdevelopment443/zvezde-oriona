import { contacts } from "@/constants/contact";
import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="flex flex-col gap-10 pt-30 ">
      <div className="flex items-center px-16 py-16">
        <div className=" flex flex-col gap-6">
          <h1 className=" max-w-[20ch]">Potrebujete dodatne informacije?</h1>
          <p className="max-w-[50ch]">
            Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
            inceptos iaculis orci.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                href={
                  item.type === "email"
                    ? `mailto:${item.href}`
                    : `tel:${item.href}`
                }
                className="flex gap-5 items-center"
                key={index}
              >
                <div className=" h-15 w-15 border border-primary p-4">
                  <Icon />
                </div>
                <div>{item.label}</div>
              </Link>
            );
          })}
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
