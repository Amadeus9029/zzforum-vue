import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
const state = {
    token: getToken()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
}
const actions = {
    loginAction({ commit }, userInfo) {
        const { name, password } = userInfo
        console.log(userInfo)
        console.log("store/loginAction")
        return new Promise((resolve, reject) => {
            login({ name: name.trim(), password: password }).then((response) => {
                const data = response.data
                console.log(response)
                commit('SET_TOKEN', data)
                setToken(data)
                resolve()
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
