import React from "react";
import { ImgNormalCustom } from "@/core/components/custom/ui/ImgNormalCustom";
import { Badge } from "@/core/components/shadcn/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/shadcn/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Button } from "@/core/components/shadcn/ui/button";
import { ShoppingBag } from "lucide-react";
type Product = {
  src: string;
  title: string;
  price: number;
  percentOff?: number;
  rating?: number;
  inStock?: boolean;
};

type PropsCardProduct = {
  products: Product[];
  badgecolor?: string;
};

function CardProduct({ products, badgecolor = "black/80" }: PropsCardProduct) {
  return (
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
    >
      {products.map((product, index) => (
        <SwiperSlide
          key={index}
          className="relative max-w-sm rounded-md bg-background border border-border shadow-sm hover:shadow-lg transition-all"
        >
          <ImgNormalCustom
            src={product.src}
            alt={product.title}
            width={240}
            height={240}
            className="object-cover object-center w-full p-2 rounded-t-md"
          />

          {product.percentOff ? (
            <Badge
              variant="secondary"
              className={`absolute top-3 left-3 bg-${badgecolor} text-white px-3 py-1 rounded-bl-md text-xs `}
            >
              -{product.percentOff}% OFF
            </Badge>
          ) : (
            <>
              <Badge
                variant="secondary"
                className={`absolute top-3 left-3 bg-${badgecolor} text-white px-3 py-1 rounded-bl-md text-xs`}
              >
                New
              </Badge>
            </>
          )}

          <Card className="border-none bg-background mt-2 p-3">
            <CardHeader className="p-0">
              <CardTitle className="text-sm font-medium line-clamp-2 text-foreground/90">
                {product.title}
              </CardTitle>
            </CardHeader>

            <CardFooter className="p-0 flex justify-between flex-col items-center gap-3">
              <div className="flex justify-between items-center gap-3 w-full">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">
                    ${product.price}
                  </span>
                  {product.percentOff && (
                    <span className="text-sm text-muted-foreground line-through">
                      $
                      {(product.price / (1 - product.percentOff / 100)).toFixed(
                        0
                      )}
                    </span>
                  )}
                </div>

                {product.rating && (
                  <div className="flex items-center gap-1">
                    <span className="text-xs  text-yellow-500">★</span>

                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.rating})
                    </span>
                  </div>
                )}
              </div>
              <Button
                className="w-full bg-black/80 text-secondary  hover:bg-secondary hover:text-black "
                variant="secondary"
              >
                <ShoppingBag className="w-4 h-4" /> Buy Now
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardProduct;
