export const state = () => ({
  post: null,
  posts: null,
  allPosts: null,
})

export const getters = {
  getPost(state) {
    return state.post
  },
  getPosts(state) {
    return state.posts
  },
  getAllPosts(state) {
    return state.allPosts
  },
}

export const actions = {
  async submitPost({ dispatch }, formData) {
    try {
      const res = await this.$axios.$post('/api/post', formData)
      await dispatch('getAllPosts')
      this.$toast.show({
        type: 'success',
        message: 'Post success!',
      })
    } catch (error) {
      console.log(error.response)
      this.$toast.show({
        type: 'danger',
        message: error.response.data.msg,
      })
    }
  },
  async getPosts({ commit }, userId) {
    try {
      const res = await this.$axios.$get(`/api/post/${userId}`)
      commit('setPosts', res.posts)
      console.log(res.posts)
    } catch {}
  },
  async getAllPosts({ commit }) {
    try {
      const res = await this.$axios.get('/api/post', {})
      commit('setAllPosts', res.data.posts)
    } catch {}
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setAllPosts(state, allPosts) {
    state.allPosts = allPosts
  },
}
