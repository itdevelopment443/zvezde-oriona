import { copyrightFooter, mainFooterMenu } from "@/constants/menus";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 justify-center px-15 pb-34 bg-primary">
      <nav>
        <ol className="flex flex-col lg:flex-row  justify-center items-center gap-8 lg:gap-12">
          {mainFooterMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <p className=" text-sm opacity-60">{copyrightFooter}</p>
    </footer>
  );
}
