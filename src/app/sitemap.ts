import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/o-nas',
    '/treninky',
    '/zbrane',
    '/jak-zacit',
    '/galerie',
    '/kalendar',
    '/kontakt',
    '/rezervace',
    '/prihlaska',
    '/ochrana-osobnich-udaju',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
