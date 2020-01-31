<template>
  <div class="layout">
    <expert-header />
    <slot />
    <kr-footer />
  </div>
</template>

<script>
import ExpertHeader from "~/components/ExpertHeader.vue";
import KrFooter from "~/components/KrFooter.vue";

export default {
  components: {
    ExpertHeader,
    KrFooter
  },
  metaInfo: {
    script: [
      {
        innerHTML: `
        {
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Kyle Rodgers",
          "url": "https://expertatwebdesign.com/",
          "image": "https://expertatwebdesign.com/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg",
          "sameAs": [
            "https://twitter.com/kyle_rits",
            "https://www.linkedin.com/in/kyleritschardrodgers/"
          ],
          "jobTitle": "Web Developer"  
        }`,
        type: "application/ld+json"
      }
    ]
  }
};
</script>

<style src="../main.css"></style>
