<template>
  <section
    id="hero"
    class="relative text-indigo-800 w-full md:min-h-part flex items-center justify-start"
  >
    <!-- Background -->
    <div class="hero-bg absolute inset-0 w-full h-full bg-indigo-800 overflow-hidden">
      <g-image
        src="~/assets/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"
        class="object-center object-cover w-full"
        style="height: 150%;"
        v-rellax="{
          speed: -3,
          center: true
        }"
        alt="woods"
      />
      <div class="hero-bg-overlay absolute inset-0 w-full h-full">
        <!-- <div class="stripe one"></div>
        <div class="stripe two"></div>
        <div class="stripe three"></div>-->
      </div>
    </div>

    <!-- Content -->
    <div class="relative container">
      <div class="relative lg:w-2/3 py-24">
        <slot></slot>
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
  grid-template-rows: repeat(3, 1fr);
  background: linear-gradient(to bottom, rgba(97, 87, 87, 0.3), white);
}

.stripe {
  @apply w-full h-full;
  /* background: linear-gradient(
    to right,
    transparent,
    var(--color-indigo) 50%,
    transparent
  ); */
  background: var(--color-green-50);
  transform: scale(3, 1) skewY(-50deg);
  backdrop-filter: blur(5px);
}
.stripe.red {
  background: linear-gradient(
    to right,
    transparent,
    var(--color-red) 50%,
    transparent
  );
}
.stripe.green {
  background: var(--color-green-50);
}
.stripe.one {
  grid-column-start: 3;
  grid-row-start: 1;
}
.stripe.two {
  grid-column-start: 5;
  grid-row-start: 3;
}
.stripe.three {
  grid-column-start: 2;
  grid-row-start: 3;
}
.stripe.four {
  grid-column-start: 5;
  grid-row-start: 1;
}
.stripe.five {
  grid-column-start: 3;
  grid-row-start: 5;
}
.stripe.six {
  grid-column-start: 6;
  grid-row-start: 5;
}
</style>