<script setup lang="ts"></script>

<template>
  <section class="Videos">
    <video autoplay muted loop width="713" height="1000">
      <source src="/video/Videos.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<style lang="scss">
.Videos {
  padding: 0 var(--inline-offset);
  background-color: #202020;
  video {
    margin: 0 auto;
    width: -webkit-fill-available;
  }
}
</style>
