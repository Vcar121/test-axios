import {
    createApp
} from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Http from './service/http'

// //把Http挂载到Vue实例上
// Vue.prototype.$Http = Http
createApp(App).use(router).mount('#app')