<script setup lang="ts">
interface ISelectProps {
  options: {
    label: string;
    active: number;
  }[];
  modelValue:
    | {
        label: string;
        active: number;
      }
    | string;
}

var props = defineProps<ISelectProps>();

const emit = defineEmits(["update:modelValue"]);

const selected = ref<any>(props.modelValue);
const selectOpen = ref(false);

const toggleSelect = () => {
  selectOpen.value = !selectOpen.value;
};

const selectOption = (option: any) => {
  selected.value = option;
  emit("update:modelValue", option);
  selectOpen.value = false;
};

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = newValue;
  }
);

onMounted(() => {
  const elem: any = document.getElementById("select");

  document.addEventListener("click", (e) => {
    if (!elem.contains(e.target)) {
      selectOpen.value = false;
    }
  });
});
</script>

<template>
  <div class="Select" id="select" @click="toggleSelect()">
    <div class="SelectSelected">
      <p>{{ selected.label || "Выберите" }}</p>

      <svg
        class="Select__svg"
        :class="{ is_rotate: selectOpen }"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" fill="none" width="24" height="24" />

        <g>
          <path d="M7 10l5 5 5-5" />
        </g>
      </svg>
    </div>
    <div class="SelectItems" :class="{ is_open_select: selectOpen }">
      <div class="SelectItems__content">
        <div
          v-for="(option, index) in options"
          :key="index"
          :class="{ 'same-as-selected': selected === option }"
          @click.stop="selectOption(option)"
          class="SelectItem"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Select {
  position: relative;
  display: inline-block;
  max-width: 350px;
  width: 100%;
  
}

.SelectSelected {
  padding: 10px 20px;
  height: 62px;
  border: 1px solid #92918e;
  background-color: inherit;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: white;

  font-family: "Raleway";

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(44, 44, 44, 0.85);
  }
}

.Select__svg {
  width: 20px;
  height: 20px;
  fill: white;
  transform: rotate(0deg);
  transition: all 0.2s linear;
}

.is_rotate {
  transform: rotate(-180deg);
}

.SelectItems {
  position: absolute;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s linear;
  will-change: transition;
}

.is_open_select {
  grid-template-rows: 1fr;
}

.SelectItems[style*="display: block;"] {
  display: block;
}

.SelectItems__content {
  min-height: 0;
}

.SelectItem {
  padding: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;

  color: #202020;
  cursor: pointer;
}

.SelectItem:hover,
.same-as-selected {
  background-color: #f1f1f1;
}
</style>
