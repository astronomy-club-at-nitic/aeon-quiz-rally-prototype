import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/util/get-base-url';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: getBaseUrl().toString(),
  },
];

export default sitemap;
