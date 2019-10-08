<template>
  <div class="project relative w-full p-4 bg-green-600 rounded-lg shadow-xl">
    <div class="project-bg absolute inset-0 w-full h-full rounded-lg overflow-hidden">
      <img :src="projectData.cover" class="object-center object-cover w-full h-full" alt="woods" />
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-green-800 opacity-50"
        style="height: 85%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-green-800 opacity-50"
        style="height: 60%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-green-800 opacity-50"
        style="height: 35%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
    </div>
    <div class="project-inner relative w-full bg-white rounded-lg p-4 mt-32">
      <!-- Title Area -->
      <div class="project-title-wrap flex items-center justify-between mb-3">
        <div class="project-title w-2/3">
          <h2 class="font-sans text-xl text-gray-700 mb-0">{{ projectData.title }}</h2>
          <p class="text-gray-500 text-sm">{{ projectData.client }}</p>
        </div>
        <div class="project-thumbnail-wrap rounded-full p-2 bg-white w-24 h-24 -mt-16">
          <div
            class="project-thumbnail relative w-full h-full rounded-full bg-green-600 overflow-hidden"
          >
            <img
              :src="projectData.logo"
              class="object-center object-cover w-full h-full"
              alt="woods"
            />
          </div>
        </div>
      </div>

      <!-- Description Area -->
      <div class="project-desc-wrap mb-5">
        <p class="text-gray-600">{{ desc }}</p>
      </div>

      <!-- Links -->
      <div class="project-links">
        <g-link
          :to="projectData.path"
          class="button button-sm mr-3 text-green-200 bg-green-700 hover:bg-green-800"
        >Read More</g-link>
        <a
          :href="projectData.link"
          class="button button-sm mr-3 tracking-wider text-red-200 bg-red-600 hover:bg-red-700"
        >Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectData"],
  computed: {
    coverImage() {
      return this.projectData.cover;
    },
    desc() {
      if (this.projectData.excerpt.length > 100) {
        return this.projectData.excerpt.slice(0, 99) + "...";
      }
      return this.projectData.excerpt;
    }
  }
};
</script>