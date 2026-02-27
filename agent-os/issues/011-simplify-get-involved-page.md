# Issue 011: Simplify Get Involved Page

## Summary
Reduce Get Involved page to only 2 core sections per client feedback.

## Current State
- 6 ways to serve listed
- "Answer the Call" heading
- Contact form
- Multiple involvement options

## Required Changes

### Remove
- [ ] "Answer the Call" heading/section
- [ ] Extra involvement options (keep only 2)

### Keep/Create
1. **Join Us**
   - Registration/membership information
   - How to become part of Real Men

2. **Partner with Us**
   - Donation form/information
   - Mentorship opportunities
   - Partnership inquiry form

### Form Requirements
- Partner form should handle:
  - Donation inquiries
  - Mentorship sign-ups
  - General partnership interest

## Files to Modify
- `apps/website/app/components/get-involved.tsx`
- `apps/website/app/routes/get-involved/page.tsx`

## Acceptance Criteria
- [ ] Only "Join Us" and "Partner with Us" sections visible
- [ ] "Answer the Call" removed
- [ ] Forms functional for donations and mentorship
- [ ] No "brotherhood" references (see Issue #004)
- [ ] Clean, simple layout

## Priority
Medium

## Labels
`get-involved`, `simplification`, `client-feedback`
