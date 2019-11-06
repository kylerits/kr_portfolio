<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">Get in touch.</h1>
      </hero>
      <section class="form-section relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="row flex justify-center">
            <div class="relative w-full lg:w-1/2">
              <div
                class="blob-wrap absolute inset-0"
                v-rellax="{
                  speed: -1,
                  center: true
                }"
              >
                <blob
                  class="absolute text-green-400 w-full h-auto z-0"
                  style="top: 50%; left: 0; transform: translateY(-60%) translateX(-10%) scale(1.5); opacity: 0.15;"
                />
              </div>
              <contact-form class="relative" />
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "~/components/HeroSmall";
import ContactForm from "~/components/ContactForm";

import Blob from "~/assets/svgs/blob-static.svg";

export default {
  components: {
    Hero,
    ContactForm,
    Blob
  }
};
</script>