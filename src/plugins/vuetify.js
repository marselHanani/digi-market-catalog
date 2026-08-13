import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'digiMarket',

    themes: {
      digiMarket: {
        dark: true,

        colors: {
          background: '#0B1512',
          surface: '#101D18',
          'surface-variant': '#16251F',

          primary: '#008F83',
          secondary: '#7F918A',

          success: '#22C55E',
          error: '#EF4444',
          warning: '#F5B942',

          'on-background': '#F8FAFC',
          'on-surface': '#F8FAFC',
        },
      },
    },
  },

  icons: {
    defaultSet: 'mdi',
  },
})

export default vuetify
