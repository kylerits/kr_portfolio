<template>
  <Layout>
    <hero></hero>
  </Layout>
</template>

<script>
import Hero from "../components/hero.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Hero
  }
};
</script>

<style>
.home-links a {
  @apply mr-6 px-3 py-2 text-blue-700 rounded shadow bg-blue-100;
  transition: all 300ms;
}
.home-links a:hover {
  @apply bg-blue-200;
}
</style>
