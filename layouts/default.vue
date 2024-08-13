<script setup lang="ts">
// var config = useRuntimeConfig()
import type { IPopupNotifyProps } from "@/components/Popup/PopupNotify.vue";
import type { IPopupFormProps } from "@/components/PopupForm.vue";

import type { IPopupCalloriesProps } from "@/components/PopupCallories.vue";

useHead({
  title: "Sportify - будь на одной волне со спортом",
  htmlAttrs: { lang: "ru" },
  link: [
    { rel:"icon", href:"icons/header_burger_logo.png", type:"image/x-icon" }, //prettier-ignore
  ],
});

var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

var popup_callories_props = useState<IPopupCalloriesProps | null>("popup_callories_props", () => null); //prettier-ignore

var popup_notify_props = useState<IPopupNotifyProps | null>("popup_notify_props", () => null); //prettier-ignore
</script>

<template>
  <Header />
  <main id="main">
    <slot />
  </main>
  <Footer />

  <PopupCallories
    v-if="popup_callories_props"
    v-bind="popup_callories_props"
    @close="popup_callories_props = null"
  />

  <PopupNotify
    v-if="popup_notify_props"
    v-bind="popup_notify_props"
    @close="popup_notify_props = null"
  />
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
