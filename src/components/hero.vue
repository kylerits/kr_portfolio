<template>
  <section id="hero" class="relative w-full lg:min-h-part">
    <div class="hero-bg absolute inset-0 bg-indigo-800 overflow-hidden">
      <g-image
        src="~/assets/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"
        class="object-center object-cover w-100 h-100"
        alt="woods"
      />
      <div class="hero-bg-overlay absolute inset-0">
        <div class="stripe one"></div>
        <div class="stripe two"></div>
        <div class="stripe three"></div>
        <div class="stripe four"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  title: "Hero"
};
</script>

<style>
.hero-bg-overlay {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
.stripe {
  @apply w-full h-full bg-indigo-600 opacity-75;
  transform: scale(3, 1) skewY(50deg);
  backdrop-filter: blur(5px);
}
.stripe.one {
  grid-column-start: 2;
  grid-row-start: 1;
}
.stripe.two {
  grid-column-start: 5;
  grid-row-start: 2;
}
.stripe.three {
  grid-column-start: 3;
  grid-row-start: 3;
}
.stripe.four {
  grid-column-start: 2;
  grid-row-start: 4;
}
</style>