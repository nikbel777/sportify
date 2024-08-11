<script setup lang="ts">
var array_rewievs = [
  {
    scr: "/img/rewievs.png",
    title: "Милана Волкова",
    description:
      "Sportify&nbsp;&mdash; это идеальное приложение для всех любителей спорта и&nbsp;здорового образа жизни! Удобный интерфейс, огромный выбор тренировок и&nbsp;музыки, персонализированные рекомендации&nbsp;&mdash; все это делает Sportify моим незаменимым спутником в&nbsp;тренировках. Благодаря этому приложению я&nbsp;чувствую себя мотивированным и&nbsp;готовым к&nbsp;новым достижениям!",
  },
  {
    scr: "/img/reviews.webp",
    title: "Никита Беляев",
    description:
      "Я&nbsp;был очень доволен услугой в&nbsp;сфере спорта, которую я&nbsp;недавно использовал. Это было удивительно видеть, как профессионалы в&nbsp;этой области могут помочь людям достичь своих целей и&nbsp;преодолевать свои границы. Я&nbsp;получил индивидуальную программу тренировок, которая была разработана специально для меня и&nbsp;моих нужд.",
  },
  {
    scr: "/img/rewievs.png",
    title: "Екатерина Ягодникова",
    description:
      "Sportify&nbsp;&mdash; это идеальное приложение для всех любителей спорта и&nbsp;здорового образа жизни! Удобный интерфейс, огромный выбор тренировок и&nbsp;музыки, персонализированные рекомендации&nbsp;&mdash; все это делает Sportify моим незаменимым спутником в&nbsp;тренировках. Благодаря этому приложению я&nbsp;чувствую себя мотивированным и&nbsp;готовым к&nbsp;новым достижениям!",
  },
];

var idx_rewiev = ref(0);
</script>

<template>
  <section class="Reviews">
    <div class="Reviews__wrapper">
      <div class="Reviews__imgBg"></div>
      <h5 class="Reviews__h5" id="reviews">Отзывы</h5>
      <div class="Reviews__contentWrapper">
        <button
          class="Reviews__informationBtn prev btn_mob"
          :class="{ disabled_btn: idx_rewiev === 0 }"
          :disabled="idx_rewiev === 0"
          @click="idx_rewiev--"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            fill="#92918e"
            style="transform: rotate(-180deg)"
          >
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </button>
        <div
          class="Reviews__content"
          v-for="(rewiev, idx) in array_rewievs"
          :class="{ is_visible: idx === idx_rewiev }"
        >
          <div class="Reviews__img">
            <img :src="rewiev.scr" alt="" width="550" height="550" />
          </div>
          <div class="Reviews__information">
            <p class="Reviews__informationTitle">{{ rewiev.title }}</p>
            <p class="Reviews__informationP" v-html="rewiev.description"></p>
          </div>
        </div>

        <button
          class="Reviews__informationBtn next btn_mob"
          :class="{ disabled_btn: idx_rewiev === array_rewievs.length - 1 }"
          :disabled="idx_rewiev === array_rewievs.length - 1"
          @click="idx_rewiev++"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            fill="#92918e"
          >
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </button>
      </div>

      <div class="Reviews__informationBtns btn_des">
        <button
          class="Reviews__informationBtn prev"
          :class="{ disabled_btn: idx_rewiev === 0 }"
          :disabled="idx_rewiev === 0"
          @click="idx_rewiev--"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            fill="#92918e"
            style="transform: rotate(-180deg)"
          >
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </button>
        <button
          class="Reviews__informationBtn next"
          :class="{ disabled_btn: idx_rewiev === array_rewievs.length - 1 }"
          :disabled="idx_rewiev === array_rewievs.length - 1"
          @click="idx_rewiev++"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            fill="#92918e"
          >
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.Reviews {
  padding: 200px 0;
  background-color: #202020;
}
.Reviews__wrapper {
  margin: 0 var(--inline-offset);
  position: relative;
}

.btn_mob {
  display: none;
}

.btn_des {
}

.Reviews__imgBg {
  height: 530px;
  width: 850px;
  background-color: white;
  position: absolute;
  left: -260px;
  bottom: 0;
  border-radius: 20px;
}

.Reviews__h5 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 150%;

  color: #f5f5f5;
}

.Reviews__contentWrapper {
  position: relative;
  height: 550px;
}

.Reviews__content {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  opacity: 0;
  transition: opacity 0.2s linear;
}
.is_visible {
  opacity: 1;
  transition: opacity 0.2s linear;
}
.Reviews__img {
  width: 550px;
}

.Reviews__information {
  max-width: 608px;
  width: 100%;
}

.Reviews__informationTitle {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 100%;

  color: #ffffff;
  margin-bottom: 30px;
}
.Reviews__informationP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;

  color: #92918e;
}

.Reviews__informationBtns {
  display: flex;
  gap: 40px;
  justify-content: flex-end;
  margin-top: 80px;
}

.Reviews__informationBtn {
  border-radius: 15px;
  border: 1px solid #92918e;
  background-color: inherit;
  padding: 15px 45px;

  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #92918e;
    svg {
      fill: #202020;
    }
  }
}

.disabled_btn {
  opacity: 0.4;
  cursor: not-allowed;
  &:hover {
    color: #92918e;
    background-color: inherit;
    svg {
      fill: #92918e;
    }
  }
}

@media (max-width: 1170px) {
  .Reviews__h5 {
    font-size: 70px;
  }
  .btn_mob {
    display: block;
  }

  .btn_des {
    display: none;
  }
  .Reviews__imgBg {
    display: none;
  }

  .Reviews__img {
    width: 350px;
    height: 350px;
    img {
      width: 100%;
      height: 350px;
    }
  }
  .Reviews__contentWrapper {
    height: auto;
    height: 930px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Reviews__content {
    width: 350px;
    margin: 0 auto;
    display: block;
  }

  .Reviews__information {
    margin-top: 40px;
  }

  .is_visible {
    opacity: 1;
    transition: opacity 0.2s linear;
  }
}

@media (max-width: 740px) {
  .Reviews {
    padding: 70px 0;
  }
  .Reviews__h5 {
    font-size: 44px;
    line-height: 100%;
    margin-bottom: 40px;
  }
  .Reviews__informationTitle {
    font-size: 25px;
    margin-bottom: 15px;
  }
  .Reviews__informationP {
    font-size: 14px;
  }
  .Reviews__informationBtn {
    padding: 10px 15px;
  }

  .Reviews__img {
    width: 280px;
    height: 280px;
    img {
      width: 100%;
      height: 280px;
    }
  }
  .Reviews__contentWrapper {
    height: 640px;
  }
  .Reviews__content {
    width: 280px;
  }
}

@media (max-width: 500px) {
  .Reviews__informationBtn {
    display: flex;
    align-items: center;
    padding: 10px;
    svg {
      width: 10px;
      height: 10px;
    }

  }
}


@media (max-width: 410px) {
  .Reviews__informationTitle {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .Reviews__informationP {
    font-size: 12px;
  }
  .Reviews__img {
    width: 240px;
    height: 240px;
    img {
      width: 100%;
      height: 240px;
    }
  }
  .Reviews__contentWrapper {
    height: 575px;
  }
  .Reviews__content {
    width: 240px;
  }
}
</style>
