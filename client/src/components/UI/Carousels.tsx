'use client'
import type { HeroSection } from "@/types";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type H = {
  headerData: HeroSection
}

export default function Carousels({ headerData }: H) {

  const carouselImages = Array.isArray(headerData.carousel.image) ? headerData.carousel.image : []


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  return (
    <Carousel responsive={responsive} className="  min-w-[400px]" >
      {carouselImages.map((item, index) => (
        <div key={index} className="p-1">
          <Image className="object-cover" width={450} height={450} key={index} src={`http://localhost:1337${item.url}`} alt={item.alternativeText || ''} />
        </div>
      ))}

    </Carousel>
  )
}