import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import React from "react";

function page() {
  return (
    <SectionLayout>
      <h1>hello world</h1> {/* ← Rubik */}
      <p>تست بدون کلاس</p> {/* ← Rubik */}
      <div className="font-bold">بولد</div> {/* ← Rubik Bold */}
      <span>معمولی</span> {/* ← Rubik Regular */}
    </SectionLayout>
  );
}

export default page;
