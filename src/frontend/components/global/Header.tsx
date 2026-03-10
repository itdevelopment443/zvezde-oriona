import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { cn } from "@/frontend/lib/utils";
import { mainHeaderMenu } from "@/frontend/constants/menus";

export default function Header() {
  return (
    <header className="fixed top-0 z-100 w-full flex items-center justify-between bg-primary py-2 px-8 lg:px-16">
      <div className="w-20">
        <Link href={"/"}>
          <div>
            <Image
              src="/cgp/logo.svg"
              className="h-20"
              height={100}
              width={100}
              alt="Logo"
            />
          </div>
        </Link>
      </div>
      {/* Computer */}
      <nav className="hidden lg:block">
        <ol className=" flex gap-6">
          {mainHeaderMenu.map((item, index) => (
            <li className={"flex items-center gap-2"} key={index}>
              <Link className=" text-lg uppercase font-medium" href={item.href}>
                {item.label}
              </Link>
              <ChevronDown
                strokeWidth={1}
                className={cn("flex items-center gap-2", {
                  hidden: !item.subMenu,
                })}
              />
            </li>
          ))}
        </ol>
      </nav>
      <div className="hidden lg:block">
        <Link href={"aipa.si"}>
          <Image
            src={"/cgp/aipa-logo-white.png"}
            height={50}
            width={50}
            alt="Logo"
          />
        </Link>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="w-7 h-7 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-primary text-white w-full px-8 py-20 z-9999"
          >
            <SheetTitle className=" hidden"></SheetTitle>
            <nav>
              <ol className="flex flex-col gap-6">
                {mainHeaderMenu.map((item, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="text-lg uppercase font-medium flex items-center justify-between"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <Link href={"https://aipa.si"}>
                  <Image
                    src={"/cgp/aipa-logo-white.png"}
                    height={50}
                    width={50}
                    alt="AIPA Logo"
                  />
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
