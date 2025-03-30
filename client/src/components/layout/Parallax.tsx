import type { ParallaxSection } from "@/types";

type H = {
    parallaxData: ParallaxSection
}

export default function Parallax({ parallaxData }: H) {
    console.log(parallaxData);
    return (
        <section className="py-42 relative" >

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black from-20% to-transparent to-80% z-0" />
            <div className=" h-[500px]" style={{ backgroundImage: `url(http://localhost:1337${parallaxData.image.url})`, backgroundSize: "cover", backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex items-center justify-center">
                    <h2 className="z-20 text-6xl">The best trip on earth</h2>
                </div>
            </div>

        </section>
    )
}