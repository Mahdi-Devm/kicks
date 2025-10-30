import Image, { ImageProps } from "next/image";
import React from "react";

type ImageNormalCustomProps = ImageProps & {
  src?: string;
  alt?: string;
  className?: string;
};

function ImgNormalCustom({
  src = "/placeholder.svg",
  alt = "defult alt",
  className,
  ...rest
}: ImageNormalCustomProps) {
  if (!src) {
    return null;
  }
  const placeholderValue =
    rest.blurDataURL || typeof src !== "string" ? "blur" : "empty";
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      placeholder={placeholderValue}
      {...rest}
    >
      ImgNormalCustom
    </Image>
  );
}

export { ImgNormalCustom };
