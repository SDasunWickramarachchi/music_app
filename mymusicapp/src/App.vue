<template>
  <div >
      <app-navbar></app-navbar>
      <app-home></app-home>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Prevent content from hiding behind fixed navbar */
body {
  padding-top: 70px;
}

/* Optional: Ensure no default margin causes layout shift */
* {
  margin: 0;
  box-sizing: border-box;
}
</style>
 