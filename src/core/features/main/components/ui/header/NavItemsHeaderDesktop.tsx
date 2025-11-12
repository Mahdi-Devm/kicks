import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, FileText, Info, Mail, User, Users } from "lucide-react";
function NavItemsHeaderDesktop() {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      <span className="flex items-center gap-1">
        New Drops <span className="text-orange-500">🔥</span>
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center ">
          Men
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background p-2 space-y-1.5 rounded-md">
          <DropdownMenuLabel className="flex items-center gap-2 text-sm font-medium">
            <User className="h-4 w-4" />
            My Account
          </DropdownMenuLabel>

          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4 text-muted-foreground" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <FileText className="h-4 w-4 text-muted-foreground" />
            Blogs
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <Info className="h-4 w-4 text-muted-foreground" />
            About
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <Users className="h-4 w-4 text-muted-foreground" />
            Team
          </DropdownMenuItem>

          <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Contact
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <span>Women</span>
    </nav>
  );
}

export default NavItemsHeaderDesktop;
