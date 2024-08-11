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
  margin-top: -1px;
  padding: 0 var(--inline-offset);
  background-color: #202020;
  video {
    margin: 0 auto;
    width: -webkit-fill-available;
  }
}

@media (max-width: 740px) {
  .Videos {
    padding: 70px var(--inline-offset);
  }
}

@media (max-width: 600px) {
  .Videos {
    padding: 70px var(--inline-offset);
    video {
      height: auto;
      width: 100%;
    }
  }
}
</style>
