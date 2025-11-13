"use client";

import SectionLayout from "@/core/components/custom/ui/SectionLayout";
import { TypographyBig } from "@/core/components/custom/ui/Typography";
import HeroSiperSection from "@/core/features/main/components/ui/HeroSiperSection";

import CardProduct from "@/core/features/main/components/ui/CardProduct";
import { products } from "@/core/assets/mock/products";
import HeadeCardProduct from "@/core/features/main/components/ui/HeadeCardProduct";
import CategoriesSection from "@/core/features/main/components/ui/CategoriesSection";
import ReviewsSection from "@/core/features/main/components/ui/ReviewsSection";

export default function HeroBannerWithClickableThumbs() {
  return (
    <>
      <SectionLayout>
        <TypographyBig className="tracking-widest ">
          DO IT <span className="text-primary">RIGHT</span>
        </TypographyBig>
      </SectionLayout>
      <SectionLayout>
        <HeroSiperSection />
      </SectionLayout>
      <SectionLayout>
        <HeadeCardProduct />
        <CardProduct products={products} />
      </SectionLayout>
      <CategoriesSection />

      <SectionLayout>
        <ReviewsSection />
      </SectionLayout>
    </>
  );
}
