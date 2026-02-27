# Issue 017: Hero Image Slideshow

## Summary
Add image slideshow/carousel animation to the hero section.

## Client Note
> "It will be great to add some animation on the page (e.g. Pictures on hero page can slide)"

## Requirements
- Multiple images cycling in hero background
- Smooth transition animation
- Should feature gathering photos

## Available Images
Current gallery images that could be used:
- `IMG-20251223-WA0020.jpg`
- `IMG-20251223-WA0022.jpg`
- `IMG-20251223-WA0023.jpg`
- `IMG-20251223-WA0024.jpg`
- `IMG-20251223-WA0025.jpg`
- `IMG-20251223-WA0027.jpg`

## Technical Options
1. CSS-only animation with multiple background images
2. JavaScript/React carousel component
3. Framer Motion animated backgrounds

## Implementation Considerations
- Performance: Preload images
- Accessibility: Respect `prefers-reduced-motion`
- Mobile: Consider bandwidth/performance

## Files to Modify
- `apps/website/app/components/hero.tsx`

## Files to Create (optional)
- `apps/website/app/components/image-slideshow.tsx`

## Acceptance Criteria
- [ ] Multiple images cycle in hero
- [ ] Smooth transitions between images
- [ ] Works on mobile devices
- [ ] Respects reduced motion preference
- [ ] Images properly sized/optimized

## Priority
Medium

## Labels
`animation`, `hero`, `images`, `client-feedback`
