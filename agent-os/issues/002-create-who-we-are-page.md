# Issue 002: Create "Who We Are" Page

## Summary
Create a new dedicated page consolidating organizational information.

## Required Content
Move and consolidate the following to `/who-we-are`:
1. **Mission & Vision** (from `mission.tsx`)
2. **Our Core Values** (renamed from "Seven Values")
3. **Journey** timeline with images (from `journey.tsx`)
4. Add "Back to Home" navigation button

## New Route Structure
```
routes/
  who-we-are/
    index.tsx
    page.tsx
```

## Files to Create
- `apps/website/app/routes/who-we-are/index.tsx`
- `apps/website/app/routes/who-we-are/page.tsx`

## Dependencies
- Issue #001 (Navigation Restructure)
- Issue #006 (Core Values Redesign)
- Issue #007 (Journey with Images)

## Acceptance Criteria
- [ ] Page accessible at `/who-we-are`
- [ ] Contains Mission & Vision section
- [ ] Contains Core Values in circular layout
- [ ] Contains Journey timeline with images
- [ ] "Back to Home" button present and functional
- [ ] Responsive on all breakpoints

## Priority
High

## Labels
`new-page`, `content-restructure`, `client-feedback`
