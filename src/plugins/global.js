const iView = require('iview')
const iViewComponents = Object.entries(iView)
export default {
    install(Vue) {
        const reg = /^[A-Z][A-z0-9]*$/
        iViewComponents.forEach(item => {
            let [name, component] = item
            if (!reg.test(name)) return
            if (name === 'Circle' || name === 'Switch') {
                name = 'pre-' + name
            }
            Vue.component(name, component)
        })
    }
}