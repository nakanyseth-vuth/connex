import setToken from '~/utils/setToken'

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
  getTargetUser(state) {
    return state.user
  }
}

export const actions = {
  async signUp({ commit, dispatch }, formData) {
    try {
      const res = await this.$axios.$post('/register', formData)
      this.$cookies.set('token', res.token)
      commit('setAuth', true)
      this.$toast.show({
        type: 'success',
        title: 'Success',
        message: 'Sign up success. Welcome to Connex!',
      })
      dispatch('getUser')
      this.$router.push('/')
    } catch (error) {
      console.log(error.response.data.msg)
      this.$toast.show({
        type: 'danger',
        message: error.response.data.msg,
      })
    }
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
      console.log(error.response.data.msg)

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

  async getTargetUser({ commit }) {
    // const token = this.$cookies.get('token')
    // if (token) {
    //   setToken(this.$axios, token)
    // }
    try {
      console.log(this.state.users.user.username)
      const res = await this.$axios.get(`/auth/${this.state.users.user.username}`)
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
