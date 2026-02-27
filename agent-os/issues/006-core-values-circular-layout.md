# Issue 006: Redesign Core Values Layout

## Summary
Rename "Seven Values" to "Our Core Values" and implement circular/radial layout so no value appears isolated.

## Current State
- Title: "The Seven Values"
- Layout: Linear/grid display
- Location: `apps/website/app/components/mission.tsx`

## Required Changes

### Title
- Rename from "The Seven Values" → **"Our Core Values"**

### Values (7 total)
1. Godliness
2. Purity
3. Integrity
4. Excellence
5. Accountability
6. Responsibility
7. Faithfulness

### Layout Options
1. **Circular arrangement** - Values positioned in a circle
2. **Hexagonal/honeycomb** - Interconnected hexagons
3. **Radial spokes** - Center hub with values radiating out
4. **Two rows balanced** - 4 on top, 3 on bottom (or vice versa)

### Design Requirement
> "use maybe a circular framework, where there is none hanging alone"

Ensure visual balance - no single value appears orphaned or disconnected.

## Files to Modify
- `apps/website/app/components/mission.tsx`

## Acceptance Criteria
- [ ] Title reads "Our Core Values"
- [ ] All 7 values displayed in balanced layout
- [ ] No value appears isolated/alone
- [ ] Responsive on mobile (may need alternative layout)
- [ ] Visual consistency with site theme

## Priority
Medium

## Labels
`design`, `layout`, `client-feedback`
