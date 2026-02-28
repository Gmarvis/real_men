// Optimized gallery images with vite-imagetools
// Using ?w=400;800;1200&format=webp&as=srcset for responsive WebP images

// Gallery images (gathering-1)
import gallery1Srcset from '~/assets/gathering-1/DSC03966.jpg?w=400;800;1200&format=webp&as=srcset'
import gallery2Srcset from '~/assets/gathering-1/DSC04006.jpg?w=400;800;1200&format=webp&as=srcset'
import gallery3Srcset from '~/assets/gathering-1/DSC04013.jpg?w=400;800;1200&format=webp&as=srcset'
import gallery4Srcset from '~/assets/gathering-1/DSC04020.jpg?w=400;800;1200&format=webp&as=srcset'
import gallery5Srcset from '~/assets/gathering-1/DSC04025.jpg?w=400;800;1200&format=webp&as=srcset'
import gallery6Srcset from '~/assets/gathering-1/DSC04026.jpg?w=400;800;1200&format=webp&as=srcset'
import gallery7Srcset from '~/assets/gathering-1/DSC04057.jpg?w=400;800;1200&format=webp&as=srcset'

// Fallback sources (original format for older browsers)
import gallery1Src from '~/assets/gathering-1/DSC03966.jpg?w=800'
import gallery2Src from '~/assets/gathering-1/DSC04006.jpg?w=800'
import gallery3Src from '~/assets/gathering-1/DSC04013.jpg?w=800'
import gallery4Src from '~/assets/gathering-1/DSC04020.jpg?w=800'
import gallery5Src from '~/assets/gathering-1/DSC04025.jpg?w=800'
import gallery6Src from '~/assets/gathering-1/DSC04026.jpg?w=800'
import gallery7Src from '~/assets/gathering-1/DSC04057.jpg?w=800'

// Logo
import logoSrc from '~/assets/logos/RM_Logo.png?w=200&format=webp'
import logoFallback from '~/assets/logos/RM_Logo.png?w=200'

export const galleryImages = [
  { src: gallery1Src, srcset: gallery1Srcset, caption: "Monthly Gathering" },
  { src: gallery2Src, srcset: gallery2Srcset, caption: "Fellowship in Action" },
  { src: gallery3Src, srcset: gallery3Srcset, caption: "United in Purpose" },
  { src: gallery4Src, srcset: gallery4Srcset, caption: "Building Bonds" },
  { src: gallery5Src, srcset: gallery5Srcset, caption: "Men of Faith" },
  { src: gallery6Src, srcset: gallery6Srcset, caption: "Together in Faith" },
  { src: gallery7Src, srcset: gallery7Srcset, caption: "Worship & Fellowship" },
]

export const logo = {
  src: logoSrc,
  fallback: logoFallback,
}

// Default event image
export const defaultEventImage = {
  src: gallery7Src,
  srcset: gallery7Srcset,
}
