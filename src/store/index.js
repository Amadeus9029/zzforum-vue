import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        count2: 2,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        increment(state) {
            // mutate state
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})

