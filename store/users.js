import setToken from '~/utils/setToken'

export const state = () => ({
  user: {},
  targetUser: {},
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
    return state.targetUser
  },
}

export const actions = {
  async signUp({ commit, dispatch }, formData) {
    try {
      const res = await this.$axios.$post('/api/register', formData)
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
      const res = await this.$axios.$post('/api/auth', formData)
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
      const res = await this.$axios.get('/api/auth', {})
      commit('setUser', res.data.user)
    } catch (error) {
      console.error(error)
    }
  },

  async getTargetUser({ commit }, username) {
    const token = this.$cookies.get('token')
    if (token) {
      setToken(this.$axios, token)
    }
    try {
      const res = await this.$axios.get(`/api/auth`, { params: { username } })
      commit('setTargetUser', res.data.user)
    } catch (error) {
      console.error(error)
    }
  },

  // @route     PUT api/profile/:id
  // @desc      Updating Profile
  // @access    Private
  async editProfile({ dispatch }, payload) {
    console.log(payload.formData)
    try {
      const res = await this.$axios.put(
        `/api/profile/${payload.id}`,
        payload.formData
      )
      dispatch('getTargetUser')
      this.$toast.show({
        type: 'success',
        message: 'Edit successful',
      })
    } catch (error) {
      console.log(error.response.data.msg)

      this.$toast.show({
        type: 'danger',
        message: error.response.data.msg,
      })
    }
  },
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setTargetUser(state, user) {
    state.targetUser = user
  },
  setAuth(state, value) {
    state.isAuth = value
  },
  setToken(state, value) {
    state.userToken = value
  },
}
