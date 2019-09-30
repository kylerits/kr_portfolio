<template>
  <div id="mainNav" class="fixed right-0 bottom-0 mr-12 mb-12 z-50">
    <nav
      class="absolute right-0 font-bold flex flex-col justify-around"
      style="bottom: 100%; height: 80vh;"
      v-if="isVisible"
    >
      <g-link to="/services" class="nav-item">Services</g-link>
      <g-link to="/about" class="nav-item">About</g-link>
      <g-link to="/projects" class="nav-item">Projects</g-link>
      <g-link to="/contact" class="nav-item">Contact</g-link>
    </nav>
    <button
      id="showNav"
      class="relative p-3 bg-red-700 text-red-200 shadow-lg outline-none"
      @click="isVisible = !isVisible"
    >show</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    };
  }
};
</script>

<style>
.nav-item {
  @apply relative block text-2xl;
  width: 12rem;
}

.nav-item::after {
  content: "";
  @apply absolute right-0 border-green-600 border-b;
  width: 100%;
  top: 50%;
}
</style>