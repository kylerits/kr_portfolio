<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">My story so far.</h1>
      </hero>
      <section class="container mx-auto relative py-12 lg:py-24">
        <div class="content mx-auto lg:w-2/3 py-12">
          <!-- Who am I? -->
          <div id="intro">
            <p
              class="text-2xl font-sans"
            >My name is Kyle Rodgers. I am a web developer living and working in Fort Wayne, Indiana.</p>

            <p>Web development is something that I have dabbled with ever since High School, taking an introductory HTML course in a Computer Applications class. From that point I remained curious, but I was convinced that I would be doing Video Production for the rest of my live. I always gravitated towards editing and simple vidual effects going through every tutorial that Video Copilot had to offer at the time. It was actually in After Effects that I first learned how to write simple functions.</p>

            <p>When I got to Indiana University, I enrolled in the School fo Informatics and Computing, hoping to take my knowledge of digital video production and couple it with large data management. Essentially my hope was to never see the sunlight again. I pivoted to web development, however when I took an more in depth course on the subject of Frontend Development my sophomore year. I found that I could take the skills I was learning in programming and data management along with the passion I had for working in a digital medium and build websites.</p>
          </div>

          <!-- What am I working on now? -->

          <!-- What is my history? -->

          <!-- What do I hope to accomplish? -->
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "../components/HeroSmall";

export default {
  metaInfo: {
    title: "My story so far."
  },
  components: {
    Hero
  }
};
</script>