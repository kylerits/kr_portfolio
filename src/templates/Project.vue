<template>
  <Layout>
    <article :id="$page.project.slug">
      <hero>
        <template v-slot:cover>
          <g-image
            :src="$page.project.cover"
            class="object-center object-cover w-full h-full"
            alt="woods"
          />
        </template>
        <template v-slot:content>
          <h1 class="text-6xl">{{ $page.project.title }}</h1>
          <p class="text-lg">{{ $page.project.excerpt }}</p>
        </template>
      </hero>
      <section class="container mx-auto relative py-12 lg:py-24">
        <div class="content lg:w-4/5" v-html="$page.project.content"></div>
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