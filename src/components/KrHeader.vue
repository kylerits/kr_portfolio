<template>
  <header class="absolute top-0 left-0 w-full z-50">
    <div class="container mx-auto">
      <div class="flex justify-between align-center py-2 text-indigo-900">
        <a href="/" class="logo-wrap">
          <logo class="w-10 h-10" />
        </a>

        <main-nav />
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
import MainNav from "~/components/MainNav.vue";

export default {
  components: {
    Logo,
    MainNav
  }
};
</script>