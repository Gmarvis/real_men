# Issue 003: Hero Section Redesign

## Summary
Redesign the hero section with new background, content structure, and animations.

## Current State
- Background: `bg-image3.png` with white overlay
- Headline: "God's Way, Every Day."
- Bible reference: 1 Kings 2:2
- CTAs: "Join the Brotherhood", "Watch Our Journey"

## Required Changes

### Background Image
- [ ] Replace sword/current image with gathering photo
- [ ] Awaiting new images from client (use placeholder for now)
- [ ] Consider using existing gallery images temporarily: `IMG-20251223-WA*.jpg`

### Logo
- [ ] Make logo more visible on landing page
- [ ] Remove black background from logo display
- [ ] Consider increasing logo size or adding to hero section

### Content Structure
- [ ] New main headline: **"The World Needs Godly Men"**
- [ ] Animated guiding verses sliding underneath (move from mission.tsx)
- [ ] Tagline/slogan: **"God's Way, Every Day"**

### Animations
- [ ] Add image slideshow/carousel for hero images
- [ ] Animate guiding verses with slide effect

### Text Updates
- [ ] Replace "Join the Brotherhood" → "Join Us"
- [ ] Update any other "brotherhood" references

## Files to Modify
- `apps/website/app/components/hero.tsx`
- `apps/website/app/components/navigation.tsx` (logo visibility)

## Acceptance Criteria
- [ ] New headline structure implemented
- [ ] Guiding verses animate/slide
- [ ] Logo clearly visible without dark background
- [ ] No "brotherhood" text in hero
- [ ] Placeholder ready for new gathering images

## Priority
High

## Labels
`hero`, `animation`, `branding`, `client-feedback`
