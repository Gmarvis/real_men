import { createMeta, getWebPageSchema, SITE_NAME } from "~/lib/meta"
import Page from "./page"

const PAGE_TITLE = 'Who We Are'
const PAGE_DESCRIPTION = 'Learn about Real Men - a faith-based community dedicated to helping men grow spiritually, build authentic relationships, and discover their God-given purpose through fellowship and mentorship.'

export function meta() {
  return createMeta({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/who-we-are',
    keywords: 'about real men, mens ministry mission, christian mens organization, faith based community, mens fellowship group',
  })
}

export const handle = {
  structuredData: [
    getWebPageSchema({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: '/who-we-are',
    }),
  ],
}

export default function Index() {
  return <Page />
}
