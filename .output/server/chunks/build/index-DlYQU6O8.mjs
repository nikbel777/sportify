import { u as useState, a as useFormRequest, _ as _sfc_main$d } from './useFormRequest-DvXAQWZo.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, watch, unref, computed, isRef, withCtx, createTextVNode, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DJjkRbFw.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$6 = publicAssetsURL("/img/cover.JPG");
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Cover",
  __ssrInlineRender: true,
  setup(__props) {
    useState("popup_form_props", () => null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Cover" }, _attrs))}><h2 class="Cover__h2">Sportify - \u0431\u0443\u0434\u044C \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u043B\u043D\u0435 \u0441\u043E \u0441\u043F\u043E\u0440\u0442\u043E\u043C</h2><img class="Cover__img"${ssrRenderAttr("src", _imports_0$6)} alt="" srcset="" width="1400" height="760"><div class="Cover__information"><div class="Cover__informationJoin"><h5 class="Cover__informationJoinH5">\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043D\u0430\u043C</h5><button class="Cover__informationJoinBtn">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button><a href="https://t.me/sport_ify" class="Cover__informationJoinBtn">Telegram</a></div><p class="Cover__informationP"> \u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0430\u0441 \u043D\u0430\xA0\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438, \u0433\u0434\u0435 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u043D\u0435\u0440\u044B \u043F\u043E\u043C\u043E\u0433\u0443\u0442 \u0432\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u0432\u0430\u0448\u0438\u0445 \u0444\u0438\u0442\u043D\u0435\u0441-\u0446\u0435\u043B\u0435\u0439. \u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0437\u0430\u043D\u044F\u0442\u0438\u0439, \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u044E \u0438\xA0\u0433\u0438\u0431\u043A\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u043D\u044F\u0442\u0438\u0439 \u043E\u0447\u043D\u043E\u0433\u043E \u0438\xA0\u043E\u043D\u043B\u0430\u0439\u043D \u0444\u043E\u0440\u043C\u0430\u0442\u0430, \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0430 \u0436\u0438\u0437\u043D\u0438. </p></div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cover.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _imports_0$5 = publicAssetsURL("/icons/arrow.jpg");
const _imports_1$1 = publicAssetsURL("/icons/vk.png");
const _imports_2$1 = publicAssetsURL("/icons/telegramm.png");
const _imports_3$1 = publicAssetsURL("/img/bogdan.png");
const _sfc_main$b = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "AboutAutor" }, _attrs))}><div class="AboutAutor__social"><div class="AboutAutor__socialHeader"><p class="AboutAutor__socialHeaderP">\u041C\u044B \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445</p><img class="AboutAutor__socialHeaderImg"${ssrRenderAttr("src", _imports_0$5)} alt="" width="15" height="15"></div><div class="AboutAutor__socialLinks"><a href="https://vk.com/sport_ify"><img class="AboutAutor__socialLink"${ssrRenderAttr("src", _imports_1$1)} alt="" width="35" height="35"></a><a href="https://t.me/sport_ify"><img class="AboutAutor__socialLink"${ssrRenderAttr("src", _imports_2$1)} alt="" width="35" height="35"></a></div></div><div class="AboutAutor__information"><img${ssrRenderAttr("src", _imports_3$1)} alt="" width="350" height="350"><h4 class="AboutAutor__informationH4">\u041F\u043E\u043B\u0438\u0435\u043D\u043A\u043E \u0411\u043E\u0433\u0434\u0430\u043D</h4><p class="AboutAutor__informationP"> Sportify- \u044D\u0442\u043E \u043C\u0435\u0441\u0442\u043E, \u0433\u0434\u0435 \u0432\u044B\xA0\u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0432\u043E\u0435\u0433\u043E \u043F\u0443\u0442\u0438 \u043A\xA0\u0437\u0434\u043E\u0440\u043E\u0432\u043E\u043C\u0443 \u043E\u0431\u0440\u0430\u0437\u0443 \u0436\u0438\u0437\u043D\u0438 \u043F\u043E\u0434 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E\u043C \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0442\u0440\u0435\u043D\u0435\u0440\u0430 \u041F\u043E\u043B\u0438\u0435\u043D\u043A\u043E \u0411\u043E\u0433\u0434\u0430\u043D\u0430. \u041E\u043D\xA0\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u043C \u043F\u043E\xA0\u0444\u0438\u0442\u043D\u0435\u0441\u0443, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0430 \u043A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\xA0\u043D\u0443\u0442\u0440\u0438\u0446\u0438\u043E\u043B\u043E\u0433\u0438\u0438. \u0417\u0434\u0435\u0441\u044C \u0432\u044B\xA0\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441\xA0\u043D\u0430\u0448\u0438\u043C\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A\xA0\u043E\u043D\u043B\u0430\u0439\u043D \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B \u043F\u0438\u0442\u0430\u043D\u0438\u044F, \u0430\xA0\u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043F\u043E\xA0\u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0432\xA0\u0441\u0444\u0435\u0440\u0435 \u0444\u0438\u0442\u043D\u0435\u0441\u0430. </p></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutAutor.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$4 = publicAssetsURL("/img/card_one_1.png");
const _imports_1 = publicAssetsURL("/img/card_one_2.png");
const _imports_2 = publicAssetsURL("/img/card_two_1.png");
const _imports_3 = publicAssetsURL("/img/card_two_2.png");
const _imports_4 = publicAssetsURL("/img/card_three_1.png");
const _imports_5 = publicAssetsURL("/img/card_three_2.png");
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "AboutUs" }, _attrs))}><h2 class="AboutUs__h2" id="about_us">\u041E \u043D\u0430\u0441</h2><div class="AboutUs__cards"><div class="AboutUs__cardOne"><div class="AboutUs__cardOneInfo"><p class="AboutUs__cardOneInfoNumber">01</p><p class="AboutUs__cardOneInfoText"> \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438. \u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0438\xA0\u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438 </p><div class="AboutUs__cardOneInfoImg"><img${ssrRenderAttr("src", _imports_0$4)} alt="" width="600" height="461"></div></div><div class="AboutUs__cardOneImg"><img${ssrRenderAttr("src", _imports_1)} alt="" width="484" height="851"></div></div><div class="AboutUs__cardTwo"><div class="AboutUs__cardTwoImg"><img${ssrRenderAttr("src", _imports_2)} alt="" width="436" height="856"></div><div class="AboutUs__cardTwoInfo"><p class="AboutUs__cardTwoInfoNumber">02</p><p class="AboutUs__cardTwoInfoText"> \u041A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 <br> \u0442\u0440\u0435\u043D\u0435\u0440\u0441\u043A\u0438\u0439 \u0441\u043E\u0441\u0442\u0430\u0432 </p><div class="AboutUs__cardTwoInfoImg"><img${ssrRenderAttr("src", _imports_3)} alt="" width="385" height="570"></div></div></div><div class="AboutUs__cardThree"><div class="AboutUs__cardThreeInfo"><p class="AboutUs__cardThreeInfoNumber">03</p><p class="AboutUs__cardThreeInfoText">\u0413\u0438\u0431\u043A\u0438\u0439 \u0433\u0440\u0430\u0444\u0438\u043A \u0437\u0430\u043D\u044F\u0442\u0438\u0439</p><div class="AboutUs__cardThreeInfoImg"><img${ssrRenderAttr("src", _imports_4)} alt="" width="656" height="686"></div></div><div class="AboutUs__cardThreeImg"><img${ssrRenderAttr("src", _imports_5)} alt="" width="685" height="460"></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutUs.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$3 = publicAssetsURL("/img/prewiev.png");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  __ssrInlineRender: true,
  setup(__props) {
    useState("popup_form_props", () => null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Preview" }, _attrs))}><div class="Preview__img"><img${ssrRenderAttr("src", _imports_0$3)} alt="" srcset=""></div><div class="Preview__content"><h4 class="Preview__contentH4">\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043D\u0430\u043C</h4><p class="Preview__contentP"> \u0414\u043E\u0441\u0442\u0438\u0433\u0430\u0439 \u0441\u0432\u043E\u0438\u0445 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u043E\xA0Sportify. Sportify-\u0431\u0443\u0434\u044C \u043D\u0430\xA0\u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u043B\u043D\u0435 \u0441\u043E\xA0\u0441\u043F\u043E\u0440\u0442\u043E\u043C </p><button class="Preview__contentBtn">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preview.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Select",
  __ssrInlineRender: true,
  props: {
    options: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var props = __props;
    const selected = ref(props.modelValue);
    const selectOpen = ref(false);
    watch(
      () => props.modelValue,
      (newValue) => {
        selected.value = newValue;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "Select",
        id: "select"
      }, _attrs))}><div class="SelectSelected"><p>${ssrInterpolate(unref(selected).label || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435")}</p><svg class="${ssrRenderClass([{ is_rotate: unref(selectOpen) }, "Select__svg"])}" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="24" height="24"></rect><g><path d="M7 10l5 5 5-5"></path></g></svg></div><div class="${ssrRenderClass([{ is_open_select: unref(selectOpen) }, "SelectItems"])}"><div class="SelectItems__content"><!--[-->`);
      ssrRenderList(_ctx.options, (option, index2) => {
        _push(`<div class="${ssrRenderClass([{ "same-as-selected": unref(selected) === option }, "SelectItem"])}">${ssrInterpolate(option.label)}</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Select.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BlockCallories",
  __ssrInlineRender: true,
  setup(__props) {
    useState("popup_callories_props", () => null);
    var select_loads = [
      {
        label: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
        active: 1.2
      },
      {
        label: "1-3 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0432 \u043D\u0435\u0434\u0435\u043B\u044E",
        active: 1.375
      },
      {
        label: "3-5 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0432 \u043D\u0435\u0434\u0435\u043B\u044E",
        active: 1.46
      },
      {
        label: "5 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u0445 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E",
        active: 1.55
      },
      {
        label: "\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C",
        active: 1.66
      }
    ];
    var load = ref({
      label: "",
      active: 0
    });
    var params = ref({
      gender: "man",
      age: null,
      height: null,
      weight: null
    });
    var is_disabled = computed(
      () => !(params.value.age && params.value.height && params.value.weight && load.value.active)
    );
    var callories = ref(0);
    var callories_for_skinny = ref(0);
    var callories_for_fat = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UISelect = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "BlockCallories" }, _attrs))}><div class="BlockCallories__h5" id="calculate">\u0420\u0430\u0441\u0447\u0435\u0442 \u043A\u0430\u043B\u043E\u0440\u0438\u0439</div><div class="BlockCallories__callories"><div class="BlockCallories__form"><div class="BlockCallories__parametr"><p class="BlockCallories__parametrLabel">\u041F\u043E\u043B :</p><div class="BlockCallories__parametrInputGender"><input type="radio" id="one" value="man"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(params).gender, "man")) ? " checked" : ""}><p class="BlockCallories__parametrInputManP">\u043C\u0443\u0436\u0441\u043A\u043E\u0439</p></div><div class="BlockCallories__parametrInputGender"><input type="radio" id="two" value="woman"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(params).gender, "woman")) ? " checked" : ""}><p class="BlockCallories__parametrInputManP">\u0436\u0435\u043D\u0441\u043A\u0438\u0439</p></div></div><div class="BlockCallories__parametr"><p class="BlockCallories__parametrLabel">\u0412\u043E\u0437\u0440\u0430\u0441\u0442 :</p><input class="BlockCallories__parametrInput" id="3" type="text" placeholder="\u0432\u0432\u0435\u0434\u0438\u0442\u0435"${ssrRenderAttr("value", unref(params).age)}><p class="BlockCallories__parametrUnits">\u043B\u0435\u0442</p></div><div class="BlockCallories__parametr"><p class="BlockCallories__parametrLabel">\u0420\u043E\u0441\u0442 :</p><input class="BlockCallories__parametrInput" id="2" type="text" placeholder="\u0432\u0432\u0435\u0434\u0438\u0442\u0435"${ssrRenderAttr("value", unref(params).height)}><p class="BlockCallories__parametrUnits">\u0441\u043C</p></div><div class="BlockCallories__parametr"><p class="BlockCallories__parametrLabel">\u0412\u0435\u0441 :</p><input class="BlockCallories__parametrInput" id="1" type="text" placeholder="\u0432\u0432\u0435\u0434\u0438\u0442\u0435"${ssrRenderAttr("value", unref(params).weight)}><p class="BlockCallories__parametrUnits">\u043A\u0433</p></div><div class="BlockCallories__parametr"><p class="BlockCallories__parametrLabel">\u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 :</p>`);
      _push(ssrRenderComponent(_component_UISelect, {
        options: unref(select_loads),
        modelValue: unref(load),
        "onUpdate:modelValue": ($event) => isRef(load) ? load.value = $event : load = $event
      }, null, _parent));
      _push(`</div><button class="${ssrRenderClass([{ disabled_btn: unref(is_disabled) }, "BlockCallories__formBtn"])}"${ssrIncludeBooleanAttr(unref(is_disabled)) ? " disabled" : ""}> \u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C </button></div><div class="BlockCallories__answer"><p class="BlockCallories__answerP"> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u043C\u0430\u0441\u0441\u044B \u0438\u043B\u0438 \u043F\u043E\u0445\u0443\u0434\u0435\u043D\u0438\u044F </p><div class="${ssrRenderClass([{ callories_view: unref(callories) }, "BlockCallories__answerContent"])}"><div class="BlockCallories__answerContentItem"><p class="BlockCallories__answerContentP"> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0432\u0435\u0441\u0430: </p><p class="BlockCallories__answerContentCallories">${ssrInterpolate(Math.round(unref(callories)))} \u043A\u0430\u043B\u043E\u0440\u0438\u0439/\u0434\u0435\u043D\u044C </p></div><div class="BlockCallories__answerContentItem"><p class="BlockCallories__answerContentP">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u043F\u043E\u0445\u0443\u0434\u0435\u043D\u0438\u044F:</p><p class="BlockCallories__answerContentCallories">${ssrInterpolate(Math.round(unref(callories_for_skinny)))} \u043A\u0430\u043B\u043E\u0440\u0438\u0439/\u0434\u0435\u043D\u044C </p></div><div class="BlockCallories__answerContentItem"><p class="BlockCallories__answerContentP">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0432\u0435\u0441\u0430:</p><p class="BlockCallories__answerContentCallories">${ssrInterpolate(Math.round(unref(callories_for_fat)))} \u043A\u0430\u043B\u043E\u0440\u0438\u0439/\u0434\u0435\u043D\u044C </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlockCallories.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$2 = publicAssetsURL("/img/session.png");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TrialSession",
  __ssrInlineRender: true,
  setup(__props) {
    var { user_name, user_phone, error_user_name, error_user_phone, sendFormRequest } = useFormRequest();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIInput = _sfc_main$d;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "TrialSession" }, _attrs))}><h5 class="TrialSession__infoH5 TrialSession__infoH5_mobile"> \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0431\u043D\u043E\u0435 <br> \u0437\u0430\u043D\u044F\u0442\u0438\u0435 </h5><div class="TrialSession__img"><img${ssrRenderAttr("src", _imports_0$2)} alt="" width="600" height="745"></div><div class="TrialSession__info"><h5 class="TrialSession__infoH5 TrialSession__infoH5_desctop"> \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0431\u043D\u043E\u0435 <br> \u0437\u0430\u043D\u044F\u0442\u0438\u0435 </h5><form class="TrialSession__infoForm">`);
      _push(ssrRenderComponent(_component_UIInput, {
        popup: "",
        class: "TrialSession__infoFormInput",
        error_message: unref(error_user_name),
        modelValue: unref(user_name),
        "onUpdate:modelValue": ($event) => isRef(user_name) ? user_name.value = $event : user_name = $event,
        placeholder: "\u0418\u043C\u044F",
        tabindex: "1"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIInput, {
        popup: "",
        class: "TrialSession__infoFormInput",
        error_message: unref(error_user_phone),
        useMask: "",
        modelValue: unref(user_phone),
        "onUpdate:modelValue": ($event) => isRef(user_phone) ? user_phone.value = $event : user_phone = $event,
        placeholder: "+7 (999) 999-99-99"
      }, null, _parent));
      _push(`<button class="TrialSession__infoFormBtn" type="submit">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button><p class="TrialSession__infoFormOffer"> \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0445, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0446\u0435\u043B\u044F\u0445 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://72dom.com/soglasie",
        class: "TrialSession__infoFormLink"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.`);
          } else {
            return [
              createTextVNode("\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></form></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TrialSession.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Products",
  __ssrInlineRender: true,
  setup(__props) {
    useState("popup_form_props", () => null);
    var array_products = [
      {
        src: "/img/Product1.png",
        title_img: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043D\u0430 \u043C\u0435\u0441\u044F\u0446",
        cost: "1490"
      },
      {
        src: "/img/Product2.png",
        title_img: "\u0420\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430",
        cost: "390"
      },
      {
        src: "/img/Product3.png",
        title_img: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u043D\u0430 \u043C\u0435\u0441\u044F\u0446",
        cost: "\u043E\u0442 3500"
      },
      {
        src: "/img/Product4.png",
        title_img: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0441 \u043F\u0438\u0442\u0430\u043D\u0438\u0435\u043C",
        cost: "\u043E\u0442 5000"
      }
      // {
      //   src: "/img/Product1.png",
      //   title_img: "Индивидуальная программа питания на месяц",
      //   cost: "1490",
      // },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_grabscroll = resolveDirective("grabscroll");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Products" }, _attrs))}><h5 class="Products__h5" id="services">\u0423\u0441\u043B\u0443\u0433\u0438</h5><div${ssrRenderAttrs(mergeProps({ class: "Products__Cards" }, ssrGetDirectiveProps(_ctx, _directive_grabscroll)))}><!--[-->`);
      ssrRenderList(unref(array_products), (product) => {
        _push(`<div class="Products__Card"><div class="Products__CardImg"><img${ssrRenderAttr("src", product.src)} alt="" width="450" height="450"><p class="Products__CardImgP">${ssrInterpolate(product.title_img)}</p></div><div class="Products__CardCost"><p class="Products__CardCostP">\u0426\u0435\u043D\u0430</p><p class="Products__CardCostPrice">${ssrInterpolate(product.cost)} \u20BD</p></div><button class="Products__CardButton">\u041A\u0443\u043F\u0438\u0442\u044C</button></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/video/Videos.mp4");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "Videos" }, _attrs))}><video autoplay muted loop width="713" height="1000"><source${ssrRenderAttr("src", _imports_0$1)} type="video/mp4"></video></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Videos.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = publicAssetsURL("/icons/arrow_question.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "QuestionItem",
  __ssrInlineRender: true,
  props: {
    question: {}
  },
  setup(__props) {
    var is_open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "QuestionItem" }, _attrs))}><div class="QuestionItem__label"><p class="QuestionItem__labelP">${ssrInterpolate(_ctx.question.label)}</p><img class="${ssrRenderClass([{ is_rotate: unref(is_open) }, "QuestionItem__labelImg"])}"${ssrRenderAttr("src", _imports_0)} alt="" width="30" height="30"></div><div class="${ssrRenderClass([{ is_open: unref(is_open) }, "QuestionItem__answer_body"])}"><p class="QuestionItem__answer_content">${ssrInterpolate(_ctx.question.answer)}</p></div></article>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuestionItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Questions",
  __ssrInlineRender: true,
  setup(__props) {
    var questions = [
      {
        label: "\u0415\u0441\u0442\u044C \u043B\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430",
        answer: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u043C\u0443\u0437\u044B\u043A\u0438, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 - \u0432\u0441\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Sportify \u043C\u043E\u0438\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u043D\u0438\u043C\u044B\u043C \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u043C \u0432 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A \u043D\u043E\u0432\u044B\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C!"
      },
      {
        label: "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u0440\u043E\u0431\u043D\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435",
        answer: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u043C\u0443\u0437\u044B\u043A\u0438, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 - \u0432\u0441\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Sportify \u043C\u043E\u0438\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u043D\u0438\u043C\u044B\u043C \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u043C \u0432 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A \u043D\u043E\u0432\u044B\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C!"
      },
      {
        label: "\u041A\u0430\u043A \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",
        answer: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u043C\u0443\u0437\u044B\u043A\u0438, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 - \u0432\u0441\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Sportify \u043C\u043E\u0438\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u043D\u0438\u043C\u044B\u043C \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u043C \u0432 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A \u043D\u043E\u0432\u044B\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C!"
      },
      {
        label: "\u041A\u0430\u043A \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C",
        answer: "\u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438 \u043C\u0443\u0437\u044B\u043A\u0438, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 - \u0432\u0441\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Sportify \u043C\u043E\u0438\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u043D\u0438\u043C\u044B\u043C \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u043C \u0432 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u044F \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A \u043D\u043E\u0432\u044B\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C!"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_QuestionItem = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Questions" }, _attrs))}><h2 class="Questions__h2" id="questions">\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B</h2><div class="Questions__list"><!--[-->`);
      ssrRenderList(unref(questions), (question) => {
        _push(ssrRenderComponent(_component_QuestionItem, { question }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Questions.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Reviews",
  __ssrInlineRender: true,
  setup(__props) {
    var array_rewievs = [
      {
        scr: "/img/rewievs.png",
        title: "\u041C\u0438\u043B\u0430\u043D\u0430 \u0412\u043E\u043B\u043A\u043E\u0432\u0430",
        description: "Sportify&nbsp;&mdash; \u044D\u0442\u043E \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 \u0441\u043F\u043E\u0440\u0442\u0430 \u0438&nbsp;\u0437\u0434\u043E\u0440\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0430 \u0436\u0438\u0437\u043D\u0438! \u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438&nbsp;\u043C\u0443\u0437\u044B\u043A\u0438, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438&nbsp;&mdash; \u0432\u0441\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Sportify \u043C\u043E\u0438\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u043D\u0438\u043C\u044B\u043C \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u043C \u0432&nbsp;\u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u044F&nbsp;\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438&nbsp;\u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A&nbsp;\u043D\u043E\u0432\u044B\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C!"
      },
      {
        scr: "/img/reviews.webp",
        title: "\u041D\u0438\u043A\u0438\u0442\u0430 \u0411\u0435\u043B\u044F\u0435\u0432",
        description: "\u042F&nbsp;\u0431\u044B\u043B \u043E\u0447\u0435\u043D\u044C \u0434\u043E\u0432\u043E\u043B\u0435\u043D \u0443\u0441\u043B\u0443\u0433\u043E\u0439 \u0432&nbsp;\u0441\u0444\u0435\u0440\u0435 \u0441\u043F\u043E\u0440\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u044F&nbsp;\u043D\u0435\u0434\u0430\u0432\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B. \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u0438\u0434\u0435\u0442\u044C, \u043A\u0430\u043A \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044B \u0432&nbsp;\u044D\u0442\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u043B\u044E\u0434\u044F\u043C \u0434\u043E\u0441\u0442\u0438\u0447\u044C \u0441\u0432\u043E\u0438\u0445 \u0446\u0435\u043B\u0435\u0439 \u0438&nbsp;\u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0433\u0440\u0430\u043D\u0438\u0446\u044B. \u042F&nbsp;\u043F\u043E\u043B\u0443\u0447\u0438\u043B \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u044B\u043B\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u0438&nbsp;\u043C\u043E\u0438\u0445 \u043D\u0443\u0436\u0434."
      },
      {
        scr: "/img/rewievs.png",
        title: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u042F\u0433\u043E\u0434\u043D\u0438\u043A\u043E\u0432\u0430",
        description: "Sportify&nbsp;&mdash; \u044D\u0442\u043E \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0435\u0439 \u0441\u043F\u043E\u0440\u0442\u0430 \u0438&nbsp;\u0437\u0434\u043E\u0440\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0430 \u0436\u0438\u0437\u043D\u0438! \u0423\u0434\u043E\u0431\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441, \u043E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043E\u043A \u0438&nbsp;\u043C\u0443\u0437\u044B\u043A\u0438, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438&nbsp;&mdash; \u0432\u0441\u0435 \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Sportify \u043C\u043E\u0438\u043C \u043D\u0435\u0437\u0430\u043C\u0435\u043D\u0438\u043C\u044B\u043C \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u043E\u043C \u0432&nbsp;\u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u044F&nbsp;\u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0438&nbsp;\u0433\u043E\u0442\u043E\u0432\u044B\u043C \u043A&nbsp;\u043D\u043E\u0432\u044B\u043C \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F\u043C!"
      }
    ];
    var idx_rewiev = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Reviews" }, _attrs))}><div class="Reviews__wrapper"><div class="Reviews__imgBg"></div><h5 class="Reviews__h5" id="reviews">\u041E\u0442\u0437\u044B\u0432\u044B</h5><div class="Reviews__contentWrapper"><button class="${ssrRenderClass([{ disabled_btn: unref(idx_rewiev) === 0 }, "Reviews__informationBtn prev btn_mob"])}"${ssrIncludeBooleanAttr(unref(idx_rewiev) === 0) ? " disabled" : ""}><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" fill="#92918e" style="${ssrRenderStyle({ "transform": "rotate(-180deg)" })}"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path></svg></button><!--[-->`);
      ssrRenderList(unref(array_rewievs), (rewiev, idx) => {
        var _a;
        _push(`<div class="${ssrRenderClass([{ is_visible: idx === unref(idx_rewiev) }, "Reviews__content"])}"><div class="Reviews__img"><img${ssrRenderAttr("src", rewiev.scr)} alt="" width="550" height="550"></div><div class="Reviews__information"><p class="Reviews__informationTitle">${ssrInterpolate(rewiev.title)}</p><p class="Reviews__informationP">${(_a = rewiev.description) != null ? _a : ""}</p></div></div>`);
      });
      _push(`<!--]--><button class="${ssrRenderClass([{ disabled_btn: unref(idx_rewiev) === unref(array_rewievs).length - 1 }, "Reviews__informationBtn next btn_mob"])}"${ssrIncludeBooleanAttr(unref(idx_rewiev) === unref(array_rewievs).length - 1) ? " disabled" : ""}><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" fill="#92918e"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path></svg></button></div><div class="Reviews__informationBtns btn_des"><button class="${ssrRenderClass([{ disabled_btn: unref(idx_rewiev) === 0 }, "Reviews__informationBtn prev"])}"${ssrIncludeBooleanAttr(unref(idx_rewiev) === 0) ? " disabled" : ""}><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" fill="#92918e" style="${ssrRenderStyle({ "transform": "rotate(-180deg)" })}"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path></svg></button><button class="${ssrRenderClass([{ disabled_btn: unref(idx_rewiev) === unref(array_rewievs).length - 1 }, "Reviews__informationBtn next"])}"${ssrIncludeBooleanAttr(unref(idx_rewiev) === unref(array_rewievs).length - 1) ? " disabled" : ""}><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" class="icon" version="1.1" fill="#92918e"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path></svg></button></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reviews.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Cover = _sfc_main$c;
  const _component_AboutAutor = __nuxt_component_1;
  const _component_AboutUs = __nuxt_component_2;
  const _component_Preview = _sfc_main$9;
  const _component_BlockCallories = _sfc_main$7;
  const _component_TrialSession = _sfc_main$6;
  const _component_Products = _sfc_main$5;
  const _component_Videos = __nuxt_component_7;
  const _component_Questions = _sfc_main$2;
  const _component_Reviews = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cover, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutAutor, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutUs, null, null, _parent));
  _push(ssrRenderComponent(_component_Preview, null, null, _parent));
  _push(ssrRenderComponent(_component_BlockCallories, null, null, _parent));
  _push(ssrRenderComponent(_component_TrialSession, null, null, _parent));
  _push(ssrRenderComponent(_component_Products, null, null, _parent));
  _push(ssrRenderComponent(_component_Videos, null, null, _parent));
  _push(ssrRenderComponent(_component_Questions, null, null, _parent));
  _push(ssrRenderComponent(_component_Reviews, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DlYQU6O8.mjs.map
