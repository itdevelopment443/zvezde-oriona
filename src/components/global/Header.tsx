import { mainHeaderMenu } from "@/constants/menus";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-100 w-full flex items-center justify-between bg-neutral-800 py-6 px-16">
      <div className="w-16">
        <Link href={"/"}>
          <div className="absolute left-16 top-0 bg-white p-5 rounded-b-sm">
            <Image
              src="/cgp/logo-black.svg"
              height={80}
              width={80}
              alt="Logo"
            />
          </div>
        </Link>
      </div>
      <nav>
        <ol className=" flex gap-10">
          {mainHeaderMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <div>
        <Link href={"aipa.si"}>
          <Image
            src={"/cgp/aipa-logo-white.png"}
            height={50}
            width={50}
            alt="Logo"
          />
        </Link>
      </div>
    </header>
  );
}
