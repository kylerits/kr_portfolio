<template>
  <Layout>
    <article id="thanks">
      <hero>
        <h1 class="text-6xl">Thank you!</h1>
        <p>I will get back to you as soon as I am able.</p>
      </hero>
      <section class="form-section relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="row flex justify-center">
            <div class="w-full lg:w-3/4"></div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "~/components/HeroSmall";

export default {
  metaInfo: {
    title: "Thank You.",
    meta: [
      {
        name: "description",
        content: "I will get back to you as soon as I am able."
      }
    ]
  },
  components: {
    Hero
  }
};
</script>