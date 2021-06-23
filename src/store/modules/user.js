const state = {
    name: '',
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name
    }
}
const actions = {
    login({ commit, state }, userInfo) {
        return new Promise((resolve, reject) => {
            commit('SET_NAME', userInfo)
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
