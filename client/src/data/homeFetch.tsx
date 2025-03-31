import { fetchStrapiData } from "@/lib/strapiFetch";
import type { AboutSection, HeroSection, InfoSection, LeadSection, OfferSection, ParallaxSection } from "@/types";

export async function HeaderFetch(): Promise<HeroSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if (!data) {
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block: HeroSection) => block.__component === 'blocks.hero-section')
    return { ...heroSection }
  } catch (error) {
    console.log(error);
    return null;
  }
}



export async function InfoFetch(): Promise<InfoSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if (!data) {
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block: InfoSection) => block.__component === 'blocks.info-block')
    return { ...heroSection }
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function LeadFetch(): Promise<LeadSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if (!data) {
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block: LeadSection) => block.__component === 'blocks.lead-block')
    return { ...heroSection }
  } catch (error) {
    console.log(error);
    return null;
  }
}




export async function ParallaxFetch(): Promise<ParallaxSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if (!data) {
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block: ParallaxSection) => block.__component === 'blocks.parallax-block')
    return { ...heroSection }
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function AboutFetch(): Promise<AboutSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if (!data) {
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block: AboutSection) => block.__component === 'blocks.about-block')
    return { ...heroSection }
  } catch (error) {
    console.log(error);
    return null;
  }
}




export async function OfferFetch(): Promise<OfferSection | null> {
  try {
    const data = await fetchStrapiData("home-page")
    if (!data) {
      console.log("Empty!")
      return null;
    }
    const blocks = data.blocks
    const heroSection = blocks.find((block: OfferSection) => block.__component === 'blocks.offer-block')
    return { ...heroSection }
  } catch (error) {
    console.log(error);
    return null;
  }
}

