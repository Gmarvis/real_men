# Issue 009: Remove Deprecated Sections from Home Page

## Summary
Remove several sections from the home page per client feedback.

## Sections to Remove

### 1. "2025 in Review" (Impact Section)
- File: `apps/website/app/components/impact.tsx`
- Action: Remove from home page
- Note: Client to provide new impact data later

### 2. "2026 Vision"
- File: `apps/website/app/components/vision.tsx`
- Action: Remove from home page
- Note: Delete or archive component

### 3. "The Answer" (from Problem Section)
- File: `apps/website/app/components/problem.tsx`
- Action: Remove "The Answer" subsection only
- Keep: "The Breach in our Community" (may reword)

### 4. Mentorship Covenant
- File: `apps/website/app/components/mentorship.tsx`
- Action: Remove from home page
- Note: Mentorship info moves to Get Involved → Partner with Us

### 5. Journey (Move, Don't Delete)
- File: `apps/website/app/components/journey.tsx`
- Action: Move to Who We Are page (see Issue #007)

## Files to Modify
- `apps/website/app/routes/home/page.tsx`
- `apps/website/app/components/problem.tsx`

## Files to Archive/Delete
- `apps/website/app/components/impact.tsx`
- `apps/website/app/components/vision.tsx`
- `apps/website/app/components/mentorship.tsx`

## Acceptance Criteria
- [ ] Home page no longer shows 2025 in Review
- [ ] Home page no longer shows 2026 Vision
- [ ] "The Answer" subsection removed from Problem
- [ ] Mentorship Covenant removed from home
- [ ] Journey moved to Who We Are (not deleted)
- [ ] No broken imports or references

## Priority
High

## Labels
`cleanup`, `home-page`, `client-feedback`
