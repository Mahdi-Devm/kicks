import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import {
  TypographyH2,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";

function page() {
  return (
    <SectionLayout>
      <div className="flex justify-center">
        <ImgNormalCustom
          src={"/common/img/main/banshop.png"}
          width={1200}
          height={1000}
          alt=""
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="flex flex-col">
          <TypographyH2>Life Style Shoes</TypographyH2>
          <TypographySmall>122 items</TypographySmall>
        </div>
        <Button className="flex" variant="outline" size="lg">
          Trending
          <ChevronDown />
        </Button>
      </div>
    </SectionLayout>
  );
}

export default page;
