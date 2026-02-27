# Issue 001: Navigation Restructure

## Summary
Update navigation tabs to match new site structure per client feedback.

## Current State
- Home (`/`)
- About (`/#about`)
- Ministry (`/#ministry`)
- Impact (`/#impact`)
- Mentorship (`/#mentorship`)
- CTA: "Get Involved" → `/get-involved`

## Required Changes
Update navigation to:
- **Home** (route: `/`)
- **Who We Are** (route: `/who-we-are`)
- **Resources** (section or route - include report)
- **Strategy** (section link: `/#strategy`)
- **Blog** (external link → Substack placeholder)
- **Gallery** (route: `/gallery`)
- CTA: "Get Involved" → `/get-involved`

## Files to Modify
- `apps/website/app/components/navigation.tsx`
- `apps/website/app/routes.ts`

## Acceptance Criteria
- [ ] Navigation displays new tabs
- [ ] All links route correctly
- [ ] Blog opens Substack in new tab
- [ ] Mentorship tab removed from navigation
- [ ] Mobile navigation updated accordingly

## Priority
High

## Labels
`navigation`, `restructure`, `client-feedback`
