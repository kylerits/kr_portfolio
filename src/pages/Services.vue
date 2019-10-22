<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-6xl">Services.</h1>
        <p>I have a good deal of experience working on websites, from the simple to the hugely scalable. My goal is to use this platform to provide quality digital work for my community.</p>
      </hero>

      <!-- Web Design Section -->
      <section class="relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <!-- Content -->
            <div class="content column w-full lg:w-2/3 lg:pr-8">
              <h2>Web Design</h2>

              <p>My process of designing a website is to first sit with you and understand the plan you have for the project. We will seek to answer some fundamental questions for any sort digital product.</p>
              <p>
                <strong>Who is your target audience?</strong>
              </p>
              <p>
                <strong>What is your development strategy?</strong>
              </p>
              <p>
                <strong>What questions does your website seek to answer?</strong>
              </p>
              <p>
                <strong>What content and materials do you already have and what do you still need?</strong>
              </p>

              <p>After an initial interview, we will discuss the sitemap and wireframe. This is the basic structure of the website, the skeleton of what's to come.</p>

              <p>At the end of a project, I will provide you with a comprehensive sitemap, a wireframe, and a full design complete with font selection, color scheme, image and copy placement suggestions, as well as directives of functionality. This will be provided in a PDF format for the sake of cross-platform legibility and printability. Raw design files can be provided upon request.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Static Web Development -->
      <section class="py-8 lg:py-16">
        <div class="container mx-auto">
          <!-- Content -->
          <div class="content column w-full lg:w-2/3 lg:pr-8">
            <h2>Static Web Development</h2>
            <p>For a this service, I ask that you provide a completed web design either from me or from another vender. All content ( i.e. images, copy, fonts, etc) will need to be provided ahead of time. A static website refers to the content being fairly locked in barring any knowledge of development on behalf of the client. This is a good solution for anyone looking for a simple brochure website where they will not have to touch the content much in the future.</p>

            <p>The benefit of a static website is that a completely custom design can be developed fairly quickly. This saves all parties time and money. In my experience a lot of clients like the idea of editing their own content in a CMS, but when it comes time for copy changes to be made just end up hiring someone to fill it in for them. If you are in the need of a custom website, a statically developed project is the most cost effective option.</p>

            <p>Deployment of a project can look different form client to client. For those that want to host the site themselve, I will provide all of the statically generated files of the website meeting the specifications of whatever server the site will eventually be hosted on.</p>

            <p>If you would like me to host the site we can discuss a montly fee. I can provide simple updates and copy changes, as well as server management so you dont have to worry about your website.</p>
          </div>
        </div>
      </section>

      <!-- Web Development and CMS Integration -->
      <section class="py-8 lg:py-16">
        <div class="container mx-auto">
          <!-- Content -->
          <div class="column w-full lg:w-2/3 lg:pr-8">
            <h2>Web Development and CMS Integration</h2>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "../components/HeroSmall";

export default {
  components: {
    Hero
  }
};
</script>