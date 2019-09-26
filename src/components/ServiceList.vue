<template>
  <div class="service-list relative flex flex-wrap w-full">
    <div class="service-wrap w-full md:w-1/2 lg:w-1/3">
      <div class="service relative w-full p-4 bg-green-600 rounded-lg shadow-lg">
        <div class="service-bg absolute inset-0 w-full h-full rounded-lg overflow-hidden">
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
        <div class="service-inner relative w-full bg-white rounded-lg p-4 mt-32"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "ServiceList"
};
</script>