# Issue 019: Event CMS with Sanity + Add to Calendar

## Status: Ready for Sanity Setup

## Overview

Implement a full content management system for events using Sanity CMS, enabling non-technical team members to create, edit, and manage events through a visual interface. Additionally, add "Add to Calendar" functionality so attendees can save events to their preferred calendar apps.

## Completed ✅

- [x] Event schema defined in `packages/cms/schemas/event.ts`
- [x] Sanity Studio configured in `packages/cms/`
- [x] Sanity client installed and configured in website
- [x] Routes updated to use slugs (`/events/:slug`)
- [x] Events list page uses slug-based links
- [x] Event detail page fetches by slug
- [x] Add to Calendar feature (Google Calendar + ICS download)
- [x] Static events data includes slugs for backward compatibility

## Remaining Steps

1. **Create Sanity Account & Project**
   - Sign up at https://sanity.io
   - Create a new project
   - Note your Project ID and Dataset name

2. **Configure Environment Variables**
   ```bash
   # packages/cms/.env
   SANITY_PROJECT_ID=your-project-id
   SANITY_DATASET=production
   
   # apps/website/.env
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

3. **Deploy Sanity Studio**
   ```bash
   cd packages/cms
   pnpm sanity deploy
   ```

4. **Migrate Events to Sanity**
   - Create events in Sanity Studio matching the data in `apps/website/app/data/events.ts`
   - Once migrated, remove the static data file

## Quick Start

1. **Visual Event Management** - Create/edit events without touching code
2. **SEO-Friendly URLs** - Use slugs (`/events/annual-mens-conference`) instead of IDs
3. **Add to Calendar** - Google Calendar, Apple Calendar, Outlook support
4. **Image CDN** - Automatic image optimization via Sanity's CDN

## Technical Approach

### Phase 1: Sanity CMS Setup
- Create Sanity project in `packages/cms`
- Define event schema with auto-generated slugs
- Configure and deploy Sanity Studio

### Phase 2: Website Integration
- Install `@sanity/client` in website app
- Create Sanity client configuration
- Add environment variables for project ID/dataset

### Phase 3: Update Routing & Pages
- Change route from `/events/:id` to `/events/:slug`
- Update events list page to fetch from Sanity
- Update event detail page to query by slug
- Update all links to use slugs

### Phase 4: Add to Calendar
- Create calendar utility functions
  - Google Calendar URL generator
  - ICS file generator for Apple/Outlook
- Add calendar dropdown/buttons to event detail page

### Phase 5: Migration & Cleanup
- Migrate existing events data to Sanity
- Remove static `events.ts` file
- Test full flow end-to-end

## Event Schema

```typescript
{
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'description', type: 'text', title: 'Short Description' },
    { name: 'fullDescription', type: 'array', of: [{ type: 'block' }], title: 'Full Description' },
    { name: 'image', type: 'image', title: 'Event Image' },
    { name: 'date', type: 'datetime', title: 'Event Date & Time' },
    { name: 'endDate', type: 'datetime', title: 'End Date & Time' },
    { name: 'venue', type: 'string', title: 'Venue Name' },
    { name: 'address', type: 'string', title: 'Address' },
    { name: 'featured', type: 'boolean', title: 'Featured Event' },
    { name: 'highlights', type: 'array', of: [{ type: 'string' }], title: 'Highlights' },
    { name: 'schedule', type: 'array', of: [{ type: 'scheduleItem' }], title: 'Schedule' },
    { name: 'speakers', type: 'array', of: [{ type: 'speaker' }], title: 'Speakers' },
  ]
}
```

## Add to Calendar URLs

**Google Calendar:**
```
https://calendar.google.com/calendar/render?action=TEMPLATE
  &text={title}
  &dates={startDate}/{endDate}
  &details={description}
  &location={venue}, {address}
```

**ICS File (Apple/Outlook):**
```ics
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:{startDate}
DTEND:{endDate}
SUMMARY:{title}
DESCRIPTION:{description}
LOCATION:{venue}, {address}
END:VEVENT
END:VCALENDAR
```

## Environment Variables Required

```env
SANITY_PROJECT_ID=xxxxx
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
```

## Files to Create/Modify

### New Files
- `packages/cms/` - Sanity CMS package
  - `package.json`
  - `sanity.config.ts`
  - `sanity.cli.ts`
  - `schemas/event.ts`
  - `schemas/index.ts`
- `apps/website/app/lib/sanity.ts` - Sanity client
- `apps/website/app/lib/calendar.ts` - Calendar utilities
- `apps/website/app/routes/events/$slug.tsx` - New slug-based route

### Modified Files
- `apps/website/app/routes.ts` - Update route path
- `apps/website/app/routes/events/page.tsx` - Fetch from Sanity
- `apps/website/app/routes/events/$id.tsx` - Rename/update to use slug
- `pnpm-workspace.yaml` - Already includes packages/*

### Files to Remove
- `apps/website/app/data/events.ts` - After migration complete

## Verification

1. **CMS Test**: Create event in Sanity Studio → appears on website
2. **Edit Test**: Edit event details → changes reflect immediately  
3. **Slug Test**: Navigate to `/events/test-event` → loads correct event
4. **Calendar Test**: Click "Add to Google Calendar" → opens with correct details
5. **ICS Test**: Download .ics file → imports into Apple/Outlook Calendar

## Dependencies

- `sanity` - Sanity CMS framework
- `@sanity/client` - API client for fetching data
- `@sanity/image-url` - Image URL builder
- `@sanity/vision` - GROQ query tool (dev)

## Notes

- Registration system intentionally excluded from this scope
- "Register Interest" button continues to link to Get Involved page
- Existing images in `/gathering-1/` can be re-uploaded to Sanity or referenced locally
