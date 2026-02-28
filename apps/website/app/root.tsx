import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from 'react-router';

import type { Route } from './+types/root.js';
import stylesheet from './app.css?url';
import { getOrganizationSchema, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '~/lib/meta';

// Default meta for the entire site
export function meta() {
  return [
    { title: SITE_NAME },
    { name: 'description', content: SITE_DESCRIPTION },
    { name: 'theme-color', content: '#1e3a5f' },
    { name: 'format-detection', content: 'telephone=no' },
  ]
}

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'apple-touch-icon', href: '/logos/RM_Logo.png' },
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap',
  },
  // Preconnect to Sanity CDN for faster image loading
  { rel: 'preconnect', href: 'https://cdn.sanity.io' },
];

// Component to inject JSON-LD structured data
function StructuredData() {
  const matches = useMatches()
  
  // Collect structured data from route handles
  const structuredData: any[] = []
  
  matches.forEach((match) => {
    const handle = match.handle as { structuredData?: any[] } | undefined
    if (handle?.structuredData) {
      structuredData.push(...handle.structuredData)
    }
  })
  
  // Always include organization schema
  const orgSchema = getOrganizationSchema()
  const hasOrgSchema = structuredData.some(s => s['@type'] === 'Organization')
  if (!hasOrgSchema) {
    structuredData.unshift(orgSchema)
  }
  
  if (structuredData.length === 0) return null
  
  return (
    <>
      {structuredData.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <Meta />
        <Links />
        <StructuredData />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let status = 500;
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.status === 404 ? 'Page Not Found' : `Error ${error.status}`;
    details =
      error.status === 404
        ? "The page you're looking for doesn't exist or has been moved."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <span className="text-8xl font-bold text-primary/20">{status}</span>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">{message}</h1>
        <p className="text-muted-foreground mb-8">{details}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Go Home
          </a>
          <a
            href="/events"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
          >
            View Events
          </a>
        </div>
        {import.meta.env.DEV && stack && (
          <pre className="mt-8 p-4 bg-gray-100 rounded-lg text-left text-xs overflow-auto max-h-64">
            {stack}
          </pre>
        )}
      </div>
    </div>
  );
}
