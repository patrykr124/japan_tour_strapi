import Header from "@/components/layout/Header";
import Info from "@/components/layout/Info";
import InfoSection from "@/components/layout/InfoSection";
import  { InfoFetch, HeaderFetch } from "@/data/homeFetch";
import { notFound } from "next/navigation";

export default async function Home() {
  const headerData = await HeaderFetch()
  const infoData = await InfoFetch()
  
  if (!headerData || !infoData) notFound()


  return (
    <>
      <Header headerData={headerData} />
      <Info headerData={headerData} />
      <InfoSection infoData={infoData} />
    </>
  );
}
