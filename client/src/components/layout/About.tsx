import type { AboutSection } from "@/types"
import Image from "next/image"

type H = {
    aboutData: AboutSection
}

export default function About({ aboutData }: H) {
    return (
        <section className="wrapper py-12 gap-20 flex flex-col">
            <div className=" w-full flex items-end justify-end">
                <div className="space-y-8  max-w-2xl ">
                    <h2 className="text-end">{aboutData.text}</h2>
                    <p className="text-end">{aboutData.description}</p>
                </div>
            </div>
            <div className="">
                <div className="flex justify-around">
                    <div className="-mt-40">
                        <Image src={`http://localhost:1337${aboutData.image2.url}`} width={400} height={500} alt={aboutData.image1.alternativeText || ''} />
                    </div>
                    <div className="">
                        <Image src={`http://localhost:1337${aboutData.image1.url}`} width={500} height={500} alt={aboutData.image1.alternativeText || ''} />
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="mt-56 ">
                        <Image src={`http://localhost:1337${aboutData.image4.url}`} width={500} height={500} alt={aboutData.image1.alternativeText || ''} />
                    </div>
                    <div className="mt-20">
                        <Image src={`http://localhost:1337${aboutData.image3.url}`} width={450} height={450} alt={aboutData.image1.alternativeText || ''} />
                    </div>

                </div>
            </div>
        </section>
    )
}