import {getToken, setToken, removeToken} from '@/utils/auth'
import {login} from '@/api/user'

const state = {
  token: getToken(),
  user: {name:"tony"},
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
const actions = {
  loginAction({commit}, userInfo) {
    const {name, password} = userInfo
    return new Promise((resolve, reject) => {
      login({name: name.trim(), password: password}).then((response) => {
        const data = response.data
        console.log(response)
        commit('SET_TOKEN', data)
        commit('SET_USER', userInfo)
        setToken(data)
        resolve()
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  logoutAction({commit},userInfo){},
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
