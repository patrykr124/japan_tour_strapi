type Media = {
  id: number;
  url: string;
  alternativeText?: string;
  name?: string;
};


export type HeroSection = {
    __component: "blocks.hero-section";
    id: number;
    heading: string;
    theme: string;
    description: string;
    background: {
      id: number;
      url: string;
      name: string;
      documentId: string;
    };
    carousel: {
      id: number;
      image: Media[];
    };
    cta: {
      id: number;
      text: string;
      href: string;
      isExternal: boolean;
    };
    logo: {
      id: number;
      logoText: string;
    };
  };

export type ButtonType={
    children: React.ReactNode;
    href: string;

  }


  export type InfoSection = {
    __component: "blocks.info-block";
    id: number;
    headline2: string;
    content2: string;
    headline3: string;
    content3: string;
    image: Media;
    headline: string;
    content: string;
    icon1: Media;
    icon2: Media;
    icon3: Media;
    cta: {
      id: number;
      text: string;
      href: string;
      isExternal: boolean;
    }[];
  }


  export type LeadSection = {
    __component: "blocks.lead-block";
    id: number;
    text: string;
    description: string;
  }


  export type ParallaxSection = {
    __component: "blocks.parallax-block";
    id: number;
    image: Media;
    text: string;
  }


  
  export type AboutSection = {
    __component: "blocks.about-block";
    id: number;
    text: string;
    image1: Media;
    image2: Media;
    image3: Media;
    image4: Media;
    description: string;
  }
  