<template>
  <Layout>
    <hero>
      <h1 class="text-6xl">I am a web developer.</h1>
      <p
        class="lg:w-4/5"
      >My name is Kyle Rodgers and I build websites. That entails taking a project all the way from the planning phase, through design and production, all the way to deployment.</p>
    </hero>

    <!-- Services Intro -->
    <section class="py-8 lg:py-16 lg:px-16">
      <div class="container mx-auto">
        <service-list />
      </div>
    </section>

    <!-- Experience -->

    <!-- Projects Sample -->
    <section class="py-8 lg:py-16">
      <div class="container mx-auto">
        <project-list />
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from "../components/Hero.vue";
import ServiceList from "~/components/ServiceList";
import ProjectList from "~/components/ProjectList";

export default {
  metaInfo: {
    title: "Under Construction"
  },
  components: {
    Hero,
    ServiceList,
    ProjectList
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
