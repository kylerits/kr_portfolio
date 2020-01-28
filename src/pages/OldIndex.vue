<template>
  <Layout>
    <hero>
      <h1 class="text-indigo-900 text-4xl lg:text-5xl">
        I am a web developer
        <br />based in Fort Wayne, Indiana.
      </h1>
      <p class="lg:w-4/5">
        My name is Kyle Rodgers. I have a passion for creating dynamic user experiences on the web. I currently work full-time at
        <a
          href="https://gotobig.com/"
        >Brand Innovation Group</a> building robust, enterprise-level websites while working on freelance projects in my spare time.
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
            <g-link to="/projects" class="button bg-indigo-700 text-white">View More</g-link>
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
import Hero from "~/components/hero";
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
      },
      // Open Graph
      {
        property: "og:title",
        content: "I am a Fort Wayne based Web Developer. ← Kyle Rodgers"
      },
      { property: "og:site_name", content: "Kyle Rodgers Portfolio" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://kylerodgers.me"
      },
      {
        property: "og:image",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "I have a passion for creating dynamic user experiences on the web."
      },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://kylerodgers.me"
      },
      {
        name: "twitter:title",
        content: "I am a Fort Wayne based Web Developer. ← Kyle Rodgers"
      },
      {
        name: "twitter:description",
        content:
          "I have a passion for creating dynamic user experiences on the web."
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "@kyle_rits" },
      {
        name: "twitter:image:src",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
      },
      // Google / Schema.org markup:
      {
        itemprop: "name",
        content: "I am a Fort Wayne based Web Developer. ← Kyle Rodgers"
      },
      {
        itemprop: "description",
        content: "I am a Fort Wayne based Web Developer."
      },
      {
        itemprop: "image",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
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
