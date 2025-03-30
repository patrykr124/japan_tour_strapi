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
  