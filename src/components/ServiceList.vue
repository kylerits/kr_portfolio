<template>
  <div class="service-list relative flex lg:items-center flex-wrap lg:flex-nowrap w-full">
    <!-- Info Column -->
    <div class="column w-full lg:w-1/2 order-2 lg:order-1 lg:pr-12">
      <h3 class="text-4xl font-sans">Services</h3>
      <p
        class="description mb-6"
      >Whether it is jumping in on a project to help meet a deadline, or taking on a full website from the ground up, I am interested in hearing about your project.</p>

      <ul class="service-list relative mb-6">
        <li class="service-item relative p-4 flex items-start">
          <div class="mr-6">
            <div class="icon-wrap">
              <design-icon class="w-10 h-10" />
            </div>
          </div>
          <div class="relative inline-block">
            <h3 class="font-sans text-lg mb-1">Web Design</h3>
            <p
              class="text-sm text-gray-600"
            >Laying out your website using modern best practices of UI/UX design.</p>
          </div>
        </li>
        <li class="service-item relative p-4 flex">
          <div class="mr-6">
            <div class="icon-wrap">
              <static-dev-icon class="relative w-10 h-10" />
            </div>
          </div>
          <div class="relative inline-block">
            <h3 class="font-sans text-lg mb-1">Static Web Development</h3>
            <p
              class="text-sm text-gray-600"
            >Building a flatfile or static solution for your website. Fast, efficient, and functional.</p>
          </div>
        </li>
        <li class="service-item relative p-4 flex">
          <div class="mr-6">
            <div class="icon-wrap">
              <web-dev-icon class="relative w-10 h-10" />
            </div>
          </div>
          <div class="relative inline-block">
            <h3 class="font-sans text-lg mb-1">Web Development and CMS Integration</h3>
            <p
              class="text-sm text-gray-600"
            >Control your content with a modern web workflow completely custom built using your favorite CMS.</p>
          </div>
        </li>
      </ul>

      <p>
        <g-link to="/services" class="button bg-green-700 text-green-100">Learn more</g-link>
      </p>
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
  @apply relative block;
}

.icon-wrap svg {
  @apply relative text-green-800;
}
.icon-wrap::before {
  content: "";
  @apply w-full h-full bg-green-600 absolute inset-0 opacity-50;
  transform: scale(0.8) skewX(-20deg);
}
</style>