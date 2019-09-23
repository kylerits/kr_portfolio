<template>
  <div class="layout">
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>-->
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
:root {
  --color-gray: #718096;
  --color-red: #ec5b62;
  --color-green: #6b9686;
  --color-indigo: #3b4a4d;
}
body {
  @apply bg-indigo-800;
}
</style>
