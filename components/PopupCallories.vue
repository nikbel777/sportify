<script lang="ts" setup>
export interface IPopupCalloriesProps {
  data: {
    callories: number;
    callories_for_skinny: number;
    callories_for_fat: number;
  };
}

var props = defineProps<IPopupCalloriesProps>();
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
  <div class="PopupCallories" @click.self="closePopup">
    <form class="PopupCallories__form" :class="{ PopupCallories__form_hidden: is_popup_hidden }">
      <div class="PopupCallories__btnClose" @click="closePopup"></div>

      <div class="PopupCallories__answer">
        <div class="PopupCallories__answerContent">
          <div class="PopupCallories__answerContentItem">
            <p class="PopupCallories__answerContentP">
              Количество калорий для сохранения текущего веса:
            </p>
            <p class="PopupCallories__answerContentCallories">
              {{ Math.round(data.callories as number) }} калорий/день
            </p>
          </div>
          <div class="PopupCallories__answerContentItem">
            <p class="PopupCallories__answerContentP">Количество калорий для похудения:</p>
            <p class="PopupCallories__answerContentCallories">
              {{ Math.round(data.callories_for_skinny as number) }} калорий/день
            </p>
          </div>
          <div class="PopupCallories__answerContentItem">
            <p class="PopupCallories__answerContentP">Количество калорий для набора веса:</p>
            <p class="PopupCallories__answerContentCallories">
              {{ Math.round(data.callories_for_fat as number) }} калорий/день
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.PopupCallories {
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

.PopupCallories__form {
  position: relative;
  max-width: min-content;
  padding: 50px 30px;
  max-width: 557px;

  background: #2e2e2e;
  animation: PopupCallories__form 400ms ease-out;
  border-radius: 40px;
  background-color: white;
  max-height: 90vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}

.PopupCallories__btnClose {
  position: absolute;
  right: 30px;
  top: 20px;
  width: 32px;
  height: 32px;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.PopupCallories__btnClose:hover {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}
.PopupCallories__btnClose:before,
.PopupCallories__btnClose:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #2e2e2e;
}
.PopupCallories__btnClose:before {
  transform: rotate(45deg);
}
.PopupCallories__btnClose:after {
  transform: rotate(-45deg);
}

@keyframes PopupCallories__form {
  from {
    transform: translate3d(0, 100vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.PopupCallories__form_hidden {
  transform: translate3d(0, 100vh, 0);
  animation: PopupCallories__form_hidden 400ms ease-out;
}

@keyframes PopupCallories__form_hidden {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 100vh, 0);
  }
}

.PopupCallories__answerP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;

  color: #92918e;
  margin-bottom: 20px;
}

.PopupCallories__answerContent {
  display: flex;
  flex-direction: column;
  gap: 30px;
  // opacity: 0;
  transition: opacity 0.5s linear;
}

.PopupCallories__answerContentP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;

  color: #202020;
  margin-bottom: 10px;
}

.PopupCallories__answerContentCallories {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;

  color: #202020;
}

@media screen and (max-width: 1170px) {
  .PopupCallories {
    padding: 0 35px;
  }

  .PopupCallories__btnClose {
    top: 15px;
    right: 15px;
  }
}

@media screen and (max-width: 740px) {
  .PopupCallories__form {
    padding: 50px 20px;
  }
}

@media screen and (max-width: 740px) {
  .PopupCallories {
    padding: 0 16px;
  }

  .PopupCallories__answerContentP {
    font-size: 16px;
  }

  .PopupCallories__answerContentCallories {
    font-size: 30px;
  }
}
</style>
