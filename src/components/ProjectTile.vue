<template>
  <div class="project relative w-full p-4 bg-green-600 rounded-lg shadow-lg">
    <div class="project-bg absolute inset-0 w-full h-full rounded-lg overflow-hidden">
      <g-image
        src="~/assets/images/black-and-white-clouds-cold-994883.jpg"
        class="object-center object-cover w-full h-full"
        alt="woods"
      />
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-green-800 opacity-50"
        style="height: 75%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-green-800 opacity-50"
        style="height: 50%;"
      >
        <polygon fill="currentColor" points="0,0 100,20 100,100 0,100" />
      </svg>
      <svg
        viewBox="0, 0, 100, 100"
        preserveAspectRatio="xMidYMin slice"
        class="w-full absolute bottom-0 text-green-800 opacity-50"
        style="height: 25%;"
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
          <div class="project-thumbnail w-full h-full rounded-full bg-green-600"></div>
        </div>
      </div>

      <!-- Description Area -->
      <div class="project-desc-wrap mb-5">
        <p class="text-gray-600">{{ projectData.excerpt }}</p>
      </div>

      <!-- Links -->
      <div class="project-links">
        <g-link
          :to="projectData.path"
          class="inline-block mr-3 font-sans font-light text-sm tracking-wider px-3 py-1 text-green-200 bg-green-700 hover:bg-green-800"
        >Info</g-link>
        <a
          :href="projectData.link"
          class="inline-block mr-3 font-sans font-light text-sm tracking-wider px-3 py-1 text-red-200 bg-red-600 hover:bg-red-700"
        >Website</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectData"]
};
</script>