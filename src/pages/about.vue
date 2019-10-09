<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">My story so far.</h1>
      </hero>
      <section class="container mx-auto relative py-12 lg:py-24">
        <div class="content mx-auto lg:w-2/3 py-12">
          <!-- Who am I? -->
          <div id="intro">
            <p
              class="text-2xl font-sans"
            >My name is Kyle Rodgers. I am a web developer living and working in Fort Wayne, Indiana.</p>
            <p></p>
          </div>

          <!-- What am I working on now? -->

          <!-- What is my history? -->

          <!-- What do I hope to accomplish? -->
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "../components/HeroSmall";

export default {
  metaInfo: {
    title: "My story so far."
  },
  components: {
    Hero
  }
};
</script>