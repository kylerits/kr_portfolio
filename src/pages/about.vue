<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">My story so far.</h1>
      </hero>
      <section class="relative container mx-auto relative py-12 lg:py-24">
        <div class="content mx-auto lg:w-1/2 py-12">
          <!-- Who am I? -->
          <div id="bio" class="leading-loose">
            <h3
              class="text-2xl font-sans leading-relaxed"
            >My name is Kyle Rodgers. I am a web developer living and working in Fort Wayne, Indiana.</h3>

            <p>Web development is something that I have dabbled with ever since High School taking an introductory HTML course in a Computer Applications class. From that point I remained curious, but I was convinced that I would be doing Video Production for the rest of my live. I always gravitated towards editing and simple vidual effects going through every tutorial that Video Copilot had to offer at the time. It was actually in After Effects that I first learned how to write simple functions.</p>

            <p>When I got to Indiana University, I enrolled in the School fo Informatics and Computing, hoping to take my knowledge of digital video production and couple it with large data management. Essentially my hope was to never see the sunlight again. I pivoted to web development, however when I took an more in depth course on the subject of Frontend Development my sophomore year. I found that I could take the skills I was learning in programming and data management along with the passion I had for working in a digital medium to build websites.</p>

            <p>Straight out of college, I started working at Lewis SEO building simple Wordpress sites for clients looking to increase their presence online. It was here that I grew my skill base from just installing and manipulating a theme to building a custom theme from the ground up. I was fortunate in that I was afforded plenty of time to learn and explore on my own. I took tutorial after tutorial, completed online courses and ceaselessly scoured documentation of technology in which I was interrested.</p>

            <p>Feeling a need to further grow professionally, I branched out and was hired by Brand Innovation Group where I currently reside. In the brief couple of years that I have been with Big I have learned tremendously. Working in an agency setting certainly gives you a broad array of different challenges that require creative and scalable solutions.</p>

            <p>
              Still I feel a need to grow professionally, so I am using my spare time to work on freelance projects. I hope to offer my services as well as my experience as a professional web develop to help individuals and small businesses that are looking for quality work without an entire agency attached to it and the costs that would assume. If there is anything I can help you with digitally, feel free to
              <g-link to="/contact">get in touch.</g-link>
            </p>
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
import Hero from "~/components/HeroSmall";

export default {
  metaInfo: {
    title: "My story so far.",
    meta: [
      {
        name: "description",
        content:
          "I hope to offer my services as well as my experience as a professional web develop to help individuals and small businesses that are looking for quality work without an entire agency attached to it and the costs that would assume."
      }
    ]
  },
  components: {
    Hero
  }
};
</script>

<style>
@screen lg {
  #bio p {
    @apply leading-loose;
  }
}
</style>