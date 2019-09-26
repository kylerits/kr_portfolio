<template>
  <div class="projects-list relative flex flex-wrap w-full">
    <!-- Single Project -->
    <div class="project-wrap w-full md:w-1/2 lg:w-1/3">
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
          <div class="project-title-wrap flex items-center justify-between">
            <div class="project-title w-2/3">
              <h2 class="font-sans text-xl text-gray-700 mb-0">Project Title</h2>
              <p class="text-gray-500 text-sm">Company</p>
            </div>
            <div class="project-thumbnail-wrap rounded-full p-2 bg-white w-24 h-24 -mt-16">
              <div class="project-thumbnail w-full h-full rounded-full bg-green-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>