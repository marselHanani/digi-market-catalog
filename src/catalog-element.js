import './assets/main.css'

import { defineCustomElement } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createAppRouter } from './router'

const DigiCatalog = defineCustomElement(App, {
  configureApp(app) {
    app.use(createPinia())

    app.use(
      createAppRouter({
        webComponent: true,
      }),
    )

    app.use(vuetify)
  },

  shadowRoot: false,
})

customElements.define('digi-catalog', DigiCatalog)
