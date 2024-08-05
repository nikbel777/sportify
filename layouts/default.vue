<script setup lang="ts">
// var config = useRuntimeConfig()
import type { IPopupFormProps } from "@/components/PopupForm.vue";
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore
</script>

<template>
  <Header />
  <main id="main">
    <slot />
  </main>
  <Footer />
  <PopupForm v-if="popup_form_props" v-bind="popup_form_props" @close="popup_form_props = null" />
</template>

<style lang="scss">
.default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
