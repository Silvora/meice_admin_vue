import { createApp } from 'vue'

import App from './App.vue'
import store from './stores/index'
import router from './router'
import { createI18n } from 'vue-i18n'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './assets/main.css'

import zh from 'view-ui-plus/dist/locale/zh-CN'
import en from 'view-ui-plus/dist/locale/en-US'

const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': zh,
    'en-US': en
  }
})

function bootstrap() {
  const app = createApp(App)

  app.use(store)
  app.use(router)
  app.use(i18n)
  app.use(ViewUIPlus, {
    i18n,
    transfer: true,
    size: 'large',
    capture: false
  })

  app.mount('#app')
}
bootstrap()
