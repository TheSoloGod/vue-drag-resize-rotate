import { createApp } from 'vue'
import vueDragResizeRotate from "@pinkcao/vue-drag-resize-rotate";
import vueDragResizeRotateCSS from "@pinkcao/vue-drag-resize-rotate/lib/vue-drag-resize-rotate.css";
import App from './App.vue'

// createApp(App).mount('#app')
createApp(App).use(vueDragResizeRotate).use(vueDragResizeRotateCSS).mount('#app')

