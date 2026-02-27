# Issue 008: Create Gallery Page

## Summary
Create a dedicated Gallery page with images that have context/captions.

## Required Features
- Display gathering photos in an organized gallery layout
- Each image should have contextual caption/description
- Responsive grid layout
- Optional: Lightbox for full-size viewing

## Available Images
Currently in `/public/`:
- `IMG-20251223-WA0020.jpg`
- `IMG-20251223-WA0022.jpg`
- `IMG-20251223-WA0023.jpg`
- `IMG-20251223-WA0024.jpg`
- `IMG-20251223-WA0025.jpg`
- `IMG-20251223-WA0027.jpg`

## Route Structure
```
routes/
  gallery/
    index.tsx
    page.tsx
```

## Component Structure
```tsx
// Suggested gallery item structure
interface GalleryItem {
  src: string
  alt: string
  caption: string
  date?: string
  event?: string
}
```

## Files to Create
- `apps/website/app/routes/gallery/index.tsx`
- `apps/website/app/routes/gallery/page.tsx`
- `apps/website/app/components/gallery.tsx` (optional reusable component)

## Acceptance Criteria
- [ ] Page accessible at `/gallery`
- [ ] All current images displayed
- [ ] Each image has caption/context
- [ ] Responsive grid layout
- [ ] Images load efficiently (lazy loading)
- [ ] Matches site design theme

## Priority
Medium

## Labels
`new-page`, `gallery`, `client-feedback`
