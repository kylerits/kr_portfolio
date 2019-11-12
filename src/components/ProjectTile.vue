<template>
  <div class="project relative w-full p-4 bg-green-600 rounded-lg shadow-xl overflow-hidden">
    <div class="project-bg absolute inset-0 w-full h-full rounded-lg overflow-hidden">
      <slot name="cover">
        <img
          v-if="projectData.cover"
          :src="projectData.cover"
          class="object-center object-cover w-full h-full"
          :alt="projectData.slug"
        />
      </slot>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-indigo-800 opacity-50"
        style="height: 85%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-indigo-800 opacity-50"
        style="height: 60%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-indigo-800 opacity-50"
        style="height: 35%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
    </div>
    <div class="project-inner relative w-full bg-white rounded-lg p-4 mt-32">
      <!-- Title Area -->
      <div class="project-title-wrap flex items-center justify-between mb-3">
        <div class="project-title w-2/3">
          <h2 class="font-sans text-xl text-gray-800 mb-0">{{ projectData.title }}</h2>
          <p class="text-gray-700 text-sm">{{ projectData.client }}</p>
        </div>
        <div class="project-thumbnail-wrap rounded-full p-2 bg-white w-24 h-24 -mt-16">
          <div
            class="project-thumbnail relative w-full h-full rounded-full bg-green-600 overflow-hidden"
          >
            <slot name="logo">
              <img
                :src="projectData.logo"
                class="object-center object-cover w-full h-full"
                alt="woods"
              />
            </slot>
          </div>
        </div>
      </div>

      <!-- Description Area -->
      <div class="project-desc-wrap mb-5">
        <p class="text-gray-700">{{ desc }}</p>
      </div>

      <!-- Links -->
      <div class="project-links">
        <g-link
          :to="projectData.path"
          class="button button-sm mr-3 text-white bg-indigo-700 hover:bg-indigo-800 mb-2"
        >Read More</g-link>
        <a
          :href="projectData.link"
          class="button button-sm mr-3 tracking-wider text-white bg-red-600 hover:bg-red-700 mb-2"
        >View Now</a>
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
      if (this.projectData.excerpt.length > 120) {
        return this.projectData.excerpt.slice(0, 119) + "...";
      }
      return this.projectData.excerpt;
    }
  }
};
</script>

<style>
.project-bg svg {
  backdrop-filter: blur(10px);
}
</style>