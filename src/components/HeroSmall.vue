<template>
  <section id="hero" class="relative w-full flex items-center justify-start">
    <!-- Background -->
    <div class="hero-bg absolute inset-0 w-full h-full bg-indigo-800">
      <g-image
        src="~/assets/images/conifer-dawn-daylight-2929244.jpg"
        class="object-center object-cover w-full h-full"
        alt="woods"
      />
      <div class="hero-bg-overlay absolute inset-0">
        <div class="stripe one"></div>
        <div class="stripe two"></div>
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
  title: "Hero Small"
};
</script>

<style scoped>
.hero-bg-overlay {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), white);
  /* background: var(--color-indigo-50); */
  /* background: linear-gradient(
    to bottom,
    var(--color-indigo-25),
    var(--color-indigo)
  ); */
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
  grid-column-start: 4;
  grid-row-start: 1;
}
.stripe.two {
  grid-column-start: 5;
  grid-row-start: 2;
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