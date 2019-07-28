// SCSS
import './global/main.scss'
// JS
import './components/UI-Kit/color_type/color_type.js'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./vue/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
