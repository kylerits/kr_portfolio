<template>
  <Layout>
    <hero>
      <h1 class="text-6xl text-indigo-300">I am a web developer.</h1>
      <p
        class="text-indigo-400 lg:w-4/5"
      >My name is Kyle Rodgers and I build websites. That entails taking a project all the way from the planning phase, through design and production, all the way to deployment.</p>
    </hero>

    <!-- Services Intro -->

    <!-- Experience -->

    <!-- Projects Sample -->
  </Layout>
</template>

<script>
import Hero from "../components/Hero.vue";

export default {
  metaInfo: {
    title: "Under Construction"
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
