import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/util/get-base-url';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
  },
  sitemap: `${getBaseUrl().toString()}sitemap.xml`,
});

export default robots;
