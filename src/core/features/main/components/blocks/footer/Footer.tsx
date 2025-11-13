import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyH2,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Input } from "@/core/components/shadcn/ui/input";
import React from "react";

function Footer() {
  return (
    <footer className=" mx-auto  max-w-[1380px] rounded-4xl bg-primary flex-col">
      <div className="p-10 text-secondary flex items-center gap-70 justify-center">
        <div>
          <div>
            <div className="p-2">
              <TypographyH2>Join our KicksPlus Club & get 15% off</TypographyH2>

              <TypographySmall>
                Sign up for free! Join the community.
              </TypographySmall>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input placeholder="Email" className="text-white" type="email" />

              <Button type="submit" className="text-black" variant="outline">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <ImgNormalCustom
          src={"/common/img/logop.png"}
          alt=""
          width={300}
          height={300}
        />
      </div>
      <div className="bg-foreground p-4 ">a</div>
    </footer>
  );
}

export default Footer;
