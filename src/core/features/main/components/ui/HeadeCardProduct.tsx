import { TypographyH1 } from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import React from "react";

function HeadeCardProduct() {
  return (
    <div className="flex items-end justify-between py-5">
      <TypographyH1 className="font-semibold flex flex-col items-start -tracking-tighter">
        Don’t miss out <span>new drops</span>
      </TypographyH1>
      <Button>Shop New Drops</Button>
    </div>
  );
}

export default HeadeCardProduct;
