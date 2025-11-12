"use client";
import React, { useState } from "react";
import Logo from "../../ui/Logo";
import { User, Search, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/core/components/shadcn/ui/sheet";
import { Button } from "@/core/components/shadcn/ui/button";
import NavItemsHeaderDesktop from "../../ui/header/NavItemsHeaderDesktop";
import NavItemsHeaderMobile from "../../ui/header/NavItemsHeaderMobile";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="pages-container relative">
      <div className=" bg-background pages-container m-5 rounded-md flex  items-center justify-between relative">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-64 p-0">
            <SheetHeader className="p-6 border-b">
              <SheetTitle className="flex items-center gap-2">
                <Logo />
              </SheetTitle>
            </SheetHeader>

            <NavItemsHeaderMobile />
          </SheetContent>
        </Sheet>
        <NavItemsHeaderDesktop />
        <div className="absolute transform left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        <div className="flex  items-center gap-4">
          <Search className="hidden lg:flex" />
          <User />
          <div className="bg-accent flex items-center justify-center p-2 rounded-full  w-8 h-8">
            0
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
