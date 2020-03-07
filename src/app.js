import Vue from 'vue'
import Button from './button'
import Icon from './components/icon'
import buttonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Footer from './layout/footer'
import Sider from './layout/sider'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('s-input', Input)
Vue.component('s-row',Row)
Vue.component('s-col',Col)
Vue.component('s-layout',Layout)
Vue.component('s-header',Header)
Vue.component('s-content',Content)
Vue.component('s-footer',Footer)
Vue.component('s-sider',Sider)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message:'h1'
    },
    methods:{
        inputChange (e) {
            console.log(e.target.value);
        },
        onInput(e){
            console.log(e);
        }
    }
})






















