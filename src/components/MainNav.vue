<template>
  <div
    id="mainNav"
    class="fixed right-0 bottom-0 lg:top-0 mr-6 mb-6 lg:mr-12 lg:mt-16 z-50 flex-col"
  >
    <ClientOnly>
      <transition-group
        name="staggered-fade"
        tag="nav"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        class="main-nav absolute right-0 font-bold flex flex-col items-end justify-around order-1 lg:order-2"
      >
        <g-link to="/" class="nav-item" key="home" data-index="0" v-if="isVisible">
          <span class="nav-text inline-block relative px-3">Home</span>
        </g-link>
        <g-link to="/about" class="nav-item" key="about" data-index="1" v-if="isVisible">
          <span class="nav-text inline-block relative px-3">About</span>
        </g-link>
        <g-link to="/projects" class="nav-item" key="projects" data-index="2" v-if="isVisible">
          <span class="nav-text inline-block relative px-3">Projects</span>
        </g-link>
        <g-link to="/services" class="nav-item" key="services" data-index="3" v-if="isVisible">
          <span class="nav-text inline-block relative px-3">Services</span>
        </g-link>
        <g-link to="/contact" class="nav-item" key="contact" data-index="4" v-if="isVisible">
          <span class="nav-text inline-block relative px-3">Contact</span>
        </g-link>
      </transition-group>
    </ClientOnly>
    <button
      id="showNav"
      class="relative p-2 w-12 h-12 bg-red-700 text-red-200 rounded-full shadow-lg order-2 lg:order-1"
      @click="isVisible = !isVisible"
    >
      <signpost-icon class="w-full h-full" />
    </button>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

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
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.translateX = "20px";
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 1, translateX: "0" },
          { duration: 100 },
          { complete: done }
        );
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 50;
      setTimeout(function() {
        Velocity(
          el,
          { opacity: 0, translateX: "20px" },
          { duration: 50 },
          { complete: done }
        );
      }, delay);
    }
  },
  mounted() {
    Velocity = require("velocity-animate");
  }
};
</script>

<style>
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
  @apply absolute border-indigo-700 border-b;
  width: 12rem;
  top: 50%;
  left: 100%;
}

.nav-item > .nav-text::before {
  content: "";
  @apply absolute w-full h-full bg-indigo-500 opacity-75;
  transform: translateX(-0.75rem) skewX(-20deg);
  z-index: -1;
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
</style>