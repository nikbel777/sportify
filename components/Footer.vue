<script setup lang="ts">
onMounted(() => {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const toElement = (e.target as HTMLElement).getAttribute("href")!.replace("#", "");

      if (window.innerWidth > 1170) {
        (document.getElementById(toElement) as HTMLElement).scrollIntoView({
          behavior: "smooth",
        });
      } else {
        setTimeout(() => {
          (document.getElementById(toElement) as HTMLElement).scrollIntoView({
            behavior: "smooth",
          });
        }, 200);
      }
    });
  });
});
</script>

<template>
  <section class="Footer">
    <div class="Footer__content">
      <div class="Footer__logo">
        <h4 class="Footer__logoH4">Sportify</h4>
        <p class="Footer__logoP">фитнес в каждом укусе</p>
      </div>

      <div class="Footer__links">
        <a class="Footer__linkA" href="#about_us">О нас</a>
        <a class="Footer__linkA" href="#calculate">Калькулятор</a>
        <a class="Footer__linkA" href="#services">Услуги</a>
        <a class="Footer__linkA" href="#questions">Вопросы</a>
        <a class="Footer__linkA" href="#reviews">Отзывы</a>
      </div>

      <div class="Footer__social">
        <div class="Footer__socialHeader">
          <p class="Footer__socialHeaderP">Мы в социальных сетях</p>
          <img
            class="Footer__socialHeaderImg"
            src="/icons/footer_arrow.png"
            alt=""
            width="15"
            height="15"
          />
        </div>
        <div class="Footer__socialLinks">
          <a href="https://vk.com/sport_ify"
            ><img
              class="Footer__socialLink"
              src="/icons/vk_white.png"
              alt=""
              width="35"
              height="35"
          /></a>

          <a href="https://t.me/sport_ify">
            <img
              class="Footer__socialLink"
              src="/icons/telegram_white.png"
              alt=""
              width="35"
              height="35"
          /></a>
        </div>
      </div>
    </div>
    <p class="Footer__logoYear">© 2024, Sportify — официальный сайт компании</p>
  </section>
</template>

<style lang="scss">
.Footer {
  padding: 70px var(--inline-offset);
  background-color: #202020;
}
.Footer__content {
  display: flex;
  justify-content: space-between;
}

.Footer__logoH4 {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 100px;

  color: #f5f5f5;
  margin-bottom: 30px;
}

.Footer__logoP {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: #f5f5f5;

  margin-bottom: 70px;
}

.Footer__logoYear {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;

  color: #ffffff;
}
.Footer__links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.Footer__linkA {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  width: fit-content;

  color: #f5f5f5;
  border-bottom: 1px solid rgba(150, 145, 145, 0);
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid rgba(243, 234, 234, 1);
  }
}

.Footer__social {
  width: fit-content;
}
.Footer__socialHeader {
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  width: fit-content;
  margin-bottom: 16px;
}
.Footer__socialHeaderP {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 130%;

  color: #f5f5f5;
}
.Footer__socialLinks {
  display: flex;
  justify-content: center;
  gap: 30px;
}

@media (max-width: 1000px) {
  .Footer__logoH4 {
    font-size: 80px;
    margin-bottom: 0px;
  }
  .Footer__links {
    display: none;
  }
}

@media (max-width: 740px) {
  .Footer__content {
    flex-direction: column;
  }
  .Footer__logoH4 {
    font-size: 65px;
  }
  .Footer__logoP {
    margin-bottom: 40px;
  }
  .Footer__social {
    margin-bottom: 40px;
  }
}
</style>
