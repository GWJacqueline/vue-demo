import Vue from 'vue'
import Vuex from 'vuex'
import '../assets/css/font-awesome.css'

Vue.use(Vuex)
import todo from './modules/todos'
export default new Vuex.Store({
    modules: {
        todo,
    }
})
