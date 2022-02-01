import setToken from "~/utils/setToken"

export const state = () => ({
  user: null,
  isAuth: false,
  userToken: null,
})

export const getters = {
  getUser(state) {
    return state.user
  },
  isAuth(state) {
    return state.isAuth
  },
}

export const actions = {
  async signUp({ commit, dispatch }, formData) {
    try {
      const res = await this.$axios.$post('/register', formData)
      this.$cookies.set('token', res.token)
      commit('setAuth', true)
      dispatch('getUser')
      this.$toast.show({
        type: 'success',
        title: 'Success',
        message: 'Sign up success. Welcome to Connex!',
      })
    } catch (error) {}
  },
  async login({ commit, dispatch }, formData) {
    try {
      const res = await this.$axios.$post('/auth', formData)
      this.$cookies.set('token', res.token)
      commit('setAuth', true)
      commit('setToken', res.token)

      this.$toast.show({
        type: 'success',
        title: 'Login Success',
        message: 'Welcome Back to Connex!',
      })
      await dispatch('getUser')
      this.$router.push('/')
    } catch (error) {
      this.$toast.show({
        type: 'danger',
        message: error.response.data.msg,
      })
    }
  },

  async getUser({ commit }) {
    
    const token = this.$cookies.get('token')
    if (token) {
      setToken(this.$axios, token)
    }
    try {
      const res = await this.$axios.get('/auth', {})
      commit('setUser', res.data.user)
    } catch (error) {
      console.error(error)
    }
  },
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setAuth(state, value) {
    state.isAuth = value
  },
  setToken(state, value) {
    state.userToken = value
  },
}
