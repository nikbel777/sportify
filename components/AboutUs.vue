<template>
  <section class="AboutUs">
    <h2 class="AboutUs__h2">О нас</h2>
    <div class="AboutUs__cards">
      <div class="AboutUs__cardOne">
        <div class="AboutUs__cardOneInfo">
          <p class="AboutUs__cardOneInfoNumber">01</p>
          <p class="AboutUs__cardOneInfoText">
            Персональные онлайн тренировки. Эффективные и&nbsp;современные методики
          </p>
          <div class="AboutUs__cardOneInfoImg">
            <img src="/img/card_one_1.png" alt="" width="600" height="461" />
          </div>
        </div>
        <div class="AboutUs__cardOneImg">
          <img src="/img/card_one_2.png" alt="" width="484" height="851" />
        </div>
      </div>

      <div class="AboutUs__cardTwo">
        <div class="AboutUs__cardTwoImg">
          <img src="/img/card_two_1.png" alt="" width="436" height="856" />
        </div>
        <div class="AboutUs__cardTwoInfo">
          <p class="AboutUs__cardTwoInfoNumber">02</p>
          <p class="AboutUs__cardTwoInfoText">
            Квалифицированный <br />
            тренерский состав
          </p>
          <div class="AboutUs__cardTwoInfoImg">
            <img src="/img/card_two_2.png" alt="" width="385" height="570" />
          </div>
        </div>
      </div>

      <div class="AboutUs__cardThree">
        <div class="AboutUs__cardThreeInfo">
          <p class="AboutUs__cardThreeInfoNumber">03</p>
          <p class="AboutUs__cardThreeInfoText">Гибкий график занятий</p>
          <div class="AboutUs__cardThreeInfoImg">
            <img src="/img/card_three_1.png" alt="" width="656" height="686" />
          </div>
        </div>
        <div class="AboutUs__cardThreeImg">
          <img src="/img/card_three_2.png" alt="" width="685" height="460" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.AboutUs {
  padding: 200px var(--inline-offset);
  background-color: #202020;
}
.AboutUs__h2 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;

  color: #f5f5f5;
  margin-bottom: 70px;
}

.AboutUs__cards {
  display: flex;
  flex-direction: column;
  gap: 200px;
}
//  -----------------------------------card one start---------------
.AboutUs__cardOne {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.AboutUs__cardOneInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.AboutUs__cardOneInfoNumber {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: 0.13em;

  color: #ffffff;
  margin-bottom: 40px;
}

.AboutUs__cardOneInfoText {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 150%;

  color: #f5f5f5;
  max-width: 849px;
  width: 100%;
  margin-bottom: 80px;
}
.AboutUs__cardOneInfoImg {
  margin: 0 0 0 auto;
  max-width: fit-content;
  img {
    width: 100%;
    height: auto;
  }
}
//  -----------------------------------card one end---------------

//  -----------------------------------card two start---------------
.AboutUs__cardTwo {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.AboutUs__cardTwoInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 850px;
  width: 100%;
}

.AboutUs__cardTwoInfoNumber {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: 0.13em;

  color: #ffffff;
  margin-bottom: 40px;
  text-align: end;
}

.AboutUs__cardTwoInfoText {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 150%;

  color: #f5f5f5;
  margin-bottom: 50px;
  text-align: end;
}
.AboutUs__cardTwoInfoImg {
  margin: 0 auto 0 0;
  max-width: fit-content;
  img {
    width: 100%;
    height: auto;
  }
}
//  -----------------------------------card two end---------------

//  -----------------------------------card three start---------------
.AboutUs__cardThree {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.AboutUs__cardThreeInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.AboutUs__cardThreeInfoNumber {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  letter-spacing: 0.13em;

  color: #ffffff;
  margin-bottom: 40px;
}

.AboutUs__cardThreeInfoText {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 150%;

  color: #f5f5f5;
  white-space: nowrap;
  max-width: 849px;
  width: 100%;
  margin-bottom: 137px;
}
.AboutUs__cardThreeInfoImg {
  margin: 0 0 0 auto;
  max-width: fit-content;
  img {
    width: 100%;
    height: auto;
  }
}
.AboutUs__cardThreeImg {
  max-width: 685px;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
//  -----------------------------------card three end---------------

@media (max-width: 1343px) {
  .AboutUs__cardOneInfoText {
    font-size: 43px;
  }
  .AboutUs__cardTwoInfoText {
    font-size: 43px;
  }
  .AboutUs__cardThreeInfoText {
    font-size: 43px;
  }
}
</style>
