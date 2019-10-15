<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">Projects.</h1>
        <p>
          Having worked as a web developer for the past 5 years I have built up a portfolio of projects that I am proud to have been a part of. If you have a project that you would like to collaborate on, feel free to
          <g-link to="/contact" class="mr-1">get in touch</g-link>.
        </p>
      </hero>

      <section class="project-list-large py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="row flex flex-wrap justify-center">
            <div
              class="project-column w-full mb-6"
              v-for="{ node }, index in $page.allProject.edges"
              :class="[ index == 0 ? 'lg:w-2/3 lg:mx-12' : 'lg:w-1/3' ]"
              :key="node.id"
            >
              <div class="project-wrap px-3 lg:px-6 lg:mb-6">
                <project-tile :projectData="node"></project-tile>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<page-query>
query Projects {
    allProject (sortBy: "title" order: DESC) {
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
import Hero from "../components/HeroSmall";
import ProjectTile from "../components/ProjectTile";

export default {
  components: {
    Hero,
    ProjectTile
  }
};
</script>