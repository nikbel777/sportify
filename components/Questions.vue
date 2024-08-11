<script setup lang="ts">
var questions = [
  {
    label: "Есть ли гарантия результата",
    answer:
      "Удобный интерфейс, огромный выбор тренировок и музыки, персонализированные рекомендации - все это делает Sportify моим незаменимым спутником в тренировках. Благодаря этому приложению я чувствую себя мотивированным и готовым к новым достижениям!",
  },
  {
    label: "Что входит в пробное занятие",
    answer:
      "Удобный интерфейс, огромный выбор тренировок и музыки, персонализированные рекомендации - все это делает Sportify моим незаменимым спутником в тренировках. Благодаря этому приложению я чувствую себя мотивированным и готовым к новым достижениям!",
  },
  {
    label: "Как с вами связаться",
    answer:
      "Удобный интерфейс, огромный выбор тренировок и музыки, персонализированные рекомендации - все это делает Sportify моим незаменимым спутником в тренировках. Благодаря этому приложению я чувствую себя мотивированным и готовым к новым достижениям!",
  },
  {
    label: "Как зависит стоимость программ",
    answer:
      "Удобный интерфейс, огромный выбор тренировок и музыки, персонализированные рекомендации - все это делает Sportify моим незаменимым спутником в тренировках. Благодаря этому приложению я чувствую себя мотивированным и готовым к новым достижениям!",
  },
];
</script>

<template>
  <section class="Questions">
    <h2 class="Questions__h2" id="questions">Часто задаваемые вопросы</h2>
    <div class="Questions__list">
      <QuestionItem v-for="question of questions" :question="question" />
    </div>
  </section>
</template>

<style lang="scss">
.Questions {
  padding: 200px var(--inline-offset);
  background-color: #f5f5f5;
}
.Questions__h2 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;

  color: #202020;
  max-width: 840px;
  margin-bottom: 90px;
}

.Questions__list {
  border-bottom: 1px solid #92918e;
}

@media (max-width: 1170px) {
  .Questions__h2 {
    font-size: 70px;
  }
  .QuestionItem__labelP {
    font-size: 35px;
  }
}

@media (max-width: 740px) {
  .Questions {
    padding: 70px var(--inline-offset);
  }
  .Questions__h2 {
    font-size: 38px;
    margin-bottom: 30px;
    line-height: 100%;
  }
  .QuestionItem{
    padding: 15px 0;
  }
  .QuestionItem__label{
    gap: 15px;
    img{
      width: 20px;
      height: 20px;
    }
  }
  .QuestionItem__labelP {
    font-size: 20px;
    text-align: end;
  }
  .QuestionItem__answer_content{
    font-size: 14px;
  }
}
</style>
