import Header from "@/components/layout/Header";
import Info from "@/components/layout/Info";
import InfoSection from "@/components/layout/InfoSection";
import LeadSection from "@/components/layout/LeadSection";
import  { InfoFetch, HeaderFetch, LeadFetch } from "@/data/homeFetch";
import { notFound } from "next/navigation";

export default async function Home() {
  const headerData = await HeaderFetch()
  const infoData = await InfoFetch()
  const leadData = await LeadFetch()
  
  if (!headerData || !infoData || !leadData) notFound()


  return (
    <>
      <Header headerData={headerData} />
      <Info headerData={headerData} />
      <InfoSection infoData={infoData} />
      <LeadSection leadData={leadData} />
    </>
  );
}
