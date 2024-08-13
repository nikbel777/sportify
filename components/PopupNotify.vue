<script lang="ts" setup>
export interface IPopupNotifyProps {
  text_header?: string;
  text_content?: string;
  text_btn?: string;
  status?: "succes" | "error";
  max_width?: number;
}

defineProps<IPopupNotifyProps>();
var emit = defineEmits(["close"]);

var is_popup_hidden = ref(false);

var closePopup = () => {
  setTimeout(() => {
    emit("close");
  }, 400);
  is_popup_hidden.value = true;
};

usePopup(closePopup);
</script>

<template>
  <div class="PopupNotify" @click.self="closePopup">
    <div class="PopupNotify__form" :class="{ PopupNotify__content_hidden: is_popup_hidden }">
      <div class="PopupCallories__btnClose" @click="closePopup"></div>
      <div class="PopupNotify__iconSucces" v-if="status === 'succes'">
        <svg
          width="50"
          height="50"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2189 23.094L6.62489 16.5C6.35422 16.2294 6.03122 16.146 5.65589 16.25C5.28056 16.354 5.04622 16.5884 4.95289 16.953C4.85956 17.3177 4.94822 17.6457 5.21889 17.937L13.2189 25.937L29.2189 9.93702C29.4062 9.72835 29.4949 9.48868 29.4849 9.21802C29.4749 8.94735 29.3706 8.71302 29.1719 8.51502C28.9732 8.31702 28.7439 8.21802 28.4839 8.21802C28.2239 8.21802 27.9896 8.31168 27.7809 8.49902L13.2189 23.094Z"
            fill="black"
          />
        </svg>
      </div>
      <div
        class="PopupNotify__content"
        :class="{ PopupNotify__content_hidden: is_popup_hidden }"
        :style="{ 'max-width': max_width }"
      >
        <div class="PopupNotify__iconError" v-if="status === 'error'"></div>

        <h5 v-if="text_header" class="PopupNotify__h5" v-html="text_header"></h5>

        <p class="PopupNotify__p" v-if="text_content" v-html="text_content"></p>

        <button v-if="text_btn" class="PopupNotify__btn" color="red-12" @click="closePopup">
          {{ text_btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.PopupNotify {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 6000;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 70px;
  padding-right: 70px;
}

.PopupNotify__form {
  position: relative;
  max-width: min-content;
  padding: 50px 30px;
  max-width: 557px;

  background: #2e2e2e;
  animation: PopupNotify__content 400ms ease-out;
  border-radius: 40px;
  background-color: white;
  max-height: 90vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.PopupNotify__content {
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  display: flex;
  background-color: #ffffff;
  border-radius: 15px;

  max-height: 90vh;
  overflow: auto;
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */

  // &::-webkit-scrollbar {
  //   display: none;
  // }
  will-change: transform;
  animation: PopupNotify__content 250ms ease-out;
  transform: translate3d(0, 0, 0);
}

@keyframes PopupNotify__content {
  from {
    transform: translate3d(0, 105vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.PopupNotify__content_hidden {
  animation: PopupNotify__content_hidden 250ms ease-out;
  transform: translate3d(100vw, 0, 0);
}

@keyframes PopupNotify__content_hidden {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(100vw, 0, 0);
  }
}

.PopupNotify__iconSucces {
  // &-icon {
  //   display: block;
  //   width: 40px;
  //   height: 40px;
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   // background-image: url("data:image/svg+xml;utf8," + $i_check_primary);
  // }
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  // border: 2px solid green;
  // border-radius: 50%;
  // padding: 15px;
}

.PopupNotify__iconError {
  width: 40px;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  //   background-image: url("data:image/svg+xml;utf8," + $i_close_white);
  background-size: 30px;
  background-color: rgb(226, 69, 69);
}

.PopupNotify__h5 {
  //   @include setFontStyle8();
  margin: 0 0 30px 0;
}

.PopupNotify__p {
  //   @include setFontStyle7();
  color: #171a21;
  text-align: center;
  /* text / lead / default */
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  line-height: 25px; /* 138.889% */

  text-align: center;
  margin-bottom: 20px;
}

.PopupNotify__btn {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;

  color: #92918e;
  text-align: center;
  max-width: 350px;
  width: 100%;
  border-radius: 5px;
  padding: 10px 0px;
  border: 1px solid #92918e;
  // outline: none;
  background-color: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #92918e;
    background-color: #202020;
  }
}

@media screen and (max-width: 740px) {
  .PopupNotify {
    padding: 0 var(--inline-offset);
  }
  .PopupNotify__form {
    padding: 10px;
    padding-top: 20px;
  }
  .PopupNotify__content {
    padding: 20px 0;
    margin: 0 16px;
  }
}
</style>
