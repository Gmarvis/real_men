# Issue 013: Blog Link to Substack

## Summary
Add Blog navigation item that links to external Substack page.

## Requirements
- Navigation tab labeled "Blog"
- Opens Substack URL in new tab
- External link indicator (optional)

## Implementation
```tsx
// In navigation.tsx
{
  name: "Blog",
  href: "https://realmen.substack.com", // placeholder URL
  external: true
}
```

## Substack URL
- **Status**: Awaiting URL from client
- **Placeholder**: `https://realmen.substack.com`

## Files to Modify
- `apps/website/app/components/navigation.tsx`

## Acceptance Criteria
- [ ] Blog tab visible in navigation
- [ ] Clicking opens Substack in new tab
- [ ] `target="_blank"` and `rel="noopener noreferrer"` attributes set
- [ ] Update placeholder URL when real URL provided

## Priority
Low

## Labels
`navigation`, `external-link`, `client-feedback`
