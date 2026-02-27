# Issue 015: Animated Guiding Verses in Hero

## Summary
Move guiding verses to hero section with sliding animation.

## Current State
- Guiding verses located in `mission.tsx`
- Static display

## Required Changes
- Move verses to hero section
- Implement slide/glide animation
- Display under new headline "The World Needs Godly Men"
- Accompany with tagline "God's Way, Every Day"

## Animation Concept
```
[The World Needs Godly Men]
     ↓ sliding verses ↓
"Be strong and show yourself a man" - 1 Kings 2:2
        ↓ fades/slides to ↓
"Iron sharpens iron" - Proverbs 27:17
        ↓ fades/slides to ↓
[next verse...]

[God's Way, Every Day]
```

## Available Components
- `apps/website/app/components/ui/animated-group.tsx`
- May need custom animation or use Framer Motion

## Verses to Animate
From `mission.tsx` - verify current verses:
- 1 Kings 2:2
- Additional verses TBD

## Files to Modify
- `apps/website/app/components/hero.tsx`
- `apps/website/app/components/mission.tsx` (remove verses)

## Files to Create (optional)
- `apps/website/app/components/verse-slider.tsx`

## Acceptance Criteria
- [ ] Verses display in hero section
- [ ] Smooth sliding/gliding animation
- [ ] Animation loops continuously
- [ ] Removed from mission.tsx
- [ ] Mobile-friendly animation

## Priority
Medium

## Labels
`animation`, `hero`, `client-feedback`
