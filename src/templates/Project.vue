<template>
  <Layout>
    <article :id="$page.project.slug">
      <hero>
        <template v-slot:cover>
          <g-image
            :src="$page.project.cover"
            class="object-center object-cover w-full h-full"
            :alt="$page.project.title"
          />
        </template>
        <template v-slot:content>
          <h1 class="text-6xl">{{ $page.project.title }}</h1>
          <p class="text-lg">{{ $page.project.excerpt }}</p>
        </template>
      </hero>
      <section class="container mx-auto relative py-12 lg:py-24">
        <div class="flex flex-wrap">
          <div class="content lg:w-2/3 lg:pr-12" v-html="$page.project.content"></div>
          <div class="info lg:w-1/3">
            <g-image
              v-if="$page.project.screenshot"
              :src="$page.project.screenshot"
              class="block -mt-24 max-w-full h-auto mb-8 shadow-md rounded-lg"
              :alt="$page.project.title + ' Screenshot'"
            ></g-image>
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
          cover
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
  }
};
</script>