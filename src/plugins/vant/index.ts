import type { App } from 'vue'

import { Button, Dialog } from 'vant'

const components = [Button, Dialog]

export const setupVant = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
}
