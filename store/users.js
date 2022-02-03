import setToken from '~/utils/setToken'

export const state = () => ({
  user: {},
  targetUser: {},
  searchUsers: [],
  errorMsg: null,
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
  getSearchUsers(state) {
    return state.searchUsers
  },
  getErrorMsg(state) {
    return state.errorMsg
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
    console.log('getTargetUser')
    const token = this.$cookies.get('token')
    if (token) {
      setToken(this.$axios, token)
    }
    try {
      const res = await this.$axios.get(`/api/auth/${username}`)
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
      await dispatch('getTargetUser', res.data.user.username)
      this.$toast.show({
        type: 'success',
        message: 'Edit successful',
      })
    } catch (error) {
      this.$toast.show({
        type: 'danger',
        message: error.response.data.msg,
      })
    }
  },

  // @route     Post api/users/
  // @desc      Get searched users
  // @access    Private
  async searchUsers({ commit }, query) {
    try {
      const res = await this.$axios.post(`/api/users`, { query })
      if (res.data.users.length === 0) {
        commit('setSearchUsers', [])
        commit('setErrorMsg', 'Type to search any user')
      } else {
        commit('setErrorMsg', null)
        commit('setSearchUsers', res.data.users)
      }
    } catch (error) {
      // console.error(error.response);
      commit('setErrorMsg', error.response.data.msg)
    }
  },

  // @route     Post api/friends/following
  // @desc      Follow a user
  // @access    Private
  async followUser({ dispatch }, username) {
    try {
      const res = await this.$axios.$post(`/api/friends/following`, {
        username,
      })
      await dispatch('getTargetUser', res.targetUser.username)
      await dispatch('getUser')
      this.$toast.show({
        type: 'success',
        message: 'You are now following this user!',
      })
    } catch (error) {
      console.error(error)
    }
  },
  async unfollowUser({ dispatch }, username) {
    try {
      const res = await this.$axios.put(`/api/friends/unfollow`, {
        username,
      })
      await dispatch('getTargetUser', res.data.targetUser.username)
      await dispatch('getUser')
      this.$toast.show({
        type: 'info',
        message: 'You have unfollowed this user!',
      })
    } catch (error) {
      console.error(error)
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
  setSearchUsers(state, users) {
    state.searchUsers = users
  },
  setErrorMsg(state, value) {
    state.errorMsg = value
  },
}
