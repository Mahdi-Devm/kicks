import React from "react";
import Link from "next/link";
import { User, FileText, Info, Users, Mail } from "lucide-react";
function NavItemsHeaderMobile() {
  return (
    <nav className="flex flex-col p-4 space-y-0">
      <Link
        href="#"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <User className="h-4 w-4" />
        Profile
      </Link>

      <Link
        href="#"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <FileText className="h-4 w-4" />
        Blogs
      </Link>

      <Link
        href="#"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <Info className="h-4 w-4" />
        About
      </Link>

      <Link
        href="#"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <Users className="h-4 w-4" />
        Team
      </Link>

      <Link
        href="#"
        className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors py-2.5 border-b border-border/50 last:border-b-0"
      >
        <Mail className="h-4 w-4" />
        Contact
      </Link>
    </nav>
  );
}

export default NavItemsHeaderMobile;
