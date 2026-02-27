# Issue 012: Add Testimonials Section

## Summary
Add testimonials section to the website per client feedback.

## Notes
- Testimonial interface already exists in `apps/website/app/types.ts`
- Need to create component and integrate into appropriate page(s)

## Existing Interface
```typescript
// From types.ts
interface Testimonial {
  // Need to verify exact structure
}
```

## Required Features
- Display member testimonials
- Include name, role/title, quote
- Optional: Photo of person
- Carousel or grid layout

## Suggested Placement
- Home page (after Strategy or before Get Involved CTA)
- Who We Are page
- Or both locations

## Component Structure
```tsx
interface Testimonial {
  id: string
  name: string
  role?: string
  quote: string
  image?: string
}
```

## Files to Create
- `apps/website/app/components/testimonials.tsx`

## Files to Modify
- `apps/website/app/routes/home/page.tsx` (add testimonials)

## Content Needed
- [ ] Testimonial quotes from members
- [ ] Names and roles (if applicable)
- [ ] Photos (optional)

## Acceptance Criteria
- [ ] Testimonials component created
- [ ] Displays on appropriate page(s)
- [ ] Responsive layout
- [ ] Placeholder content until real testimonials provided
- [ ] Matches site design theme

## Priority
Medium

## Labels
`new-feature`, `testimonials`, `client-feedback`
