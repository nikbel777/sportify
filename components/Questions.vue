<script setup lang="ts">
var questions = [
  {
    label: "Есть ли гарантия результата",
    answer:
      "Ваши результаты будут зависеть от ваших действий.",
  },
  {
    label: "Что входит в пробное занятие",
    answer:
      "Тренировка, включающая в себя разминку и базовые упражнения.",
  },
  {
    label: "Как с вами связаться",
    answer:
      'Напишите в наши социальные сети "Хочу программу" или оставьте заявку на нашем сайте и тренера в скором времени свяжутся с вами напрямую.',
  },
  {
    label: "Как зависит стоимость программ",
    answer:
      "От ваших целей и объема услуг,  которых оказывают вам наши специалисты!",
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
