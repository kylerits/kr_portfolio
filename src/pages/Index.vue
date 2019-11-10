<template>
  <Layout>
    <hero>
      <h1 class="text-4xl lg:text-5xl">
        I am a web developer
        <br />based in Fort Wayne, Indiana.
      </h1>
      <p class="lg:w-4/5">
        My name is Kyle Rodgers. I have a passion for creating dynamic user experiences on the web. I currently work full-time at
        <a
          href="https://gotobig.com/"
        >Brand Innovation Group</a> building robust, enterprise-level websites while woking on freelance projects in my spare time.
      </p>
    </hero>

    <!-- Projects Sample -->
    <section class="relative py-8 lg:py-16 z-10">
      <div class="container mx-auto">
        <div class="section-header flex justify-center mb-12">
          <div class="w-full lg:w-2/3 text-center">
            <h2>Projects</h2>
            <p class="mb-6">Below is a sample of projects that I am proud to have worked on.</p>
            <p>
              <span class="underline inline-block w-16 border-b-4 border-indigo-600"></span>
            </p>
          </div>
        </div>
        <project-list class="mb-12" />
        <div class="section-footer">
          <p class="text-center">
            <g-link to="/projects" class="button bg-indigo-700 text-indigo-100">View More</g-link>
          </p>
        </div>
      </div>
    </section>

    <!-- Services Intro -->
    <section class="relative py-8 lg:py-16 lg:px-16">
      <div class="container mx-auto">
        <service-list />
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero";
import ServiceList from "~/components/ServiceList";
import ProjectList from "~/components/ProjectList";

export default {
  metaInfo: {
    title: "I am a Fort Wayne based Web Developer.",
    meta: [
      {
        name: "description",
        content:
          "I have a passion for creating dynamic user experiences on the web."
      }
    ]
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
