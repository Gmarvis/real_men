# Issue 005: Change Font to Sans-Serif

## Summary
Client requested font change to sans-serif style, similar to their infographics.

## Current State
- Font: Inter (Google Fonts)
- Defined in: `apps/website/app/root.tsx`
- CSS variables in: `apps/website/app/app.css`

## Recommended Sans-Serif Options
1. **Poppins** - Modern, geometric, very readable
2. **Montserrat** - Clean, professional feel
3. **Open Sans** - Highly legible, versatile
4. **Nunito** - Friendly, rounded sans-serif
5. **Raleway** - Elegant, slightly condensed

## Implementation
1. Update Google Fonts link in `root.tsx`
2. Update font-family CSS variables in `app.css`
3. Test all components for proper rendering
4. Adjust any hardcoded font references

## Files to Modify
- `apps/website/app/root.tsx`
- `apps/website/app/app.css`
- Any component with hardcoded `font-serif` or `font-mono` classes

## Acceptance Criteria
- [ ] New sans-serif font loaded correctly
- [ ] All text renders in new font
- [ ] No font fallback flash on load
- [ ] Headings and body text balanced
- [ ] Client approval on font choice

## Priority
Medium

## Labels
`typography`, `branding`, `client-feedback`
