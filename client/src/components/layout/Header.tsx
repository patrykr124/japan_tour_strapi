import type { HeroSection } from "@/types"
import Button from "../UI/Button"

type H = {
    headerData: HeroSection
}

export default function Header({ headerData }: H) {

    return (
        <section className="relative w-screen h-[90vh] flex  items-center z-0 ">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black from-5% to-transparent to-80% z-1"></div>
            <video className="h-full -z-20  w-screen object-cover absolute top-0 left-0" autoPlay loop muted>
                <source src={`http://localhost:1337${headerData.background?.url}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="z-10 wrapper w-screen h-full flex flex-col justify-center items-start">
                <div className=" text-white flex flex-col ">
                    <div className="max-w-3xl flex flex-col gap-10">
                        <h1 className="text-7xl max-w-xl">{headerData.heading}</h1>
                        <p className="">{headerData.description}</p>
                        <Button href={headerData.cta.href}>{headerData.cta.text}</Button>
                    </div>

                </div>
            </div>

        </section>
    )
}