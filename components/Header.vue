<script setup lang="ts">
var active__burger = ref(false);
function addBurger() {
  active__burger.value = !active__burger.value;
  // document.body.classList.toggle("scroll-none");
}

const closeBurger = () => {
  active__burger.value = false;
  // document.body.classList.remove("scroll-none");
};

watch(active__burger, () => {
  if (active__burger.value) {
    document.body.classList.add("scroll-none");
    return;
  }
  document.body.classList.remove("scroll-none");
});

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
        closeBurger();
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
  <section class="Header">
    <div @click="addBurger()" class="header__burger" :class="{ active__burger: active__burger }">
      <span></span>
    </div>
    <a href="/">
      <img
        class="Header__logo"
        src="/icons/header_logo.svg"
        alt=""
        srcset=""
        width="140"
        height="60"
    /></a>

    <div class="Header__information" :class="{ 'burger-menu': active__burger }">
      <div class="Header__links">
        <div id="burgerMenu-logo" class="Header__burgerLogo">
          <img src="/icons/header_burger_logo.svg" alt="" srcset="" width="140" height="60" />
        </div>
        <a class="Header__linkA" href="#about_us">О нас</a>
        <a class="Header__linkA" href="#calculate">Калькулятор</a>
        <a class="Header__linkA" href="#services">Услуги</a>
        <a class="Header__linkA" href="#questions">Вопросы</a>
        <a class="Header__linkA" href="#reviews">Отзывы</a>
      </div>

      <a class="Header__phoneA" href="tel:+79220092647">+7 (922) 009-26-47</a>
    </div>
  </section>
</template>

<style lang="scss">
.Header {
  padding: 45px var(--inline-offset);
  background-color: #202020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
}
.Header__information {
  display: flex;
  gap: 40px;
}
.Header__links {
  display: flex;
  gap: 40px;
}
.Header__linkA {
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;

  color: #f5f5f5;
  border-bottom: 1px solid rgba(150, 145, 145, 0);
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid rgba(243, 234, 234, 1);
  }
}

.Header__phoneA {
  display: block;
  font-family: "Bluu Next Cyrillic";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;

  color: #f5f5f5;
  border-bottom: 1px solid rgba(150, 145, 145, 0);
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 1px solid rgba(243, 234, 234, 1);
  }
}

@media screen and (max-width: 1170px) {
  .Header {
    padding: 20px var(--inline-offset);
    border-bottom: 2px solid #d9d9d9;
    flex: 0 0 auto;
  }

  .Header__information {
    display: flex;
    position: fixed;
    height: 100vh;
    background-color: #f5f5f5;
    z-index: 1;
    width: 100%;
    left: 0;
    top: 0;
    padding: 0px 0px;
    transform: translate(0, -100%);
    transition: all 0.6s ease 0s;

    padding-top: 100px;
    padding-left: var(--inline-offset);

    gap: 25px;
    flex-direction: column;
    // align-items: center;
    font-size: 25px;
  }

  .Header__links {
    flex-direction: column;
  }

  .Header__linkA {
    font-size: 30px;
    width: fit-content;

    color: #202020;
    border-bottom: 1px solid rgba(150, 145, 145, 0);
    transition: all 0.2s ease-in-out;
    &:hover {
      transition: all 0.2s ease-in-out;
      border-bottom: 1px solid rgba(59, 58, 58, 1);
    }
  }
  .Header__phoneA {
    color: #202020;
    width: fit-content;
    font-size: 30px;
  }
}

@media screen and (max-width: 500px) {
  .header {
    padding: 20px 25px;
  }
  .header__burger {
    top: 30px !important;
    right: 25px !important;
  }
  .Header__logo {
  }
  .headerLinks {
    font-size: 18px;
  }
}

// ----------Burger menu-----------------------

.Header__burgerLogo {
  display: none;
}

.burger-menu {
  transform: translate(0, 0) !important;
  transition: all 0.5s ease 0s;
}

.scroll-none {
  overflow: hidden !important;
}

.header__burger {
  display: block;
}
.active__burger {
  display: inherit !important;
}

@media screen and (max-width: 1170px) {
  .Header__burgerLogo {
    display: block;
  }
  .header__burger {
    display: block;
    position: absolute;
    z-index: 111111;
    top: 25px;
    right: 50px;
    width: 50px;
    height: 40px;
    cursor: pointer;
  }
  .header__burger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    top: 19px;
    background: white;
    transition: all 0.6s ease 0s;
  }
  .header__burger:before,
  .header__burger:after {
    content: "";
    background: white;
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    transition: all 0.6s ease 0s;
  }
  .header__burger:before {
    top: 0;
  }
  .header__burger:after {
    bottom: 0;
  }
  .header__burger.active__burger:before {
    background: #202020;
    transform: rotate(45deg);
    top: 17px;
  }
  .header__burger.active__burger:after {
    background: #202020;
    transform: rotate(-45deg);
    bottom: 20px;
  }
  .header__burger.active__burger span {
    transform: scale(0);
  }
}

@media screen and (max-width: 500px) {
  .header__burger {
    width: 30px;
    height: 20px;
  }
  .header__burger span {
    height: 2px;
    top: 9px;
  }
  .header__burger:before,
  .header__burger:after {
    height: 2px;
  }

  .header__burger.active__burger:before {
    transform: rotate(45deg);
    top: 9px;
  }
  .header__burger.active__burger:after {
    transform: rotate(-45deg);
    bottom: 9px;
  }
}
</style>
