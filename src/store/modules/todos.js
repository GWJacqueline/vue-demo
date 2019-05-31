const state = {
    todos: [],
}
const getters = {
    todos(state) {
        return state.todos;
    },
}

const mutations = {
    getTodo: (state, payload) => {
        state.todos = payload;
    },
    addTodo: (state, payload) => {
        state.todos = [payload, ...state.todos];
    },
    deleteTodo: (state, payload) => {
        state.todos = state.todos.filter(todo => {
            return todo.id !== payload;
        });
    },
    changData: (state, payload) => {
        const index = state.todos.findIndex(item => {
            return item.id === payload.id
        });
        if (index !== -1) {
            state.todos.splice(index, 1, payload);
        };
    }
}
const actions = {
    async asyncGetTodo({ commit }) {
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
        commit("getTodo", response.data);
    },
    async asyncAddTodo({ commit }, payload) {
        const response = await axios.post("http://jsonplaceholder.typicode.com/todos", {
            title: payload,
            completed: false
        });
        commit("addTodo", response.data);
    },
    async asyncDeleteTodo({ commit }, payload) {
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${payload}`);
        commit("deleteTodo", payload);
    },
    async asyncfilterNum({ commit }, payload) {
        const response = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${payload}`);
        console.log(response.data);
        commit("getTodo", response.data);
    },
    async completed({ commit }, payload) {
        const response = await axios.put(`http://jsonplaceholder.typicode.com/todos/${payload.id}`, payload);
        commit("changData", response.data);
    },

}

export default {
    state, getters, mutations, actions
}
