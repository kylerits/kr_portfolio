<template>
  <Layout>
    <article id="thanks">
      <hero>
        <h1 class="text-indigo-900 text-6xl">Thank you!</h1>
        <p>I will get back to you as soon as I am able.</p>
      </hero>
      <section class="form-section relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="row flex justify-center">
            <div class="relative w-full w-3/4 lg:w-1/3">
              <div class="illustration-wrap relative w-full h-0" style="padding-top: 64.5%">
                <div
                  class="blob-wrap absolute inset-0"
                  v-rellax="{
                  speed: -1,
                  center: true
                }"
                >
                  <blob
                    class="absolute text-green-400 w-full h-auto z-0"
                    style="top: 50%; left: 0; transform: translateY(-30%) translateX(-20%) scale(2); opacity: 0.15;"
                  />
                </div>
                <div class="svg-wrap absolute inset-0">
                  <hello class="w-full text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "~/components/HeroSmall";

import Blob from "~/assets/svgs/blob-design.svg";
import Hello from "~/assets/svgs/undraw_hello.svg";

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
    Hero,
    Blob,
    Hello
  }
};
</script>