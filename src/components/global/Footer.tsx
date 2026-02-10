import { copyrightFooter, mainFooterMenu } from "@/constants/menus";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 justify-center px-15 py-35 bg-primary">
      <nav>
        <ol className=" flex gap-10">
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
