import type { IPopupNotifyProps } from '@/components/PopupNotify.vue'

export default (cbSuccessFetch?: () => void, popup_notify_props_success?: IPopupNotifyProps) => {
  var route = useRoute()
  var popup_notify_props = useState<IPopupNotifyProps | null>('popup_notify_props', () => null)
  var is_app_loading = useState<boolean>("is_app_loading", () => false); //prettier-ignore

  var user_name = ref('')
  var user_phone = ref('')
  var error_user_name = ref('')
  var error_user_phone = ref('')

  var validateForm = () => {
    if (!user_name.value) {
      error_user_name.value = 'Заполните ваше имя'
    } else {
      error_user_name.value = ''
    }

    if (!/\d{11}/.test(user_phone.value)) {
      error_user_phone.value = 'Заполните ваш телефон'
    } else {
      error_user_phone.value = ''
    }
  }

  var sendFormRequest = async (lead_title?: string | undefined) => {
    console.log(111111);
    
    validateForm()
    if (error_user_phone.value || error_user_name.value) {
      return
    }

    var utm = JSON.parse(localStorage.getItem('utm') || '{}')
    document.cookie = `previousUrl=${document.location.host + route.path + route.hash}`

    try {
      is_app_loading.value = true

      console.log(1111111);
      

      // await $fetch('', {
      //   method: 'post',
      //   body: {
      //     name: user_name.value,
      //     phone: user_phone.value,
      //     lead_title: 'Сайт каталог - ' + lead_title,
      //     ...utm,
      //   },
      // })

      cbSuccessFetch?.()
      // ymReachGoal('send-form_any') //ym_target - Код: Успешно отправленные формы

      //@ts-ignore
      popup_notify_props.value = popup_notify_props_success || {
        status: 'succes',
        text_btn: 'Понятно',
        text_content:
          'Мы&nbsp;отправили ваши данные менеджерам. С&nbsp;вами свяжутся и&nbsp;ответят на&nbsp;все вопросы в&nbsp;ближайшее время.',
        max_width: 500,
      }
    } catch (error) {
      popup_notify_props.value = {
        text_header: 'Заявка не принята',
        text_content: 'Произошла ошибка. Повторите или попробуйте позже',
        status: 'error',
      }
    } finally {
      is_app_loading.value = false
    }
  }

  return {
    user_name,
    user_phone,
    error_user_name,
    error_user_phone,
    sendFormRequest,
  }
}
