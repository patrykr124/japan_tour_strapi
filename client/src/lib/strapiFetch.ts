export async function fetchStrapiData(endpoint: string) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/home-page?populate[blocks][on][blocks.hero-section][populate][background][populate][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][logo]=true&populate[blocks][on][blocks.hero-section][populate][cta]=true&populate[blocks][on][blocks.hero-section][populate][carousel][populate][image]=true&populate[blocks][on][blocks.info-block][populate][image][populate][fields][0]=url&populate[blocks][on][blocks.info-block][populate][cta]=true&populate[blocks][on][blocks.info-block][populate][icon1]=true&populate[blocks][on][blocks.info-block][populate][icon2]=true&populate[blocks][on][blocks.info-block][populate][icon3]=true&populate[blocks][on][blocks.lead-block][populate][cta]=true&populate[blocks][on][blocks.parallax-block][populate][image][populate][fields][0]=url&populate[blocks][on][blocks.about-block][populate][image1][populate][fields][0]=url&populate[blocks][on][blocks.about-block][populate][image2][populate][fields][0]=url&populate[blocks][on][blocks.about-block][populate][image3][populate][fields][0]=url&populate[blocks][on][blocks.about-block][populate][image4][populate][fields][0]=url`
    );
    if (!res.ok) {
      throw new Error(`Fail to fetch ${endpoint} `);
    }
    const data = await res.json();
    return { ...data.data };
  } catch (error) {
    console.log({ message: "StrapiFetch wrong!!!", error: error });
  }
}
