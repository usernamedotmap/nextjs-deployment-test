import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"


const NavMobile = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image src="./icons/menu.svg" width={24} height={24} className="cursor-pointer" alt="menu"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src='./images/logo.svg' width={80} height={38} alt="logo" />
          <Separator className="border-gray-100" />
          <NavItems />

        </SheetContent>
      </Sheet>

    </nav>
  )
}

export default NavMobile
