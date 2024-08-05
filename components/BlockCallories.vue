<script setup lang="ts">
interface IParams {
  gender: "man" | "woman";
  age: number | null;
  height: number | null;
  weight: number | null;
}

var select_loads = [
  {
    label: "Минимальная активность",
    active: 1.2,
  },
  {
    label: "1-3 тренировок в неделю",
    active: 1.375,
  },
  {
    label: "3-5 тренировок в неделю",
    active: 1.46,
  },
  {
    label: "5 интенсивных в неделю",
    active: 1.55,
  },
  {
    label: "Тренировки каждый день",
    active: 1.66,
  },
];

var load = ref<{ label: string; active: number }>({
  label: "",
  active: 0,
});

var params = ref<IParams>({
  gender: "man",
  age: null,
  height: null,
  weight: null,
});

const isNumber = (evt: Event) => {
  console.log(1);

  const input = evt.target as HTMLInputElement;
  const value = input.value;

  const sanitizedValue = value.replace(/\D+/g, "");

  input.value = sanitizedValue;
  console.log(input.value);
};

var is_disabled = computed(
  () => !(params.value.age && params.value.height && params.value.weight && load.value.active)
);

var callories = ref<number>(0);
var callories_for_skinny = ref<number>();
var callories_for_fat = ref<number>();

var calcCallories = () => {
  var number_for_gender = params.value.gender === "woman" ? -166 : 5;
  callories.value =
    ((params.value.weight as number) * 10 +
      (params.value.height as number) * 6.25 -
      (params.value.age as number) * 5 +
      number_for_gender) *
    load.value.active;

  callories_for_skinny.value = callories.value - (callories.value * 20) / 100;

  callories_for_fat.value = callories.value + (callories.value * 20) / 100;
};
</script>

<template>
  <section class="BlockCallories">
    <div class="BlockCallories__h5">Расчет калорий</div>
    <div class="BlockCallories__callories">
      <div class="BlockCallories__form">
        <div class="BlockCallories__parametr">
          <p class="BlockCallories__parametrLabel">Пол :</p>

          <div class="BlockCallories__parametrInputGender">
            <input type="radio" id="one" value="man" v-model="params.gender" />
            <p class="BlockCallories__parametrInputManP">мужской</p>
          </div>

          <div class="BlockCallories__parametrInputGender">
            <input type="radio" id="two" value="woman" v-model="params.gender" />
            <p class="BlockCallories__parametrInputManP">женский</p>
          </div>
        </div>

        <div class="BlockCallories__parametr">
          <p class="BlockCallories__parametrLabel">Возраст :</p>
          <input
            class="BlockCallories__parametrInput"
            id="3"
            type="text"
            placeholder="введите"
            v-model="params.age"
            @input="isNumber($event as Event)"
          />
          <p class="BlockCallories__parametrUnits">лет</p>
        </div>

        <div class="BlockCallories__parametr">
          <p class="BlockCallories__parametrLabel">Рост :</p>
          <input
            class="BlockCallories__parametrInput"
            id="2"
            type="text"
            placeholder="введите"
            v-model="params.height"
            @input="isNumber($event as Event)"
          />
          <p class="BlockCallories__parametrUnits">см</p>
        </div>

        <div class="BlockCallories__parametr">
          <p class="BlockCallories__parametrLabel">Вес :</p>
          <input
            class="BlockCallories__parametrInput"
            id="1"
            type="text"
            placeholder="введите"
            v-model="params.weight"
            @input="isNumber($event as Event)"
          />
          <p class="BlockCallories__parametrUnits">кг</p>
        </div>

        <div class="BlockCallories__parametr">
          <p class="BlockCallories__parametrLabel">Нагрузки :</p>
          <UISelect :options="select_loads" v-model="load" />
        </div>

        <button
          class="BlockCallories__formBtn"
          :class="{ disabled_btn: is_disabled }"
          :disabled="is_disabled"
          @click="calcCallories()"
        >
          Расчитать
        </button>
      </div>

      <div class="BlockCallories__answer">
        <p class="BlockCallories__answerP">
          Введите ваши параметры для расчета калорий для набора массы или похудения
        </p>
        <div class="BlockCallories__answerContent" :class="{callories_view: callories}">
          <div class="BlockCallories__answerContentItem">
            <p class="BlockCallories__answerContentP">
              Количество калорий для сохранения текущего веса:
            </p>
            <p class="BlockCallories__answerContentCallories">
              {{ Math.round(callories as number) }} калорий/день
            </p>
          </div>
          <div class="BlockCallories__answerContentItem">
            <p class="BlockCallories__answerContentP">Количество калорий для похудения:</p>
            <p class="BlockCallories__answerContentCallories">
              {{ Math.round(callories_for_skinny as number) }} калорий/день
            </p>
          </div>
          <div class="BlockCallories__answerContentItem">
            <p class="BlockCallories__answerContentP">Количество калорий для набора веса:</p>
            <p class="BlockCallories__answerContentCallories">
              {{ Math.round(callories_for_fat as number) }} калорий/день
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.BlockCallories {
  padding: 200px var(--inline-offset) 0;
  background-color: #202020;
}

.BlockCallories__h5 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;

  color: #f5f5f5;
  margin-bottom: 130px;
}

.BlockCallories__callories {
  display: flex;
  gap: 40px;
  justify-content: space-between;
}

.BlockCallories__form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  max-width: 543px;
  width: 100%;
}

.BlockCallories__parametr {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
}

.BlockCallories__parametrLabel {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;

  color: #92918e;
  max-width: 100px;
  width: 100%;
}

.BlockCallories__parametrInputManP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;

  color: #92918e;
}

.BlockCallories__parametrUnits {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;

  color: #92918e;
}

.BlockCallories__parametrInputGender {
  display: flex;
  gap: 20px;
  align-items: center;
}

.BlockCallories__parametrInput {
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid #92918e;
  background-color: inherit;
  max-width: 350px;
  width: 100%;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: white;

  &::placeholder {
    font-family: "Raleway";
    color: #92918e;
  }
}

input[type="radio"] {
  width: 30px;
  height: 30px;
  accent-color: white; /* Задаем нужный цвет. */
  cursor: pointer;
}

.BlockCallories__formBtn {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;

  color: #92918e;
  text-align: center;
  max-width: 350px;
  width: 100%;
  margin-left: 130px;
  border-radius: 5px;
  padding: 10px 0px;
  border: 1px solid #92918e;
  // outline: none;
  background-color: inherit;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #202020;
    background-color: #92918e;
  }
}

.disabled_btn {
  opacity: 0.4;
  cursor: not-allowed;
  &:hover {
    color: #92918e;
    background-color: inherit;
  }
}

.BlockCallories__answerP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;

  color: #92918e;
  margin-bottom: 20px;
}

.BlockCallories__answerContent {
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  opacity: 0;
  transition: opacity 0.5s linear;
}

.BlockCallories__answerContentP {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;

  color: #202020;
  margin-bottom: 10px;
}

.BlockCallories__answerContentCallories {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;

  color: #202020;
}

.callories_view {
  opacity: 1;
  transition: opacity 0.5s linear;
}

</style>
