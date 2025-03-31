import { fetchStrapiProducts } from "@/lib/strapiFetch";

export async function ProductsFetch() {
    try {
      const data = await fetchStrapiProducts("home-page")
      if (!data) {
        console.log("Empty!")
        return null;
      }
     
      return { ...data }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  