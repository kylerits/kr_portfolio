<template>
  <Layout>
    <article :id="$page.project.slug">
      <hero>
        <template v-slot:cover>
          <g-image
            v-if="$page.project.cover"
            :src="$page.project.cover"
            class="object-center object-cover w-full h-full"
            :alt="$page.project.title"
          />
        </template>
        <template v-slot:content>
          <h1 class="text-indigo-900 text-6xl">{{ $page.project.title }}</h1>
          <p class="text-lg mb-6">{{ $page.project.excerpt }}</p>
          <p>
            <a
              :href="$page.project.link"
              target="_blank"
              class="button bg-red-600 text-red-100 mr-2 mb-2"
            >Visit the site</a>
            <g-link
              to="/projects/"
              class="button bg-green-700 text-green-100 mr-2 mb-2"
            >Back to Projects</g-link>
          </p>
        </template>
      </hero>
      <section class="container mx-auto relative py-12 lg:py-24">
        <div class="flex flex-wrap">
          <div class="content-wrap lg:w-2/3 lg:pr-12 mb-12">
            <div class="content mb-6" v-html="$page.project.content"></div>
            <p>
              <g-link to="/projects/" class="button bg-green-700 text-green-100">Back to Projects</g-link>
            </p>
          </div>
          <div class="info lg:w-1/3">
            <a
              :href="$page.project.link"
              class="screenshot-wrap relative block overflow-scroll rounded-lg lg:-mt-24 shadow-md"
              style="height: 18rem;"
              target="_blank"
            >
              <g-image
                v-if="$page.project.screenshot"
                :src="$page.project.screenshot"
                class="relative block max-w-full h-auto z-0"
                :alt="$page.project.title + ' Screenshot'"
              ></g-image>
            </a>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<page-query>
  query Projects ($path: String!) {
    project (path: $path) {
      id
      title
      path
      slug
      client
      dateStart
      dateEnd
      excerpt
      cover (width: 1800, height: 700)
      screenshot
      logo
      link
      content
    }
  }
</page-query>

<script>
import Hero from "../components/ProjectHero";

export default {
  components: {
    Hero
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.excerpt
        },
        // Open Graph
        {
          property: "og:title",
          content: this.$page.project.title + " ← Kyle Rodgers"
        },
        { property: "og:site_name", content: "Kyle Rodgers Portfolio" },
        // The list of types is available here: http://ogp.me/#types
        { property: "og:type", content: "website" },
        // Should the the same as your canonical link, see below.
        {
          property: "og:url",
          content: "https://kylerodgers.me/" + this.$page.project.slug
        },
        {
          property: "og:image",
          content: this.$page.project.cover
        },
        // Often the same as your meta description, but not always.
        {
          property: "og:description",
          content: this.$page.project.excerpt
        },
        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "https://kylerodgers.me/" + this.$page.project.slug
        },
        {
          name: "twitter:title",
          content: this.$page.project.title + " ← Kyle Rodgers"
        },
        {
          name: "twitter:description",
          content: this.$page.project.excerpt
        },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@kyle_rits" },
        {
          name: "twitter:image:src",
          content: this.$page.project.cover
        },
        // Google / Schema.org markup:
        {
          itemprop: "name",
          content: this.$page.project.title + " ← Kyle Rodgers"
        },
        {
          itemprop: "description",
          content: this.$page.project.excerpt
        },
        {
          itemprop: "image",
          content: this.$page.project.cover
        }
      ]
    };
  }
};
</script>