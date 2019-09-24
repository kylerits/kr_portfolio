<template>
  <header class="absolute top-0 left-0 w-full z-50">
    <div class="container mx-auto">
      <div class="flex justify-between align-center py-2 text-indigo-400">
        <a href="/" class="logo-wrap">
          <logo class="w-10 h-10" />
        </a>

        <nav class="flex align-center">
          <g-link to="/projects" class="inline-block px-3 py-1 hover:text-indigo-500">Projects</g-link>
          <g-link to="/services" class="inline-block px-3 py-1 hover:text-indigo-500">Services</g-link>
          <g-link to="/about" class="inline-block px-3 py-1 hover:text-indigo-500">About</g-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from "~/assets/svgs/logo.svg";

export default {
  components: {
    Logo
  }
};
</script>