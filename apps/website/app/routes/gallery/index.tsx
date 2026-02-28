import { createMeta, getWebPageSchema } from "~/lib/meta"
import Page from "./page"

const PAGE_TITLE = 'Gallery'
const PAGE_DESCRIPTION = 'Browse photos from Real Men gatherings, retreats, and fellowship events. See our community of faith in action.'

export function meta() {
  return createMeta({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/gallery',
    keywords: 'mens ministry photos, christian fellowship gallery, mens retreat pictures, faith community events',
  })
}

export const handle = {
  structuredData: [
    getWebPageSchema({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: '/gallery',
    }),
  ],
}

export default function Index() {
  return <Page />
}
