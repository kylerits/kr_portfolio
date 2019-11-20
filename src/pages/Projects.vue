<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-indigo-900 text-6xl">Projects.</h1>
        <p>
          Having worked as a web developer for the past 5 years I have built up a portfolio of projects that I am proud to have been a part of. If you have a project that you would like to collaborate on, feel free to
          <g-link to="/contact" class="mr-1">get in touch</g-link>.
        </p>
      </hero>

      <section class="project-list-large relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="row flex flex-wrap justify-center">
            <div
              class="project-column w-full mb-6"
              v-for="{ node }, index in $page.allProject.edges"
              :class="[ index == 0 ? 'lg:w-2/3 lg:mx-12' : 'lg:w-1/3' ]"
              :key="node.id"
            >
              <div class="project-wrap px-3 lg:px-6 lg:mb-6">
                <project-tile :projectData="node">
                  <template v-slot:cover>
                    <g-image
                      :src="node.cover"
                      class="object-center object-cover w-full h-full"
                      :alt="node.slug"
                    />
                  </template>
                  <template v-slot:logo>
                    <g-image
                      :src="node.logo"
                      class="object-center object-cover w-full h-full"
                      :alt="node.title + ' Logo'"
                    />
                  </template>
                </project-tile>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<page-query>
query {
    allProject (sortBy: "dateEnd" order: DESC) {
      edges {
        node {
          id
          title
          path
          slug
          client
          dateStart
          dateEnd
          excerpt
          cover
          logo
          link
          content
        }
      }
    }
  }
</page-query>

<script>
import Hero from "~/components/HeroSmall";
import ProjectTile from "~/components/ProjectTile";

export default {
  metaInfo: {
    title: "Projects.",
    meta: [
      {
        name: "description",
        content:
          "Having worked as a web developer for the past 5 years I have built up a portfolio of projects that I am proud to have been a part of."
      },
      // Open Graph
      {
        property: "og:title",
        content: "Projects. ← Kyle Rodgers"
      },
      { property: "og:site_name", content: "Kyle Rodgers Portfolio" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://kylerodgers.me/projects"
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
          "Having worked as a web developer for the past 5 years I have built up a portfolio of projects that I am proud to have been a part of."
      },
      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://kylerodgers.me/projects"
      },
      {
        name: "twitter:title",
        content: "Projects. ← Kyle Rodgers"
      },
      {
        name: "twitter:description",
        content:
          "Having worked as a web developer for the past 5 years I have built up a portfolio of projects that I am proud to have been a part of."
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
        content: "Projects. ← Kyle Rodgers"
      },
      {
        itemprop: "description",
        content:
          "Having worked as a web developer for the past 5 years I have built up a portfolio of projects that I am proud to have been a part of."
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
    ProjectTile
  }
};
</script>