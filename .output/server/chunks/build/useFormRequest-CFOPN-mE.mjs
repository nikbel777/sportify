import { toRef, isRef, useSSRContext, defineComponent, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useNuxtApp, a as useRoute } from './server.mjs';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    placeholder: {},
    useMask: { type: Boolean },
    modelValue: {},
    error_message: {},
    popup: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var props = __props;
    ref();
    var getPresentValue = (str) => {
      if (!props.useMask)
        return props.modelValue;
      return [...String(str.replace(/\D+/, ""))].map((char, idx) => {
        if (idx === 0) {
          return "+7";
        }
        if (idx === 1) {
          return " (9";
        }
        if (idx === 4) {
          return ") " + char;
        }
        if (idx === 7) {
          return "-" + char;
        }
        if (idx === 9) {
          return "-" + char;
        }
        return char;
      }).join("");
    };
    var input_value = computed(() => getPresentValue(props.modelValue));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "Input" }, _attrs))}><input class="${ssrRenderClass([{
        Input__input_error: _ctx.error_message,
        "Input__input_error--popup": _ctx.error_message && _ctx.popup,
        "Input__input--popup": _ctx.popup
      }, "Input__input"])}"${ssrRenderAttr("placeholder", _ctx.placeholder)} type="text"${ssrRenderAttr("value", unref(input_value))}>`);
      if (_ctx.error_message) {
        _push(`<div class="Input__error">${ssrInterpolate(_ctx.error_message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useFormRequest = (cbSuccessFetch, popup_notify_props_success) => {
  var route = useRoute();
  var popup_notify_props = useState("popup_notify_props", () => null);
  var is_app_loading = useState("is_app_loading", () => false);
  var user_name = ref("");
  var user_phone = ref("");
  var error_user_name = ref("");
  var error_user_phone = ref("");
  var validateForm = () => {
    if (!user_name.value) {
      error_user_name.value = "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F";
    } else {
      error_user_name.value = "";
    }
    if (!/\d{11}/.test(user_phone.value)) {
      error_user_phone.value = "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043B\u0435\u0444\u043E\u043D";
    } else {
      error_user_phone.value = "";
    }
  };
  var sendFormRequest = async (lead_title) => {
    console.log(111111);
    validateForm();
    if (error_user_phone.value || error_user_name.value) {
      return;
    }
    JSON.parse(localStorage.getItem("utm") || "{}");
    (void 0).cookie = `previousUrl=${(void 0).location.host + route.path + route.hash}`;
    try {
      is_app_loading.value = true;
      console.log(1111111);
      cbSuccessFetch == null ? void 0 : cbSuccessFetch();
      popup_notify_props.value = popup_notify_props_success || {
        status: "succes",
        text_btn: "\u041F\u043E\u043D\u044F\u0442\u043D\u043E",
        text_content: "\u041C\u044B&nbsp;\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430\u043C. \u0421&nbsp;\u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0438&nbsp;\u043E\u0442\u0432\u0435\u0442\u044F\u0442 \u043D\u0430&nbsp;\u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432&nbsp;\u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.",
        max_width: 500
      };
    } catch (error) {
      popup_notify_props.value = {
        text_header: "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0435 \u043F\u0440\u0438\u043D\u044F\u0442\u0430",
        text_content: "\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435",
        status: "error"
      };
    } finally {
      is_app_loading.value = false;
    }
  };
  return {
    user_name,
    user_phone,
    error_user_name,
    error_user_phone,
    sendFormRequest
  };
};

export { _sfc_main as _, useFormRequest as a, useState as u };
//# sourceMappingURL=useFormRequest-CFOPN-mE.mjs.map
