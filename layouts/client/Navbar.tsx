"use client"
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Building2, Fish, House, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

const Navbar = () => {
  return <header className="container flex justify-center items-center">
    <nav className="flex justify-center items-center gap-4 w-full p-4">
      <Sidebar />
      <Link href={"/"} className="mx-auto">
        <Image src={"/logo/logo.png"} alt={"logo.png"} width={56} height={56} />
      </Link>
      <ModeToggle />
    </nav>
  </header>
}

type NavMenu = {
  "name": string;
  "path": string;
  "icon": ReactNode
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navMenus: NavMenu[] = [
    {
      "name": "Home",
      "path": "/",
      "icon": <House />,
    }, {
      "name": "Product",
      "path": "/products",
      "icon": <Fish />,
    },
    {
      "name": "About",
      "path": "/about",
      "icon": <Building2 />,
    },
  ]
  return <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
    <SheetTrigger className="cursor-pointer" asChild>
      <Button>{!isOpen ? <Menu /> : <X />}</Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-full sm:w-135">
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetDescription className="flex flex-col mt-8">
          {
            navMenus.map((navMenu, id) => (
              <Link href={navMenu.path} className="flex items-center gap-4 scroll-m-20 text-2xl font-semibold tracking-tight hover:bg-primary hover:text-secondary py-4 px-4 rounded-md" onClick={() => setIsOpen(!isOpen)} key={id}>
                {navMenu.icon}{navMenu.name}
              </Link>
            ))
          }
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet >
}

export default Navbar;
