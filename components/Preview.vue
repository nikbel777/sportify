<script setup lang="ts">
import type { IPopupFormProps } from "@/components/PopupForm.vue";
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

const clickPreview = () => {
  ymReachGoal("open_detail-card_plan_order");
  popup_form_props.value = {
    data: {
      text_header: `Оставить заявку`,
      text_content:
        "Укажите имя и телефон, мы свяжемся и ответим на все ваши интересующие вопросы.",
      text_btn: `Оставить заявку`,
      lead_title: `уалейкум асалам (из описания квартиры)`,
      cbSuccessFetch() {
        ymReachGoal("send_detail-card_plan_order");
      },
    },
  };
};
</script>

<template>
  <section class="Preview">
    <div class="Preview__img">
      <img src="/img/prewiev.png" alt="" srcset="" />
    </div>
    <div class="Preview__content">
      <h4 class="Preview__contentH4">Присоединяйся к нам</h4>
      <p class="Preview__contentP">
        Достигай своих спортивных целей вместе со&nbsp;Sportify. Sportify-будь на&nbsp;одной волне
        со&nbsp;спортом
      </p>
      <button class="Preview__contentBtn" @click="clickPreview()">Оставить заявку</button>
    </div>
  </section>
</template>

<style lang="scss">
.Preview {
  position: relative;
  width: 100%;
}
.Preview__img {
  position: absolute;
  inset: 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.Preview__content {
  position: relative;
  // z-index: 12321;
  padding: 200px var(--inline-offset) 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Preview__contentH4 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;

  color: #f5f5f5;

  margin-bottom: 45px;
}

.Preview__contentP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #f5f5f5;

  margin-bottom: 45px;
}

.Preview__contentBtn {
  padding: 8px 0;
  max-width: 450px;
  width: 100%;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;

  color: #202020;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #92918e;
    background-color: #202020;
  }
}
</style>
