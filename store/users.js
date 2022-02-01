export const state = () => ({
  user: null,
  isAuth: false,
  userToken: null,
})

export const getters = {
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
      console.log(res)
      this.$cookies.set('token', res.token)
      commit('setAuth', true)
      commit('setToken', res.token)

      this.$toast.show({
        type: 'success',
        title: 'Login Success',
        message: 'Welcome Back to Connex!',
      })
      dispatch('getUser')
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
      this.$axios.setHeader('auth_token', token)
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
