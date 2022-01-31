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
  async signUp({ commit }, formData) {
    try {
      const res = await this.$axios.$post('/register', formData)
      commit('setAuth', true)
      console.log(res)
      this.$toast.show({
        type: 'success',
        title: 'Success',
        message: 'Sign up success. Welcome to Connex!',
      })
    } catch (error) {}
  },
  async login({ commit }, formData) {
    try {
      const res = await this.$axios.$post('/login', formData)
      commit('setAuth', true)
      commit('setToken', res.token)

      console.log(res)

      this.$toast.show({
        type: 'success',
        title: 'Login Success',
        message: 'Welcome Back to Connex!',
      })
    } catch (error) {
      this.$toast.show({
        type: 'error',
        title: 'Wrong Credentials!',
        message: 'Please check your email and password again.',
      })
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
