import About from "@/components/layout/About";
import Header from "@/components/layout/Header";
import Info from "@/components/layout/Info";
import InfoSection from "@/components/layout/InfoSection";
import LeadSection from "@/components/layout/LeadSection";
import Offer from "@/components/layout/Offer";
import Parallax from "@/components/layout/Parallax";
import { AboutFetch, HeaderFetch, InfoFetch, LeadFetch, OfferFetch, ParallaxFetch } from "@/data/homeFetch";
import { ProductsFetch } from "@/data/productsFetch";
import { notFound } from "next/navigation";

export default async function Home() {
  const headerData = await HeaderFetch()
  const infoData = await InfoFetch()
  const leadData = await LeadFetch()
  const parallaxData = await ParallaxFetch()
  const aboutData = await AboutFetch()
  const offerData = await OfferFetch();
  const products = await ProductsFetch()
  if (!headerData || !infoData || !leadData || !parallaxData || !aboutData || !offerData) notFound()


  return (
    <>
      <Header headerData={headerData} />
      <Info headerData={headerData} />
      <InfoSection infoData={infoData} />
      <LeadSection leadData={leadData} />
      <Parallax parallaxData={parallaxData} />
      <About aboutData={aboutData} />
      <Offer offerData={offerData} products={products} />
    </>
  );
}
