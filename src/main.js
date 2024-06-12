import { createApp } from 'vue'
// layers ordering: base -> components -> utilities
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import 'virtual:windi-devtools'
import App from './App.vue'

createApp(App).mount('#app')
