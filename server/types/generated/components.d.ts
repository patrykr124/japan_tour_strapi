import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero section';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    carousel: Schema.Attribute.Component<'elements.carousel', false>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['blue', 'white', 'black']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    content3: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', true>;
    headline: Schema.Attribute.String;
    headline2: Schema.Attribute.String;
    headline3: Schema.Attribute.String;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksLeadBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_lead_blocks';
  info: {
    description: '';
    displayName: 'Lead block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText;
    text: Schema.Attribute.String;
  };
}

export interface ElementsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_elements_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.lead-block': BlocksLeadBlock;
      'elements.carousel': ElementsCarousel;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
