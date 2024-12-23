import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  priority=false,
  className,
  sizes='auto',
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width ?? 0}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
