import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#064898',
          secondary: '#ebd173',
          background: '#ffffff',
          surface: '#ffffff',
        }
      }
    }
  },
  defaults: {
    VBtn: {
      rounded: 'sm',
      flat: true,
    },
    VCard: {
      rounded: 'sm',
    },
    VTextField: {
      rounded: 'sm',
    },
    VSelect: {
      rounded: 'sm',
    }
  }
})