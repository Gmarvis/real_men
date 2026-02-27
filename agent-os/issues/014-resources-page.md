# Issue 014: Create Resources Section/Page

## Summary
Add Resources section to include reports and other resources.

## Client Note
> "Resources (To add report to resources)"

## Options
1. **Section on Home page** - Simple resources section with download links
2. **Dedicated page** - Full `/resources` route
3. **Dropdown from nav** - Resources as navigation dropdown

## Suggested Content
- Annual reports
- Downloadable materials
- Study guides
- Event recordings (links)

## Implementation Decision
Start as section, expand to page if content grows.

## Files to Create (if page)
- `apps/website/app/routes/resources/index.tsx`
- `apps/website/app/routes/resources/page.tsx`

## Files to Create (if section)
- `apps/website/app/components/resources.tsx`

## Acceptance Criteria
- [ ] Resources accessible from navigation
- [ ] Report(s) available for download
- [ ] Clean, organized layout
- [ ] Scalable for future resources

## Priority
Low

## Labels
`new-feature`, `resources`, `client-feedback`
