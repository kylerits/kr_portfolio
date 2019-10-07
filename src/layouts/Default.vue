<template>
  <div class="layout">
    <kr-header />
    <slot />
  </div>
</template>

<script>
import KrHeader from "~/components/KrHeader.vue";

export default {
  components: {
    KrHeader
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

.container {
  @apply mx-auto p-4;
}

.content p,
.content ul,
.content ol,
.content blockquote {
  @apply mb-6;
}

button:focus {
  @apply outline-none;
}

.button {
  @apply font-sans font-light tracking-wider inline-block rounded-sm shadow;
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
    @apply px-6;
  }
}
</style>
