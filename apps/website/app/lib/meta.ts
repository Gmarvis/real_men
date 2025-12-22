export interface MetaOptions {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
  robots?: string;
  viewport?: string;
}

export function createMeta({
  title,
  description,
  keywords,
  image = '/talent-2.jpg',
  type = 'website',
  author = 'Nyota Talents',
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1',
}: MetaOptions) {
  const metaArray = [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'author', content: author },
    { name: 'robots', content: robots },
    { name: 'viewport', content: viewport },
  ];

  // Add keywords if provided
  if (keywords) {
    metaArray.splice(2, 0, { name: 'keywords', content: keywords });
  }

  return metaArray;
}
