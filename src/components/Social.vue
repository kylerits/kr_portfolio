<template>
  <div class="lg:fixed left-0 bottom-0 ml-6 mb-6 mt-3 lg:mt-0 lg:ml-10 lg:mb-12 z-50">
    <nav id="social-menu">
      <span class="text-xs text-red-600 opacity-75 mr-3 lg:mb-3">social //</span>
      <a
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        v-for="social,index in socialList"
        :key="index"
        class="social-item mr-2 lg:mb-2 tracking-wide text-sm text-indigo-800 hover:text-red-700"
      >{{ social.title }}</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialList: [
        {
          title: "twitter",
          url: "https://twitter.com/kyle_rits"
        },
        {
          title: "linkedin",
          url: "https://www.linkedin.com/in/kyleritschardrodgers/"
        }
      ]
    };
  }
};
</script>

<style>
@screen lg {
  .social-item {
    @apply relative;
    transition: all 200ms;
  }

  .social-item::before {
    content: "";
    @apply absolute h-0 rounded opacity-50 bg-red-900 border-red-600 border-l;
    top: 50%;
    left: 0.1rem;
    transform: translateY(-50%);
    transition: height 300ms;
  }

  .social-item:hover::before {
    @apply h-full;
  }

  #social-menu {
    writing-mode: vertical-rl;
  }

  #social-menu a,
  #social-menu span {
    text-orientation: mixed;
  }
}
</style>