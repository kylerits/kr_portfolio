<template>
  <Layout>
    <article id="about">
      <hero>
        <h1 class="text-indigo-900 text-6xl">Services.</h1>
        <p>I have a good deal of experience working on websites, from the simple to the hugely scalable. My goal is to use this platform to provide quality digital work for my community.</p>
      </hero>

      <!-- Web Design Section -->
      <section id="web-design" class="relative py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <!-- Content -->
            <div class="content column w-full order-2 lg:order-1 lg:w-1/2 lg:pr-8">
              <h2>Web Design</h2>

              <p>My process of designing a website is to first sit with you and understand the plan you have for the project. We will seek to answer some fundamental questions for any sort digital product.</p>
              <p class="relative small-underline font-sans text-green-700">
                <strong>Who is your target audience?</strong>
              </p>
              <p class="relative small-underline font-sans text-green-700">
                <strong>What is your development strategy?</strong>
              </p>
              <p class="relative small-underline font-sans text-green-700">
                <strong>What questions does your website seek to answer?</strong>
              </p>
              <p class="relative font-sans text-green-700">
                <strong>What content and materials do you already have and what do you still need?</strong>
              </p>

              <p>After an initial interview, we will discuss the sitemap and wireframe. This is the basic structure of the website, the skeleton of what's to come.</p>

              <p>At the end of a project, I will provide you with a comprehensive sitemap, a wireframe, and a full design complete with font selection, color scheme, image and copy placement suggestions, as well as directives of functionality. This will be provided in a PDF format for the sake of cross-platform legibility and printability. Raw design files can be provided upon request.</p>
            </div>
            <!-- Illustration Column -->
            <div class="column relative w-full lg:w-1/2 order-1 lg:order-2 px-8 lg:px-16 my-8 z-0">
              <div
                class="blob-wrap absolute inset-0"
                v-rellax="{
                  speed: -1,
                  center: true
                }"
              >
                <blob-design
                  class="absolute text-green-400 w-full h-auto z-0"
                  style="top: 50%; right: 0; transform: translateY(-30%) scale(2.3); opacity: 0.15;"
                />
              </div>
              <div class="svg-wrap relative">
                <innovator class="w-full text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Static Web Development -->
      <section id="static-web-development" class="py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <!-- Illustration Column -->
            <div class="column relative w-full lg:w-1/2 px-8 lg:px-16 my-8 z-0">
              <div
                class="blob-wrap absolute inset-0"
                v-rellax="{
                  speed: -1,
                  center: true
                }"
              >
                <blob-static
                  class="absolute text-green-400 w-full h-auto z-0"
                  style="top: 50%; left: 0; transform: translateY(-60%) translateX(-10%) scale(2); opacity: 0.15;"
                />
              </div>
              <div class="svg-wrap relative">
                <coder class="w-full text-green-600" />
              </div>
            </div>
            <!-- Content -->
            <div class="content column w-full lg:w-1/2 lg:pr-8">
              <h2>Static Web Development</h2>
              <p>For a this service, I ask that you provide a completed web design either from me or from another vender. All content ( i.e. images, copy, fonts, etc) will need to be provided ahead of time. A static website refers to the content being fairly locked in barring any knowledge of development on behalf of the client. This is a good solution for anyone looking for a simple brochure website where they will not have to touch the content much in the future.</p>

              <p>The benefit of a static website is that a completely custom design can be developed fairly quickly. This saves all parties time and money. In my experience a lot of clients like the idea of editing their own content in a CMS, but when it comes time for copy changes to be made just end up hiring someone to fill it in for them. If you are in the need of a custom website, a statically developed project is the most cost effective option.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CMS Integration -->
      <section id="cms-integration" class="py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <!-- Illustration Column -->
            <div class="column relative w-full lg:w-1/2 order-1 lg:order-2 px-8 lg:px-16 my-8 z-0">
              <div
                class="blob-wrap absolute inset-0"
                v-rellax="{
                  speed: -1,
                  center: true
                }"
              >
                <blob-cms
                  class="absolute text-green-400 w-full h-auto z-0"
                  style="top: 50%; right: 0; transform: translateY(-60%) translateX(10%) scale(2.3); opacity: 0.15;"
                />
              </div>
              <div class="svg-wrap relative">
                <selecting class="w-full text-green-600" />
              </div>
            </div>
            <!-- Content -->
            <div class="column content relative order-2 lg:order-1 w-full lg:w-1/2 lg:pr-8">
              <h2>CMS Integration</h2>
              <p>In order to briefly provide context, a CMS or Content Management System is a platform that allows a user to control their content, be that writing copy, adding images, or managing simple layouts. Essentially, I make your custom website editable. I have a good deal of experience in my career integrating custom designs into popular CMS platforms. I have completed projects primarily in WordPress and Craft CMS.</p>
              <p>
                If you are still in search of the best platform for you, there are many CMS options out there that fit different needs. Some of my favorite include
                <a
                  href="https://statamic.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                >Statamic</a> and
                <a
                  href="https://craftcms.com/"
                  target="_blank"
                  rel="nofollow noreferrer"
                >Craft CMS</a>. What is important is that you find a CMS that works best for you and your budget.
              </p>
              <p>CMS integration is a bit more time intensive, and is therefore a more expensive service. However, at the end you will have a website with a dynamic backend that allows you to completely control your content with almost zero knowledge of coding on your part.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Web Management -->
      <section id="web-management" class="py-8 lg:py-16">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <!-- Illustration Column -->
            <div class="column relative w-full lg:w-1/2 px-8 lg:px-16 my-8 z-0">
              <div
                class="blob-wrap absolute inset-0"
                v-rellax="{
                  speed: -1,
                  center: true
                }"
              >
                <blob-management
                  class="absolute text-green-400 w-full h-auto z-0"
                  style="top: 50%; left: 0; transform: translateY(-30%) translateX(-20%) scale(2); opacity: 0.15;"
                />
              </div>
              <div class="svg-wrap relative">
                <management class="w-full text-green-600" />
              </div>
            </div>
            <!-- Content -->
            <div class="content column w-full lg:w-1/2 lg:pr-8">
              <h2>Web Management</h2>
              <p>If you want your website up and running without having to worry about hosting, setting up an SSL, making backups, or any other headaches that can pop up, I offer web management services. For a monthly fee, I will manage your website. This includes hosting on a secure server with recurring backups as well as making small content changes for no extra charge.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Callout -->
      <section class="relative py-8 lg:py-16">
        <div class="container">
          <div class="flex justify-center">
            <div class="w-full lg:w-1/2">
              <h2 class="text-center">Would you like to know more?</h2>
              <p
                class="text-center mb-6"
              >I'm sure you have plenty of questions and I am more than happy to answer them.</p>
              <p class="text-center">
                <g-link to="/contact" class="button bg-red-600 text-red-100">Get in Touch</g-link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<script>
import Hero from "~/components/HeroSmall";

// Vectors
import BlobDesign from "~/assets/svgs/blob-design.svg";
import BlobStatic from "~/assets/svgs/blob-static.svg";
import BlobCms from "~/assets/svgs/blob-cms.svg";
import BlobManagement from "~/assets/svgs/blob-services.svg";

import Innovator from "~/assets/svgs/undraw_innovative_b409.svg";
import Coder from "~/assets/svgs/undraw_code_review_l1q9.svg";
import Selecting from "~/assets/svgs/undraw_selecting_1lx3.svg";
import Management from "~/assets/svgs/undraw_safe_bnk7.svg";

export default {
  metaInfo: {
    title: "Services.",
    meta: [
      {
        name: "description",
        content:
          "I have a good deal of experience working on websites, from the simple to the hugely scalable. My goal is to use this platform to provide quality digital work for my community."
      },
      // Open Graph
      {
        property: "og:title",
        content: "Services. ← Kyle Rodgers"
      },
      { property: "og:site_name", content: "Kyle Rodgers Portfolio" },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: "https://kylerodgers.me/services"
      },
      {
        property: "og:image",
        content:
          "https://kylerodgers.me/assets/static/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.2665e34.f49e64e7789e5328dd0ad2cc37236ed8.jpg"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content:
          "I have a good deal of experience working on websites, from the simple to the hugely scalable. My goal is to use this platform to provide quality digital work for my community."
      },
      // Twitter card
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:site",
        content: "https://kylerodgers.me/services"
      },
      {
        name: "twitter:title",
        content: "Services. ← Kyle Rodgers"
      },
      {
        name: "twitter:description",
        content:
          "I have a good deal of experience working on websites, from the simple to the hugely scalable. My goal is to use this platform to provide quality digital work for my community."
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
        content: "Services. ← Kyle Rodgers"
      },
      {
        itemprop: "description",
        content:
          "I have a good deal of experience working on websites, from the simple to the hugely scalable. My goal is to use this platform to provide quality digital work for my community."
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
    BlobDesign,
    BlobStatic,
    BlobCms,
    BlobManagement,
    Innovator,
    Coder,
    Selecting,
    Management
  }
};
</script>

<style>
.small-underline::before {
  content: "";
  @apply absolute left-0 w-12 border-green-500 border-b-4 opacity-25;
  top: 125%;
}
</style>