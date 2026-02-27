# Issue 007: Add Images to Journey Timeline

## Summary
Complement the Journey timeline with images and move to "Who We Are" page.

## Current State
- Location: `apps/website/app/components/journey.tsx`
- Timeline entries:
  - 2020-2021: Genesis
  - July 2021: First Gathering
  - 2022: Growth
  - Silent Season: Refinement
  - May 2023-Present: Revival

## Required Changes

### Add Images
- [ ] Add relevant image for each timeline entry
- [ ] Images should complement the narrative
- [ ] May need new images from client or use existing gallery

### Move to Who We Are
- [ ] Remove from home page
- [ ] Include in Who We Are page
- [ ] Add navigation button back to home

## Available Images
Current gallery images in `/public/`:
- `IMG-20251223-WA0020.jpg`
- `IMG-20251223-WA0022.jpg`
- `IMG-20251223-WA0023.jpg`
- `IMG-20251223-WA0024.jpg`
- `IMG-20251223-WA0025.jpg`
- `IMG-20251223-WA0027.jpg`

## Files to Modify
- `apps/website/app/components/journey.tsx`
- `apps/website/app/routes/home/page.tsx` (remove)
- `apps/website/app/routes/who-we-are/page.tsx` (add)

## Acceptance Criteria
- [ ] Each timeline entry has an accompanying image
- [ ] Images properly sized and optimized
- [ ] Timeline removed from home page
- [ ] Timeline displays on Who We Are page
- [ ] Responsive layout maintained

## Priority
Medium

## Labels
`content`, `images`, `client-feedback`
