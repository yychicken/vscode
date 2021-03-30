import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import test2 from './components/test2.vue'

new Vue({
    el: "#app",
    components: {
        App,
        test2
    },
    template:"<App/>",//有template就不会以el来渲染
    // render: function (createElement) {
    //     return createElement(
    //         test2
    //     )//有render就不会以template或el来渲染
    // },
    // render(a){
    //     return a(test2)
    // }
    //进一步简写
    render:h=>h(App)
})