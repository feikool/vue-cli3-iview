import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import globalPlugin from '@/plugins/global'
require('es6-promise').polyfill()
import '@/styles/index.less'

Vue.config.productionTip = false
Vue.use(globalPlugin)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')