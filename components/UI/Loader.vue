<template>
  <div class="Loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss">
.Loader {
  // display: block;
  // position: relative;
  // width: 80px;
  // height: 80px;
  // margin: 100px auto;
}

.Loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid white;
  border-radius: 50%;
  animation: Loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: white transparent transparent transparent;
}

.Loader div:nth-child(1) {
  animation-delay: -0.45s;
}

.Loader div:nth-child(2) {
  animation-delay: -0.3s;
}

.Loader div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes Loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 640px) {
  .Loader {
    margin: 40px auto;
  }
}
</style>
