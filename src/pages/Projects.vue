<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">Projects.</h1>
        <p>
          It can be difficult to find a solid developer. I prefer to let my work speak for itself. If you like what you see and you're in need of development, feel free to
          <g-link to="/contact" class="mr-1">get in touch</g-link>with me to collaborate on a project.
        </p>
      </hero>
    </article>
  </Layout>
</template>

<script>
import Hero from "../components/HeroSmall";

export default {
  components: {
    Hero
  }
};
</script>