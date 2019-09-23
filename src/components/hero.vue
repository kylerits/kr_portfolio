<template>
  <section id="hero" class="relative w-full min-h-part">
    <div class="hero-bg absolute inset-0 w-full h-full bg-indigo-800">
      <g-image
        src="~/assets/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"
        class="object-center object-cover w-full h-full"
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background: linear-gradient(
    to bottom,
    var(--color-indigo-25),
    var(--color-indigo)
  );
}

@screen md {
  .hero-bg-overlay {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
}

@screen lg {
  .hero-bg-overlay {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
}

.stripe {
  @apply w-full h-full opacity-75;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-indigo) 50%,
    transparent
  );
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
  background: linear-gradient(
    to right,
    transparent,
    var(--color-green) 50%,
    transparent
  );
}
.stripe.one {
  grid-column-start: 2;
  grid-row-start: 1;
}
.stripe.two {
  grid-column-start: 4;
  grid-row-start: 1;
}
.stripe.three {
  grid-column-start: 3;
  grid-row-start: 3;
}
.stripe.four {
  grid-column-start: 4;
  grid-row-start: 4;
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