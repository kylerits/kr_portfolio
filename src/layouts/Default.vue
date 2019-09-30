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
  @apply bg-gray-100 font-serif text-gray-800 overflow-x-hidden;
  font-size: 18px;
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
  @apply mx-auto;
}

.content p,
.content ul,
.content ol,
.content blockquote {
  @apply mb-6;
}

@screen lg {
  .container {
    @apply px-6;
  }
}
</style>
