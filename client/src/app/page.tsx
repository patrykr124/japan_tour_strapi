import About from "@/components/layout/About";
import Header from "@/components/layout/Header";
import Info from "@/components/layout/Info";
import InfoSection from "@/components/layout/InfoSection";
import LeadSection from "@/components/layout/LeadSection";
import Parallax from "@/components/layout/Parallax";
import  { InfoFetch, HeaderFetch, LeadFetch, ParallaxFetch, AboutFetch } from "@/data/homeFetch";
import { notFound } from "next/navigation";

export default async function Home() {
  const headerData = await HeaderFetch()
  const infoData = await InfoFetch()
  const leadData = await LeadFetch()
  const parallaxData = await ParallaxFetch()
  const aboutData = await AboutFetch()
  if (!headerData || !infoData || !leadData || !parallaxData || !aboutData) notFound()


  return (
    <>
      <Header headerData={headerData} />
      <Info headerData={headerData} />
      <InfoSection infoData={infoData} />
      <LeadSection leadData={leadData} />
      <Parallax parallaxData={parallaxData} />
      <About aboutData={aboutData} />
    </>
  );
}
