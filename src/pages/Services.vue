<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">Services.</h1>
        <p>Are you a small business or individual in need of a website? I might be able to help you.</p>
      </hero>

      <!-- Web Design Section -->
      <section class="relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <!-- Content -->
            <div class="column w-full lg:w-2/3 lg:pr-8">
              <h2>Web Design</h2>
            </div>
          </div>
        </div>
      </section>

      <!-- Static Web Development -->
      <section class="py-8 lg:py-16">
        <div class="container mx-auto">
          <!-- Content -->
          <div class="column w-full lg:w-2/3 lg:pr-8">
            <h2>Static Web Development</h2>
          </div>
        </div>
      </section>

      <!-- Web Development and CMS Integration -->
      <section class="py-8 lg:py-16">
        <div class="container mx-auto">
          <!-- Content -->
          <div class="column w-full lg:w-2/3 lg:pr-8">
            <h2>Web Development and CMS Integration</h2>
          </div>
        </div>
      </section>
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