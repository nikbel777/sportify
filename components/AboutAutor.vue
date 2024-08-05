<template>
  <section class="AboutAutor">
    <div class="AboutAutor__social">
      <div class="AboutAutor__socialHeader">
        <p class="AboutAutor__socialHeaderP">Мы в социальных сетях</p>
        <img
          class="AboutAutor__socialHeaderImg"
          src="/icons/arrow.jpg"
          alt=""
          width="15"
          height="15"
        />
      </div>
      <div class="AboutAutor__socialLinks">
        <img class="AboutAutor__socialLink" src="/icons/vk.png" alt="" width="35" height="35" />
        <!-- <img
          class="AboutAutor__socialLink"
          src="/icons/whats_app.png"
          alt=""
          width="35"
          height="35"
        /> -->
        <img
          class="AboutAutor__socialLink"
          src="/icons/telegramm.png"
          alt=""
          width="35"
          height="35"
        />
      </div>
    </div>

    <div class="AboutAutor__information">
      <img src="/img/bogdan.png" alt="" width="350" height="350" />

      <h4 class="AboutAutor__informationH4">Полиенко Богдан</h4>
      <p class="AboutAutor__informationP">
        Sportify- это место, где вы&nbsp;найдете все необходимое для начала своего пути
        к&nbsp;здоровому образу жизни под руководством главного тренера Полиенко Богдана.
        Он&nbsp;является сертифицированным тренером по&nbsp;фитнесу, а&nbsp;также участником
        множества курсов по&nbsp;нутрициологии. Здесь вы&nbsp;можете ознакомиться с&nbsp;нашими
        преимуществами, получить доступ к&nbsp;онлайн тренировкам, подобрать индивидуальные планы
        питания, а&nbsp;также получить консультации по&nbsp;вопросам в&nbsp;сфере фитнеса.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.AboutAutor {
  padding: 70px var(--inline-offset) 160px;
  background-color: #f5f5f5;
}
.AboutAutor__social {
  width: fit-content;
}
.AboutAutor__socialHeader {
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid black;
  width: fit-content;
  margin-bottom: 16px;
}
.AboutAutor__socialHeaderP {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 130%;

  color: #202020;
}
.AboutAutor__socialLinks {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.AboutAutor__information {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 50px auto 0;
}

.AboutAutor__informationH4 {
  margin-top: 30px;

  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  line-height: 150%;
  white-space: nowrap;

  color: #202020;
}

.AboutAutor__informationP {
  max-width: 1000px;
  width: 100%;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  color: #202020;
}
</style>
