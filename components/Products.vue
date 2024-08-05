<script setup lang="ts">
import type { IPopupFormProps } from "@/components/PopupForm.vue";
var popup_form_props = useState<IPopupFormProps | null>("popup_form_props", () => null); //prettier-ignore

const clickCardBtn = () => {
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

var array_products = [
  {
    src: "/img/Product1.png",
    title_img: "Индивидуальная программа питания на месяц",
    cost: "1490",
  },
  {
    src: "/img/Product2.png",
    title_img: "Разовая тренировка",
    cost: "390",
  },
  {
    src: "/img/Product3.png",
    title_img: "Программа тренировок на месяц",
    cost: "от 3500",
  },
  {
    src: "/img/Product4.png",
    title_img: "Программа тренировок с питанием",
    cost: "от 5000",
  },
  // {
  //   src: "/img/Product1.png",
  //   title_img: "Индивидуальная программа питания на месяц",
  //   cost: "1490",
  // },
];
</script>

<template>
  <section class="Products">
    <h5 class="Products__h5">Услуги</h5>

    <div class="Products__Cards" v-grabscroll>
      <div class="Products__Card" v-for="product in array_products">
        <div class="Products__CardImg">
          <img :src="product.src" alt="" width="450" height="450" />
          <p class="Products__CardImgP">{{ product.title_img }}</p>
        </div>
        <div class="Products__CardCost">
          <p class="Products__CardCostP">Цена</p>
          <p class="Products__CardCostPrice">{{ product.cost }} ₽</p>
        </div>
        <button class="Products__CardButton" @click="clickCardBtn()">Купить</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.Products {
  padding:0 0 200px 0;
  background-color: #202020;
}
.Products__h5 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;
  padding: 0 var(--inline-offset);

  color: #f5f5f5;
  margin-bottom: 30px;
}

.Products__Cards {
  display: flex;
  gap: 40px;
  width: 100%;
  padding: 0 var(--inline-offset);
  overflow: auto;
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}

.Products__CardImg {
  position: relative;
  margin-bottom: 40px;
  width: 450px;
  img {
    width: 100%;
    height: auto;
  }
}

.Products__CardImgP {
  position: absolute;
  top: 20px;
  left: 20px;

  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;

  color: #f5f5f5;
}

.Products__CardCostP {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 100%;
  color: #f5f5f5;
  margin-bottom: 20px;
}

.Products__CardCostPrice {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100%;

  color: #f5f5f5;
  margin-bottom: 10px;
}

.Products__CardButton {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;

  color: #92918e;
  text-align: center;
  width: 100%;
  border-radius: 20px;
  padding: 10px 0px;
  border: 1px solid #92918e;

  background-color: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #202020;
    background-color: #92918e;
  }
}
</style>
