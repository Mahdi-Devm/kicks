import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <ImgNormalCustom alt="logo" src={"/common/image/logo/Logo.png"} />
    </Link>
  );
}

export default Logo;
