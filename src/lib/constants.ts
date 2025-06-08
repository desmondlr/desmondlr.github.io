import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/logo.svg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://desmondlr.github.io',
  author: {
    avatar,
    name: 'Desmond Larsen-Rosner',
    headline: 'Software Development, Spatial Computing and HCI',
    username: 'desmondlr@gmail.com',
    location: 'Calgary and Remote',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'CV Folio — An Astro template inspired on Read.cv',
    description: 'Clean and aesthetic portfolio website for developers and designers',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@cvfolio'
    },
    robots: 'noindex, nofollow',
  }
};