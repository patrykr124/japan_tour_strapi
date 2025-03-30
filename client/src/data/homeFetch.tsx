import { fetchStrapiData } from "@/lib/strapiFetch"
import type { HeroSection, InfoSection, LeadSection } from "@/types";

export async function HeaderFetch(): Promise<HeroSection | null> {
    try {
      const data = await fetchStrapiData("home-page")
      if(!data){
        console.log("Empty!")
        return null;
      }
      const blocks = data.blocks
      const heroSection = blocks.find((block : HeroSection) => block.__component === 'blocks.hero-section')
      return {...heroSection}
    } catch (error) {
        console.log(error);
        return null;
    }
}



export async function InfoFetch(): Promise<InfoSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if(!data){
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block : InfoSection) => block.__component === 'blocks.info-block')
    return {...heroSection}
  } catch (error) {
      console.log(error);
      return null;
  }
}


export async function LeadFetch(): Promise<LeadSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if(!data){
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block : LeadSection) => block.__component === 'blocks.lead-block')
    return {...heroSection}
  } catch (error) {
      console.log(error);
      return null;
  }
}
