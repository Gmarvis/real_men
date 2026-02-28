# Real Men CMS

This package contains the Sanity CMS configuration for managing events and content for the Real Men Ministry website.

## Quick Start

### 1. Set Up Sanity Project

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project
3. Note your **Project ID** and **Dataset** name (usually `production`)

### 2. Configure Environment Variables

Create a `.env` file in this directory:

```bash
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
```

Also configure the website app (in `apps/website/.env`):

```bash
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

### 3. Install Dependencies

From the root of the monorepo:

```bash
pnpm install
```

### 4. Run Sanity Studio Locally

```bash
pnpm dev:cms
```

This will start the Sanity Studio at http://localhost:3333

### 5. Deploy Sanity Studio

```bash
pnpm deploy:cms
```

This deploys to a hosted Sanity Studio URL (e.g., `your-project.sanity.studio`)

## Content Schemas

### Event

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Event name |
| `slug` | Slug | URL-friendly identifier (auto-generated from title) |
| `description` | Text | Short description for event cards |
| `fullDescription` | Portable Text | Rich text content for event detail page |
| `image` | Image | Event banner image |
| `date` | DateTime | Start date and time |
| `endDate` | DateTime | End date and time |
| `venue` | String | Location name |
| `address` | String | Full address |
| `featured` | Boolean | Highlight on events page |
| `highlights` | Array of Strings | Key takeaways/features |
| `schedule` | Array of Schedule Items | Time + Activity pairs |
| `speakers` | Array of Speakers | Name, role, and optional image |

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start local Sanity Studio |
| `pnpm build` | Build for production |
| `pnpm deploy` | Deploy to Sanity.studio |

## Migrating Existing Events

The static event data is located in `apps/website/app/data/events.ts`. To migrate:

1. Open Sanity Studio
2. Create new events matching the existing data
3. Use the same slugs for URL compatibility:
   - `monthly-mens-gathering`
   - `leadership-workshop`
   - `annual-mens-conference`
   - `skill-hub-financial-literacy`
4. Upload images from `apps/website/public/gathering-1/`
5. Test the website to ensure events load correctly
6. Delete `apps/website/app/data/events.ts` once migration is verified

## GROQ Queries

The website uses these queries (defined in `apps/website/app/lib/sanity.ts`):

**All Events:**
```groq
*[_type == "event"] | order(date asc)
```

**Event by Slug:**
```groq
*[_type == "event" && slug.current == $slug][0]
```

## Resources

- [Sanity Documentation](https://sanity.io/docs)
- [GROQ Query Language](https://sanity.io/docs/groq)
- [Portable Text](https://portabletext.org/)
