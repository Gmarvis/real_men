# Issue 004: Remove All "Brotherhood" References

## Summary
Client requested removal of all "brotherhood" text throughout the site.

## Locations Found
| File | Count | Context |
|------|-------|---------|
| `hero.tsx` | 2 | "Join the Brotherhood", sub-headline text |
| `mission.tsx` | 1 | Description text |
| `ministry.tsx` | 2 | Section content |
| `footer.tsx` | 1 | Brand description |
| `get-involved.tsx` | 3 | Various sections |

## Replacement Suggestions
- "Join the Brotherhood" → "Join Us" / "Join Real Men"
- "brotherhood of young men" → "community of young men" / "fellowship of young men"
- Other instances: Use "Real Men community" or similar

## Files to Modify
- `apps/website/app/components/hero.tsx`
- `apps/website/app/components/mission.tsx`
- `apps/website/app/components/ministry.tsx`
- `apps/website/app/components/footer.tsx`
- `apps/website/app/components/get-involved.tsx`

## Acceptance Criteria
- [ ] Global search for "brotherhood" returns 0 results
- [ ] Replacement text maintains meaning and flow
- [ ] No awkward phrasing introduced

## Priority
Medium

## Labels
`branding`, `content`, `client-feedback`
