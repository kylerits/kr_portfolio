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
  --color-indigo: hsl(190, 13%, 27%);
  --color-indigo-25: hsl(190, 13%, 27%, 0.25);
}
body {
  @apply bg-indigo-800;
}
</style>
