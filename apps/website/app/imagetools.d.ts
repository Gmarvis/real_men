/// <reference types="vite-imagetools" />

declare module '*?w=*&format=webp&as=srcset' {
  const srcset: string
  export default srcset
}

declare module '*?w=*' {
  const src: string
  export default src
}

declare module '*?w=*&format=webp' {
  const src: string
  export default src
}
