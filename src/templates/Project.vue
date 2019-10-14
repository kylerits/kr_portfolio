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
          <p class="text-lg mb-6">{{ $page.project.excerpt }}</p>
          <p>
            <a
              :href="$page.project.link"
              target="_blank"
              class="button bg-red-600 text-red-100"
            >Visit the site</a>
          </p>
        </template>
      </hero>
      <section class="container mx-auto relative py-12 lg:py-24">
        <div class="flex flex-wrap">
          <div class="content-wrap lg:w-2/3 lg:pr-12">
            <div class="content mb-6" v-html="$page.project.content"></div>
            <p>
              <g-link to="/projects" class="button bg-green-600 text-green-800">Back to Projects</g-link>
            </p>
          </div>
          <div class="info lg:w-1/3">
            <a
              :href="$page.project.link"
              class="screenshot-wrap block overflow-scroll rounded-lg lg:-mt-24 mb-6 shadow-md"
              style="height: 18rem;"
              target="_blank"
            >
              <g-image
                v-if="$page.project.screenshot"
                :src="$page.project.screenshot"
                class="relative block max-w-full h-auto"
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