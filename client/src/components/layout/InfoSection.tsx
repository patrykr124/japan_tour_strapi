import type { InfoSection } from "@/types";
import Button from "../UI/Button";
import Image from "next/image";
type H = { infoData: InfoSection }

export default function InfoSection({ infoData }: H) {

  return (
    <div className="wrapper py-56">
      <div className="grid grid-cols-3">
        <div className="space-y-8">
          <h2 className="text-5xl">{infoData.headline}</h2>
          <p>{infoData.content}</p>
          <Button href={infoData?.cta[0].href}>{infoData?.cta[0].text}</Button>
        </div>
        <div className="relative w-full h-full object-cover">
          <Image src={`http://localhost:1337${infoData.image.url}`} width={500} height={500}  alt={infoData.icon1.alternativeText || ''} />
        </div>
        <div className="flex flex-col justify-around items-end">
          <div className="space-y-2 flex flex-col items-end justify-end w-2/3">
            <div className="icon">
              <Image src={`http://localhost:1337${infoData.icon1.url}`} width={50} height={50} alt={infoData.icon1.alternativeText || ''} />
            </div>
            <h3 >{infoData.headline2}</h3>
            <p className="text-end">{infoData.content2}</p>
          </div>

          <div className="space-y-2 flex flex-col items-end justify-end w-2/3 mr-32">
            <div className="icon">
              <Image src={`http://localhost:1337${infoData.icon2.url}`} width={50} height={50} alt={infoData.icon1.alternativeText || ''} />
            </div>
            <h3 >{infoData.headline3}</h3>
            <p className="text-end">{infoData.content3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}