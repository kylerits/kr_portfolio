<template>
  <div class="projects-list relative flex flex-wrap w-full">
    <!-- Project Loop -->
    <div
      v-for="{ node } in $static.allProject.edges"
      :key="node.id"
      class="project-wrap w-full md:w-1/2 lg:w-1/3 px-5 mb-6"
    >
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
</template>

<static-query>
query Projects {
    allProject (sortBy: "title" order: ASC limit: 3) {
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
          cover (width: 330, height: 410, quality: 90)
          logo
          link
          content
        }
      }
    }
  }
</static-query>

<script>
import ProjectTile from "~/components/ProjectTile";

export default {
  title: "Projects List",
  components: {
    ProjectTile
  },
  data() {
    return {
      projectsTemp: [
        {
          title: "Project Title",
          position: "Web Developer at Big",
          dates: {
            startDate: "08/21/2019",
            endDate: "09/03/2019"
          },
          client: "Client Name",
          link: "",
          type: ["development"],
          excerpt:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          tech: [{ title: "Craft CMS", link: "https://craftcms.com/" }],
          cover: ""
        }
      ]
    };
  }
};
</script>