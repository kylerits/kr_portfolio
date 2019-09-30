<template>
  <div class="service-list relative flex lg:items-center flex-wrap lg:flex-nowrap w-full">
    <!-- Info Column -->
    <div class="column w-full lg:w-1/2 order-2 lg:order-1 lg:pr-12">
      <h3 class="text-4xl font-sans">Services</h3>
      <p
        class="description text-gray-600 mb-6"
      >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <ul class="service-list relative">
        <li class="service-item relative p-4">
          <span class="icon-wrap mr-6">
            <design-icon class="w-10 h-10" />
          </span>
          <span class="relative inline-block">Web Design</span>
        </li>
        <li class="service-item relative p-4">
          <span class="icon-wrap mr-6">
            <static-dev-icon class="w-10 h-10" />
          </span>
          <span class="relative inline-block">Static Web Development</span>
        </li>
        <li class="service-item relative p-4">
          <span class="icon-wrap mr-6">
            <web-dev-icon class="w-10 h-10" />
          </span>
          <span class="relative inline-block">Web Development and CMS Integration</span>
        </li>
      </ul>
    </div>

    <!-- Illustration Column -->
    <div class="column w-full lg:w-1/2 order-1 lg:order-2 px-8 lg:px-16">
      <div class="svg-wrap">
        <web-developer class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import Innovative from "~/assets/svgs/undraw_innovative_b409.svg";
import WebDeveloper from "~/assets/svgs/undraw_web_developer_p3e5.svg";
import DesignIcon from "~/assets/svgs/design-tool-pen-station.svg";
import StaticDevIcon from "~/assets/svgs/optimization-timer-1.svg";
import WebDevIcon from "~/assets/svgs/programming-flag.svg";

export default {
  components: {
    Innovative,
    WebDeveloper,
    DesignIcon,
    StaticDevIcon,
    WebDevIcon
  },
  title: "ServiceList"
};
</script>

<style>
.icon-wrap {
  @apply relative inline-block;
}

.icon-wrap svg {
  @apply relative text-green-800;
}
.icon-wrap::before {
  content: "";
  @apply w-full h-full bg-green-600 absolute inset-0 opacity-50;
  transform: translate(15%, -10%) scale(0.9) skewX(-20deg);
}
</style>