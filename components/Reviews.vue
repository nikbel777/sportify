<script setup lang="ts">
var array_rewievs = [
  {
    scr: "/img/kalinin.jpg",
    title: "Даниил Калинин",
    description:
      "Sportify изменил мой подход к тренировкам! Я всегда искал удобный способ заниматься дома, и этот проект стал для меня настоящей находкой. Тренировки разнообразные и мотивирующие, а поддержка сообщества просто невероятная. Я чувствую себя частью чего-то большего и вдохновлена достигать новых целей. Спасибо, Sportify, за то, что помогаете мне стать лучше!",
  },
  {
    scr: "/img/rabina.jpg",
    title: "Рябинова Диана",
    description:
      "Sportify стал для меня настоящей находкой! Я занимаюсь в домашних условиях и радуюсь, что могу выбрать тренировки прямо под своё настроение. Тренеры не только профессионалы, но и отличные motivators, которые помогают оставаться на пути к цели. Личное пространство и возможность выбора - то, что мне так нужно. Весьма рекомендую тем, кто хочет активно заниматься, не выходя из дома.",
  },
  {
    scr: "/img/krotov.jpg",
    title: "Кротов Дмитрий",
    description:
      "Я только недавно начал заниматься с Sportify, и меня просто захватило! Платформа предлагает огромное разнообразие тренировок на любой вкус. Тренеры профессиональные, а их советы действительно помогают достигать поставленных целей. Важно, что могу заниматься в любое время, что идеально вписывается в мой загруженный график. Рекомендую всем, кто хочет привести себя в форму!",
  },
  {
    scr: "/img/volkova.jpg",
    title: "Волкова Анастасия",
    description:
      "Я начала заниматься с Sportify около трех месяцев назад, и результаты просто потрясающие! Удобный интерфейс, разнообразные тренировки и возможность заниматься в любое время делают этот проект незаменимым для меня. Особенно нравится, что есть тренировки для всех уровней — от новичков до продвинутых. Рекомендую всем, кто хочет улучшить свою физическую форму!",
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
    height: 960px;
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
    height: 660px;
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
