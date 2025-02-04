import { getStrapiURL } from "@/utils/utils";
import Image from "next/image";

function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

const strapiLoader = ({ src }: { src: string }) => {
  return src.startsWith("http") ? src : `https://admin.shinamix.com${src}`;
};

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
  priority = false,
  className,
  sizes = 'auto',
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      loader={strapiLoader}
      src={imageUrl}
      alt={alt}
      height={height}
      width={width ?? 0}
      className={className}
      priority={priority}
      sizes={sizes}
      // unoptimized
    />
  );
}
