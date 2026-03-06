import { contacts } from "@/constants/contact";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="grid lg:grid-cols-5 gap-10 -mt-8 lg:mt-0"
    >
      <div className="flex flex-col col-span-2 gap-6">
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
              <div className=" h-15 w-15 border-2 border-white p-4">
                <Icon />
              </div>
              <div>{item.label}</div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-6 col-span-3">
        <p className="">
          Neque lobortis nunc suspendisse aliquet accumsan laoreet nibh fusce
          inceptos iaculis orci. Pretium pede mattis mollis praesent odio
          eleifend egestas. Tempor nascetur orci malesuada lacinia lectus est
          litora adipiscing vehicula pede. Libero enim cubilia turpis
          condimentum lacinia lobortis maximus quam facilisis bibendum. Nibh
          lectus cubilia mus sagittis iaculis. Maximus justo consequat molestie
          cras dui tortor placerat proin hendrerit. Accumsan dignissim magna
          habitant pretium est. Mi potenti etiam tellus gravida euismod
          condimentum dictum dui. Fermentum lacus volutpat venenatis primis odio
          conubia. Congue nunc porttitor litora lorem facilisis pharetra.
          Vestibulum magnis eu nam ut porta venenatis quis accumsan rhoncus.
          Tempus convallis amet lobortis maecenas maximus nec ultricies.
        </p>
        <p>
          Vestibulum a tincidunt convallis ex cubilia dapibus auctor lacus
          accumsan metus nunc. Tristique ornare porta leo suspendisse hac
          natoque feugiat lobortis litora. Interdum iaculis class morbi orci
          magnis metus habitant natoque sed maximus non.Vivamus in nibh
          convallis praesent himenaeos litora duis fringilla nec ut. Nec proin
          netus placerat per amet. Elit eu si sociosqu tristique libero ante
          massa. Mus justo consequat scelerisque ornare eleifend a. Faucibus
          sociosqu mollis blandit per ac pharetra sodales. Tincidunt potenti
          natoque lorem finibus lacinia pulvinar risus nullam sed primis mattis.
          Facilisis ligula dis nascetur semper convallis consectetuer commodo.
          Phasellus nunc laoreet vehicula adipiscing at sem auctor cubilia
          commodo viverra. Ligula venenatis lorem ad ipsum efficitur aliquam.
          Hendrerit porttitor dapibus dolor eleifend sollicitudin senectus. Eros
          adipiscing gravida leo et conubia. Integer maecenas ad consequat non
          nec curae mi.
        </p>
      </div>
    </section>
  );
}
