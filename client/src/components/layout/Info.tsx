'use client'
import type { HeroSection } from "@/types";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Carousels from "../UI/Carousels";
type H = {
    headerData: HeroSection
}
export default function Info({ headerData }: H) {

    return (
        <section className=" grid grid-cols-2 wrapper w-full -mt-20">
            <div className="z-[999999]">
                <div className="flex gap-8 items-center h-full">
                    <Instagram /><Facebook /><Youtube />
                </div>
            </div>
            <div className="carousel ">
                <Carousels headerData={headerData} />
            </div>
        </section>
    )
}