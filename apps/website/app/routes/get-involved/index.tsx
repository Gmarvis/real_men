import { createMeta, getWebPageSchema } from "~/lib/meta"
import Page from "./page"

const PAGE_TITLE = 'Get Involved'
const PAGE_DESCRIPTION = 'Join the Real Men community. Discover ways to connect, volunteer, and grow with other men of faith through our events, mentorship programs, and fellowship opportunities.'

export function meta() {
  return createMeta({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/get-involved',
    keywords: 'join mens ministry, volunteer christian community, mens group membership, faith community involvement, mens fellowship opportunities',
  })
}

export const handle = {
  structuredData: [
    getWebPageSchema({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: '/get-involved',
    }),
  ],
}

export default function Index() {
  return <Page />
}
