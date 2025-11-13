import {
  TypographyH1,
  TypographyH4,
  TypographyP,
  TypographySmall,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { testimonialsData } from "@/core/assets/mock/blog";
function ReviewsSection() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <TypographyH1>Reviews</TypographyH1>
        <Button>See all</Button>
      </div>
      <Swiper
        loop
        breakpoints={{
          380: { slidesPerView: 1.1 },

          1280: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        slidesPerView={3}
        className="mt-6"
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="p-4 flex items-center justify-between">
                <div className="max-w-[70%]">
                  <TypographyH4>{item.name}</TypographyH4>
                  <TypographySmall>{item.review}</TypographySmall>
                  <TypographyP>
                    {item.rating} {"⭐".repeat(item.rating)}
                  </TypographyP>
                </div>
                <ImgNormalCustom
                  alt={item.name}
                  src={item.userImg}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />
              </div>

              <ImgNormalCustom
                src={item.blogImg}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-[250px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewsSection;
