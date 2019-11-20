<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-indigo-900 text-6xl">Get in touch.</h1>
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
import ContactForm from "~/components/GetForm";

import Blob from "~/assets/svgs/blob-static.svg";

export default {
  metaInfo: {
    title: "Get in touch.",
    meta: [
      {
        name: "description",
        content: "Let me know if you have any questions."
      },
      // Open Graph
      {
        property: "og:title",
        content: "Get in touch. ← Kyle Rodgers"
      },
      { property: "og:site_name", content: "Kyle Rodgers Portfolio" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://kylerodgers.me/contact"
      },
      {
        property: "og:image",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: "Let me know if you have any questions."
      },
      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://kylerodgers.me/contact"
      },
      {
        name: "twitter:title",
        content: "Get in touch. ← Kyle Rodgers"
      },
      {
        name: "twitter:description",
        content: "Let me know if you have any questions."
      },
      // Your twitter handle, if you have one.
      { name: "twitter:creator", content: "@kyle_rits" },
      {
        name: "twitter:image:src",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
      },
      // Google / Schema.org markup:
      {
        itemprop: "name",
        content: "Get in touch. ← Kyle Rodgers"
      },
      {
        itemprop: "description",
        content: "Let me know if you have any questions."
      },
      {
        itemprop: "image",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
      }
    ]
  },
  components: {
    Hero,
    ContactForm,
    Blob
  }
};
</script>