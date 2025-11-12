"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
  TypographyH3,
  TypographyP,
} from "@/core/components/custom/ui/Typography";
import { Button } from "@/core/components/shadcn/ui/button";
function HeroSiperSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Summer Collection 2025",
      subtitle: "Up to 50% Off",
      badge: "Limited Time",
      image: "/common/img/main/image11.png",
    },
    {
      id: 2,
      title: "New Air Max Series",
      subtitle: "Light. Fast. Unstoppable.",
      badge: "New Drop",
      image: "/common/img/main/image11.png",
    },
    {
      id: 3,
      title: "Running Essentials",
      subtitle: "Built for Speed",
      badge: "Best Seller",
      image: "/common/img/main/image11.png",
    },
  ];
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Navigation]}
      effect="fade"
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
      }}
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="relative  overflow-hidden shadow-2xl "
    >
      {banners.map((banner) => {
        const nextIndex = (activeIndex + 1) % banners.length;
        const nextNextIndex = (activeIndex + 2) % banners.length;

        return (
          <SwiperSlide key={banner.id}>
            <div
              className="relative  md:h-[520px] bg-cover bg-center  rounded-2xl"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="relative h-full  flex flex-col justify-end px-4 pb-8 sm:px-6 sm:pb-10 md:px-16 md:pb-12 max-w-7xl mx-auto">
                <div className="text-white space-y-2 sm:space-y-3 md:space-y-4 max-w-md mt-5">
                  <TypographyP className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full ">
                    {banner.badge}
                  </TypographyP>
                  <TypographyH3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {banner.title}
                  </TypographyH3>
                  <TypographyP>{banner.subtitle}</TypographyP>
                  <Button variant="secondary">Shop Now</Button>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 hidden gap-3 md:flex">
                <div
                  onClick={() => setActiveIndex(nextIndex)}
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/50 group cursor-pointer hover:ring-primary transition-all duration-300"
                >
                  <ImgNormalCustom
                    src={banners[nextIndex].image}
                    alt={banners[nextIndex].title}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-2xl "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparen " />
                  <div className="absolute bottom-1 left-1 text-white text-xs font-medium">
                    {banners[nextIndex].badge}
                  </div>
                </div>

                <div
                  onClick={() => setActiveIndex(nextNextIndex)}
                  className="relative w-20 h-20 md:w-24 md:h-24  overflow-hidden rounded-2xl shadow-lg ring-2 ring-white/30 group cursor-pointer translate-y-2 translate-x-2 hover:ring-primary transition-all duration-300"
                >
                  <ImgNormalCustom
                    src={banners[nextNextIndex].image}
                    alt={banners[nextNextIndex].title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-2xl  "
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSiperSection;
