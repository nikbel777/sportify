<script setup lang="ts">
var { user_name, user_phone, error_user_name, error_user_phone, sendFormRequest } =
  useFormRequest();
</script>

<template>
  <section class="TrialSession">
    <h5 class="TrialSession__infoH5 TrialSession__infoH5_mobile">
      Бесплатное пробное <br />
      занятие
    </h5>
    <div class="TrialSession__img">
      <img src="/img/session.png" alt="" width="600" height="745" />
    </div>
    <div class="TrialSession__info">
      <h5 class="TrialSession__infoH5 TrialSession__infoH5_desctop">
        Бесплатное пробное <br />
        занятие
      </h5>
      <form class="TrialSession__infoForm" @submit.prevent="sendFormRequest()">
        <UIInput
          popup
          class="TrialSession__infoFormInput"
          :error_message="error_user_name"
          v-model="user_name"
          placeholder="Имя"
          tabindex="1"
        />

        <UIInput
          popup
          class="TrialSession__infoFormInput"
          :error_message="error_user_phone"
          useMask
          v-model="user_phone"
          placeholder="+7 (999) 999-99-99"
        />
        <button class="TrialSession__infoFormBtn" type="submit">Оставить заявку</button>
        <p class="TrialSession__infoFormOffer">
          Отправляя заявку, вы соглашаетесь на обработку персональных данных и получение сервисных,
          рекламных сообщений в целях рассмотрения обращения согласно
          <NuxtLink to="/policy" class="TrialSession__infoFormLink"
            >политике конфиденциальности.</NuxtLink
          >
        </p>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
.TrialSession {
  background-color: #202020;
  padding: 200px var(--inline-offset);
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: -1px 0;
}
.TrialSession__info {
  position: relative;
}

.TrialSession__infoH5 {
  position: absolute;
  right: 0;
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;

  color: #f5f5f5;
  width: 1000px;
  margin-left: -230px;
  text-align: end;
}

.TrialSession__infoH5_mobile {
  display: none;
}

.TrialSession__infoForm {
  margin-left: 70px;
  margin-top: 260px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.TrialSession__infoFormInput {
  .Input__input {
    font-size: 25px;
  }
}

.TrialSession__infoFormBtn {
  width: 100%;
  padding: 8px 0;
  border: 1px solid #92918e;
  border-radius: 15px;
  background-color: inherit;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 150%;
  margin-top: 20px;
  color: #92918e;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #202020;
    background-color: #92918e;
  }
}

.TrialSession__infoFormOffer {
  color: #b2b2b2;
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%; /* 21.7px */
}

.TrialSession__infoFormLink {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0);
  }
}

@media (max-width: 1300px) {
  .TrialSession__infoForm {
    margin-left: 0px;
  }
}

@media (max-width: 1050px) {
  .TrialSession {
    flex-direction: column;
  }
  .TrialSession__infoH5 {
    position: relative;
    font-size: 70px;
    line-height: 100%;
    margin-left: 0;
    text-align: start;
    width: fit-content;
  }

  .TrialSession__infoH5_mobile {
    display: block;
  }

  .TrialSession__infoH5_desctop {
    display: none;
  }
  .TrialSession__infoForm {
    margin-top: 0;
  }
  .TrialSession__img {
    img {
      width: 100%;
      height: auto;
      max-width: 500px;
    }
  }
}

@media (max-width: 740px) {
  .TrialSession {
    padding: 70px var(--inline-offset);
  }

  .TrialSession__infoH5 {
    font-size: 35px;
  }
  .TrialSession__infoFormBtn{
    font-size: 20px;
  }
}
</style>
