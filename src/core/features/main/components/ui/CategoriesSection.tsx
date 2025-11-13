import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import {
  TypographyH1,
  TypographyH3,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import { Share } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { categoriesData } from "@/core/assets/mock/categories";
function CategoriesSection() {
  return (
    <section className="bg-foreground ">
      <div className="flex justify-start pages-container">
        <TypographyH1 className="text-secondary">Categories</TypographyH1>
      </div>
      <div className=" ml-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={5.2}
          loop
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            380: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="rounded-tl-4xl  flex "
        >
          {categoriesData.map((category) => (
            <SwiperSlide key={category.id}>
              <div className={`"bg-[${category.bgColor}] rounded-tl-2xl `}>
                <ImgNormalCustom
                  src={category.img}
                  alt=""
                  width={500}
                  height={400}
                  className="object-cover rounded-2xl"
                />
                <div className="flex items-center justify-between p-4">
                  <TypographyH3 className="text-secondary">
                    {category.title}
                  </TypographyH3>
                  <Button variant="secondary">
                    <Share />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CategoriesSection;
