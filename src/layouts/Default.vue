<template>
  <div class="layout">
    <kr-header />
    <slot />
    <kr-footer />
  </div>
</template>

<script>
import KrHeader from "~/components/KrHeader.vue";
import KrFooter from "~/components/KrFooter.vue";

export default {
  components: {
    KrHeader,
    KrFooter
  },
  metaInfo: {
    script: [
      {
        innerHTML: `
        {
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Kyle Rodgers",
          "url": "https://kylerodgers.me/",
          "image": "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg",
          "sameAs": [
            "https://twitter.com/kyle_rits",
            "https://www.linkedin.com/in/kyleritschardrodgers/"
          ],
          "jobTitle": "Web Developer"  
        }`,
        type: "application/ld+json"
      }
    ]
  }
};
</script>

<style>
:root {
  --color-gray: hsl(216, 15%, 52%);
  --color-red: hsl(357, 79%, 64%);
  --color-green: hsl(158, 17%, 50%);
  --color-green-50: hsl(158, 17%, 50%, 0.5);
  --color-indigo: hsl(190, 13%, 27%);
  --color-indigo-25: hsl(190, 13%, 27%, 0.25);
  --color-indigo-50: hsl(190, 13%, 27%, 0.5);
}

::selection {
  @apply text-indigo-900 bg-indigo-500;
}

body {
  @apply relative w-screen bg-indigo-800 font-serif text-gray-800 overflow-y-scroll overflow-x-hidden p-2;
  font-size: 18px;
}

.layout {
  @apply relative max-w-full bg-white overflow-hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-sans leading-none mb-4;
}

h1 {
  @apply text-6xl;
}
h2 {
  @apply text-4xl;
}
h3 {
  @apply text-3xl;
}
h4 {
  @apply text-2xl;
}

.container {
  @apply mx-auto p-4;
}

.content p,
.content ul,
.content ol,
.content blockquote {
  @apply leading-relaxed mb-6;
}

p > a:not(.button) {
  @apply relative text-red-600;
  transform: translateY(0);
  transition: all 200ms;
}

p > a:not(.button)::before {
  content: "";
  @apply absolute w-0 rounded opacity-50 bg-red-900 border-red-600 border-b;
  bottom: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
  transition: width 300ms;
}

p > a:not(.button):hover {
  @apply text-red-800;
}

p > a:not(.button):hover::before {
  @apply w-full;
}

button:focus {
  @apply outline-none;
}

.button {
  @apply font-sans font-light tracking-wider inline-block py-2 px-5 text-sm rounded-sm shadow;
  transition: all 300ms;
}

.button:hover {
  @apply shadow-md;
  transform: translateY(-3px);
}

.button.button-sm {
  @apply px-3 py-1 text-sm;
}

@screen sm {
  body {
    @apply p-4;
  }
}

@screen lg {
  body {
    @apply p-8;
  }
  .container {
    @apply px-12;
  }
}
</style>
