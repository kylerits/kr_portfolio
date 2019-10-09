<template>
  <div class="projects-list relative flex flex-wrap w-full">
    <!-- Single Project -->
    <div
      v-for="{ node } in $static.allProject.edges"
      :key="node.id"
      class="project-wrap w-full md:w-1/2 lg:w-1/3 px-5 mb-6"
    >
      <project-tile :projectData="node" />
    </div>
    <!-- <div v-for="project in projectsTemp" class="project-wrap w-full md:w-1/2 lg:w-1/3">
      <project-tile :projectData="project" />
    </div>-->
  </div>
</template>

<static-query>
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