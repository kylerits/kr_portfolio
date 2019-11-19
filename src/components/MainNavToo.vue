<template>
  <div
    id="mainNav"
    class="fixed right-0 bottom-0 lg:top-0 mr-6 mb-6 lg:mr-12 lg:mt-16 z-50 flex-col"
  >
    <transition-group
      name="staggered-fade"
      tag="nav"
      class="main-nav absolute right-0 font-bold flex flex-col items-end justify-around order-1 lg:order-2"
    >
      <g-link
        to="/"
        class="nav-item bg-white shadow-lg rounded-l-full overflow-hidden"
        key="home"
        data-index="0"
        v-if="isVisible"
      >
        <span class="nav-text inline-block relative px-3">
          <span class="inner-text">Home</span>
        </span>
      </g-link>
      <g-link
        to="/about"
        class="nav-item bg-white shadow-lg rounded-l-full overflow-hidden"
        key="about"
        data-index="1"
        v-if="isVisible"
      >
        <span class="nav-text inline-block relative px-3">
          <span class="inner-text">About</span>
        </span>
      </g-link>
      <g-link
        to="/projects"
        class="nav-item bg-white shadow-lg rounded-l-full overflow-hidden"
        key="projects"
        data-index="2"
        v-if="isVisible"
      >
        <span class="nav-text inline-block relative px-3">
          <span class="inner-text">Projects</span>
        </span>
      </g-link>
      <g-link
        to="/services"
        class="nav-item bg-white shadow-lg rounded-l-full overflow-hidden"
        key="services"
        data-index="3"
        v-if="isVisible"
      >
        <span class="nav-text inline-block relative px-3">
          <span class="inner-text">Services</span>
        </span>
      </g-link>
      <g-link
        to="/contact"
        class="nav-item bg-white shadow-lg rounded-l-full overflow-hidden"
        key="contact"
        data-index="4"
        v-if="isVisible"
      >
        <span class="nav-text inline-block relative px-3">
          <span class="inner-text">Contact</span>
        </span>
      </g-link>
    </transition-group>
    <button
      id="showNav"
      title="Show Navigation Button"
      class="relative p-2 w-12 h-12 bg-red-700 text-red-200 rounded-full shadow-lg order-2 lg:order-1"
      @click="isVisible = !isVisible"
    >
      <signpost-icon class="w-full h-full" />
    </button>
  </div>
</template>

<script>
// import Velocity from "velocity-animate";

import BinocularIcon from "~/assets/svgs/binocular.svg";
import SignpostIcon from "~/assets/svgs/signpost-2.svg";

export default {
  components: {
    BinocularIcon,
    SignpostIcon
  },
  data() {
    return {
      isVisible: false
    };
  }
};
</script>

<style>
:root {
  --enter-delay: 0ms;
  --leave-delay: 0ms;
}

.main-nav {
  bottom: 100%;
  height: 40vh;
}

.nav-item {
  @apply relative block text-lg text-indigo-900;
  width: 8rem;
  transition: all 300ms;
}

.nav-item:hover {
  width: 9rem;
}

.nav-item > .nav-text::after {
  content: "";
  @apply absolute border-indigo-700 border-b-4;
  width: 12rem;
  top: 50%;
  left: 100%;
  opacity: 0.1;
  z-index: 0;
}

.nav-item > .nav-text::before {
  content: "";
  @apply absolute w-full h-full bg-indigo-500;
  transform: translateX(-0.75rem) skewX(-20deg) scale(1.05);
  z-index: 1;
}

.nav-item > .nav-text > .inner-text {
  @apply relative;
  z-index: 2;
}

@screen md {
  .main-nav {
    height: 75vh;
  }

  .nav-item {
    width: 12rem;
  }

  .nav-item:hover {
    width: 13rem;
  }
}

@screen lg {
  .main-nav {
    top: 10%;
    bottom: auto;
  }
}

/* Transitions */
.staggered-fade-enter-active {
  transition: all 300ms;
}
.staggered-fade-leave-active {
  transition: all 300ms;
}
.staggered-fade-enter,
.staggered-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>