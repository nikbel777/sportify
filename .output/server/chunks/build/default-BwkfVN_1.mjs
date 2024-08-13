import { useSSRContext, defineComponent, unref, mergeProps, isRef, ref, watch, resolveDirective, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useState, a as useFormRequest, _ as _sfc_main$6 } from './useFormRequest-DvXAQWZo.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DJjkRbFw.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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
import './server.mjs';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/icons/header_logo.svg");
const _imports_1$1 = publicAssetsURL("/icons/header_burger_logo.svg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    var active__burger = ref(false);
    watch(active__burger, () => {
      if (active__burger.value) {
        (void 0).body.classList.add("scroll-none");
        return;
      }
      (void 0).body.classList.remove("scroll-none");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Header" }, _attrs))}><div class="${ssrRenderClass([{ active__burger: unref(active__burger) }, "header__burger"])}"><span></span></div><a href="/"><img class="Header__logo"${ssrRenderAttr("src", _imports_0$1)} alt="" srcset="" width="140" height="60"></a><div class="${ssrRenderClass([{ "burger-menu": unref(active__burger) }, "Header__information"])}"><div class="Header__links"><div id="burgerMenu-logo" class="Header__burgerLogo"><img${ssrRenderAttr("src", _imports_1$1)} alt="" srcset="" width="140" height="60"></div><a class="Header__linkA" href="#about_us">\u041E \u043D\u0430\u0441</a><a class="Header__linkA" href="#calculate">\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440</a><a class="Header__linkA" href="#services">\u0423\u0441\u043B\u0443\u0433\u0438</a><a class="Header__linkA" href="#questions">\u0412\u043E\u043F\u0440\u043E\u0441\u044B</a><a class="Header__linkA" href="#reviews">\u041E\u0442\u0437\u044B\u0432\u044B</a></div><a class="Header__phoneA" href="tel:+79220092647">+7 (922) 009-26-47</a></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/icons/footer_arrow.png");
const _imports_1 = publicAssetsURL("/icons/vk_white.png");
const _imports_2 = publicAssetsURL("/icons/telegram_white.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "Footer" }, _attrs))}><div class="Footer__content"><div class="Footer__logo"><h4 class="Footer__logoH4">Sportify</h4><p class="Footer__logoP">\u0444\u0438\u0442\u043D\u0435\u0441 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0443\u043A\u0443\u0441\u0435</p></div><div class="Footer__links"><a class="Footer__linkA" href="#about_us">\u041E \u043D\u0430\u0441</a><a class="Footer__linkA" href="#calculate">\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440</a><a class="Footer__linkA" href="#services">\u0423\u0441\u043B\u0443\u0433\u0438</a><a class="Footer__linkA" href="#questions">\u0412\u043E\u043F\u0440\u043E\u0441\u044B</a><a class="Footer__linkA" href="#reviews">\u041E\u0442\u0437\u044B\u0432\u044B</a></div><div class="Footer__social"><div class="Footer__socialHeader"><p class="Footer__socialHeaderP">\u041C\u044B \u0432 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445</p><img class="Footer__socialHeaderImg"${ssrRenderAttr("src", _imports_0)} alt="" width="15" height="15"></div><div class="Footer__socialLinks"><a href="https://vk.com/sport_ify"><img class="Footer__socialLink"${ssrRenderAttr("src", _imports_1)} alt="" width="35" height="35"></a><a href="https://t.me/sport_ify"><img class="Footer__socialLink"${ssrRenderAttr("src", _imports_2)} alt="" width="35" height="35"></a></div></div></div><p class="Footer__logoYear">\xA9 2024, Sportify \u2014 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438</p></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PopupCallories",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var is_popup_hidden = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "PopupCallories" }, _attrs))}><form class="${ssrRenderClass([{ PopupCallories__form_hidden: unref(is_popup_hidden) }, "PopupCallories__form"])}"><div class="PopupCallories__btnClose"></div><div class="PopupCallories__answer"><div class="PopupCallories__answerContent"><div class="PopupCallories__answerContentItem"><p class="PopupCallories__answerContentP"> \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0432\u0435\u0441\u0430: </p><p class="PopupCallories__answerContentCallories">${ssrInterpolate(Math.round(_ctx.data.callories))} \u043A\u0430\u043B\u043E\u0440\u0438\u0439/\u0434\u0435\u043D\u044C </p></div><div class="PopupCallories__answerContentItem"><p class="PopupCallories__answerContentP">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u043F\u043E\u0445\u0443\u0434\u0435\u043D\u0438\u044F:</p><p class="PopupCallories__answerContentCallories">${ssrInterpolate(Math.round(_ctx.data.callories_for_skinny))} \u043A\u0430\u043B\u043E\u0440\u0438\u0439/\u0434\u0435\u043D\u044C </p></div><div class="PopupCallories__answerContentItem"><p class="PopupCallories__answerContentP">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0430\u043B\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0432\u0435\u0441\u0430:</p><p class="PopupCallories__answerContentCallories">${ssrInterpolate(Math.round(_ctx.data.callories_for_fat))} \u043A\u0430\u043B\u043E\u0440\u0438\u0439/\u0434\u0435\u043D\u044C </p></div></div></div></form></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupCallories.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PopupNotify",
  __ssrInlineRender: true,
  props: {
    text_header: {},
    text_content: {},
    text_btn: {},
    status: {},
    max_width: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var is_popup_hidden = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "PopupNotify" }, _attrs))}><div class="${ssrRenderClass([{ PopupNotify__content_hidden: unref(is_popup_hidden) }, "PopupNotify__form"])}"><div class="PopupCallories__btnClose"></div>`);
      if (_ctx.status === "succes") {
        _push(`<div class="PopupNotify__iconSucces"><svg width="50" height="50" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2189 23.094L6.62489 16.5C6.35422 16.2294 6.03122 16.146 5.65589 16.25C5.28056 16.354 5.04622 16.5884 4.95289 16.953C4.85956 17.3177 4.94822 17.6457 5.21889 17.937L13.2189 25.937L29.2189 9.93702C29.4062 9.72835 29.4949 9.48868 29.4849 9.21802C29.4749 8.94735 29.3706 8.71302 29.1719 8.51502C28.9732 8.31702 28.7439 8.21802 28.4839 8.21802C28.2239 8.21802 27.9896 8.31168 27.7809 8.49902L13.2189 23.094Z" fill="black"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ PopupNotify__content_hidden: unref(is_popup_hidden) }, "PopupNotify__content"])}" style="${ssrRenderStyle({ "max-width": _ctx.max_width })}">`);
      if (_ctx.status === "error") {
        _push(`<div class="PopupNotify__iconError"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.text_header) {
        _push(`<h5 class="PopupNotify__h5">${(_a = _ctx.text_header) != null ? _a : ""}</h5>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.text_content) {
        _push(`<p class="PopupNotify__p">${(_b = _ctx.text_content) != null ? _b : ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.text_btn) {
        _push(`<button class="PopupNotify__btn" color="red-12">${ssrInterpolate(_ctx.text_btn)}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupNotify.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PopupForm",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var props = __props;
    var emit = __emit;
    var { user_name, user_phone, error_user_name, error_user_phone, sendFormRequest } = useFormRequest(
      () => {
        closePopup();
      },
      props.data.popup_notify_props_success
    );
    var is_popup_hidden = ref(false);
    var closePopup = () => {
      setTimeout(() => {
        emit("close");
      }, 400);
      is_popup_hidden.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UIInput = _sfc_main$6;
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "PopupForm" }, _attrs))}><form class="${ssrRenderClass([{ PopupForm__form_hidden: unref(is_popup_hidden) }, "PopupForm__form"])}"><div class="PopupForm__btnClose"></div><h5 class="PopupForm__h5">${(_a = _ctx.data.text_header) != null ? _a : ""}</h5><p class="PopupForm__p">${(_b = _ctx.data.text_content) != null ? _b : ""}</p>`);
      _push(ssrRenderComponent(_component_UIInput, mergeProps({
        popup: "",
        class: "PopupForm__input",
        error_message: unref(error_user_name),
        modelValue: unref(user_name),
        "onUpdate:modelValue": ($event) => isRef(user_name) ? user_name.value = $event : user_name = $event,
        placeholder: "\u0418\u043C\u044F",
        tabindex: "1"
      }, ssrGetDirectiveProps(_ctx, _directive_focus, { min_width: 740 })), null, _parent));
      _push(ssrRenderComponent(_component_UIInput, {
        popup: "",
        class: "PopupForm__input",
        error_message: unref(error_user_phone),
        useMask: "",
        modelValue: unref(user_phone),
        "onUpdate:modelValue": ($event) => isRef(user_phone) ? user_phone.value = $event : user_phone = $event,
        placeholder: "+7 (999) 999-99-99"
      }, null, _parent));
      _push(`<button class="PopupForm__btn" type="submit">${ssrInterpolate(_ctx.data.text_btn)}</button><p class="PopupForm__offer"> \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0445, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 \u0432 \u0446\u0435\u043B\u044F\u0445 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: unref(closePopup),
        to: "https://72dom.com/soglasie",
        class: "PopupForm__link"
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
      _push(`</p></form></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopupForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sportify - \u0431\u0443\u0434\u044C \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0432\u043E\u043B\u043D\u0435 \u0441\u043E \u0441\u043F\u043E\u0440\u0442\u043E\u043C",
      htmlAttrs: { lang: "ru" },
      link: [
        { rel: "icon", href: "icons/header_burger_logo.svg", type: "image/x-icon" }
        //prettier-ignore
      ]
    });
    var popup_form_props = useState("popup_form_props", () => null);
    var popup_callories_props = useState("popup_callories_props", () => null);
    var popup_notify_props = useState("popup_notify_props", () => null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$5;
      const _component_Footer = _sfc_main$4;
      const _component_PopupCallories = _sfc_main$3;
      const _component_PopupNotify = _sfc_main$2;
      const _component_PopupForm = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main id="main">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      if (unref(popup_callories_props)) {
        _push(ssrRenderComponent(_component_PopupCallories, mergeProps(unref(popup_callories_props), {
          onClose: ($event) => isRef(popup_callories_props) ? popup_callories_props.value = null : popup_callories_props = null
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(popup_notify_props)) {
        _push(ssrRenderComponent(_component_PopupNotify, mergeProps(unref(popup_notify_props), {
          onClose: ($event) => isRef(popup_notify_props) ? popup_notify_props.value = null : popup_notify_props = null
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(popup_form_props)) {
        _push(ssrRenderComponent(_component_PopupForm, mergeProps(unref(popup_form_props), {
          onClose: ($event) => isRef(popup_form_props) ? popup_form_props.value = null : popup_form_props = null
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BwkfVN_1.mjs.map
