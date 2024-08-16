<script setup lang="ts">
interface IQuestionProps {
  question: {
    label: string;
    answer: string;
  };
}

defineProps<IQuestionProps>();

var is_open = ref(false);
</script>

<template>
  <article class="QuestionItem" @click="is_open = !is_open">
    <div class="QuestionItem__label">
      <p class="QuestionItem__labelP">{{ question.label }}</p>
      <img class="QuestionItem__labelImg" :class="{ is_rotate: is_open }" src="/icons/arrow_question.png" alt="" width="30" height="30"/>
    </div>
    <div class="QuestionItem__answer_body" :class="{ is_open: is_open }">
      <p class="QuestionItem__answer_content">
        {{ question.answer }}
      </p>
    </div>
  </article>
</template>

<style lang="scss">
.QuestionItem {
  border-top: 1px solid #92918e;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0;
}

.QuestionItem__label{
  display: flex;
  gap: 25px;
  align-items: center;
}

.QuestionItem__labelP {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 140%;

  color: #202020;
}

.QuestionItem__labelImg{
  transform: rotate(0deg);
  transition: all 0.2s linear;
}

.is_rotate{
  transform: rotate(-180deg);
}

.QuestionItem__answer_body {
  display: grid;
  overflow: hidden;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s linear;
  will-change: transition;
  max-width: 1000px;
}

.is_open {
  grid-template-rows: 1fr;
}

.QuestionItem__answer_content {
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;

  color: #202020;
  min-height: 0;
}
</style>
