<template>
  <div class="service-list relative flex lg:items-center flex-wrap lg:flex-nowrap w-full">
    <!-- Info Column -->
    <div class="column w-full lg:w-1/2 order-2 lg:order-1 lg:pr-12">
      <h3 class="text-4xl font-sans">Services</h3>
      <p
        class="description text-gray-600"
      >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <ul class="service-list relative px-8 py-6">
        <li class="service-item">Web Design</li>
        <li class="service-item">Static Website Development</li>
        <li class="service-item">Web Development and CMS Integration</li>
      </ul>
    </div>

    <!-- Illustration Column -->
    <div class="column w-full lg:w-1/2 order-1 lg:order-2 px-8 lg:px-16">
      <div class="svg-wrap">
        <innovative class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import Innovative from "~/assets/svgs/undraw_innovative_b409.svg";

export default {
  components: {
    Innovative
  },
  title: "ServiceList"
};
</script>