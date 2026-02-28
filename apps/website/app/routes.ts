import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  // Sitemap route (outside layout - no UI)
  route('sitemap.xml', './routes/sitemap[.]xml.tsx'),
  
  layout('./routes/layout.tsx', [
    index('./routes/home/index.tsx'),
    route('get-involved', './routes/get-involved/index.tsx'),
    route('who-we-are', './routes/who-we-are/index.tsx'),
    route('gallery', './routes/gallery/index.tsx'),
    route('events', './routes/events/index.tsx'),
    route('events/:slug', './routes/events/$slug.tsx'),
  ]),
] satisfies RouteConfig;
