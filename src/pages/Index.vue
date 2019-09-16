<template>
  <Layout>
    <h1 class="font-sans text-5xl mb-6 text-gray-500 font-light -ml-6">Coming Soon!</h1>

    <p
      class="font-serif text-base text-gray-800 mb-10"
    >I am currently working on rebuilding my website. If you would like to le arn more about me, check me out via the links below! Thank you for your patience.</p>

    <p class="home-links">
      <a
        href="https://www.linkedin.com/in/kyleritschardrodgers/"
        target="_blank"
        rel="noopener"
      >LinkedIn</a>
      <a href="https://github.com/kylerits" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  @apply mr-6 px-3 py-2 text-blue-700 rounded shadow bg-blue-100;
  transition: all 300ms;
}
.home-links a:hover {
  @apply bg-blue-200;
}
</style>
