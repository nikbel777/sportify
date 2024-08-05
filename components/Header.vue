<script lang="ts"></script>

<template>
  <section class="Header">
    <img src="/icons/header_logo.svg" alt="" srcset="" width="140" height="60" />

    <div class="Header__information">
      <div class="Header__links">
        <a class="Header__linkA" href="">О нас</a>
        <a class="Header__linkA" href="">Калькулятор</a>
        <a class="Header__linkA" href="">Услуги</a>
        <a class="Header__linkA" href="">Вопросы</a>
        <a class="Header__linkA" href="">Отзывы</a>
      </div>

      <a class="Header__phoneA" href="+723432324">+7 (3452) 55-55-51</a>
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
</style>
