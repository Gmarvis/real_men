import { createMeta, getOrganizationSchema, getWebPageSchema, SITE_NAME, SITE_DESCRIPTION } from "~/lib/meta"
import Page from "./page"

export function meta() {
  return createMeta({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    keywords: 'mens ministry, christian men, faith community, mens fellowship, spiritual growth, mens retreat, bible study for men, christian brotherhood, real men ministry',
  })
}

export const handle = {
  // JSON-LD structured data will be injected via layout
  structuredData: [
    getOrganizationSchema(),
    getWebPageSchema({
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: '/',
    }),
  ],
}

export default function Index() {
  return <Page />
}