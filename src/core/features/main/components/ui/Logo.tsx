import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <ImgNormalCustom
        alt="logo"
        src={"/common/img/logo.png"}
        width={100}
        height={100}
      />
    </Link>
  );
}

export default Logo;
