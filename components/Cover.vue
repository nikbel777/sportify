<script setup lang="ts">
import type { IPopupFormProps } from "@/components/PopupForm.vue";
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

const clickCoverBtn = () => {
  ymReachGoal("open_detail-card_plan_order");
  popup_form_props.value = {
    data: {
      text_header: `Оставить заявку`,
      text_content:
        "Укажите имя и телефон, мы свяжемся и ответим на все ваши интересующие вопросы.",
      text_btn: `Оставить заявку`,

    },
  };
};
</script>

<template>
  <section class="Cover">
    <h2 class="Cover__h2">Sportify - будь на одной волне со спортом</h2>
    <img class="Cover__img" src="/img/cover.JPG" alt="" srcset="" width="1400" height="760" />
    <div class="Cover__information">
      <div class="Cover__informationJoin">
        <h5 class="Cover__informationJoinH5">Присоединяйся к нам</h5>
        <button class="Cover__informationJoinBtn" @click="clickCoverBtn()">Оставить заявку</button>
        <a href="https://t.me/sport_ify" class="Cover__informationJoinBtn">Telegram</a>
      </div>
      <p class="Cover__informationP">
        Приглашаем вас на&nbsp;индивидуальные тренировки, где квалифицированные тренеры помогут вам
        достичь ваших фитнес-целей. Предлагаем персональные программы занятий, консультации по
        питанию и&nbsp;гибкий график занятий очного и&nbsp;онлайн формата, подходящий для вашего
        образа жизни.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.Cover {
  padding: 100px var(--inline-offset) 200px;
  background-color: #202020;
}

.Cover__h2 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 115%;

  color: #f5f5f5;
  margin-bottom: 60px;
  max-width: 1100px;
}

.Cover__img {
  border-radius: 35px;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
}

.Cover__information {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.Cover__informationJoin {
  display: grid;
  gap: 30px;
}

.Cover__informationJoinH5 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;

  color: #ffffff;
  white-space: nowrap;
}

.Cover__informationP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  color: #92918e;

  max-width: 654px;
}

.Cover__informationJoinBtn {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  text-align: center;

  color: #92918e;

  border-radius: 20px;
  border: 1px solid #92918e;
  padding: 8px 0;
  max-width: 450px;
  width: 100%;

  background-color: inherit;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #202020;
    background-color: #92918e;
  }
}

@media screen and (max-width: 1170px) {
  .Cover__h2 {
    font-size: 58px;
  }

  .Cover__information {
    flex-direction: column;
  }
  .Cover__informationJoin {
    order: 1;
  }
}

@media screen and (max-width: 740px) {
  .Cover {
    padding: 70px var(--inline-offset);
  }
  .Cover__h2 {
    font-size: 44px;
    margin-bottom: 40px;
  }
  .Cover__img {
    margin-bottom: 40px;
  }
  .Cover__informationJoinH5 {
    font-size: 30px;
  }
  .Cover__informationJoinBtn {
    font-size: 20px;
  }
  .Cover__informationP {
    font-size: 16px;
  }
}
</style>
