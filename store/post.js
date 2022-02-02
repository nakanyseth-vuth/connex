export const state = () => ({
  post: null,
  posts: null,
})

export const getters = {
  getPost(state) {
    return state.post
  },
  getPosts(state) {
    return state.posts
  },
}

export const actions = {
  async submitPost(formData) {
    try {
      const res = await this.$axios.$post('/api/post', formData)
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }
  },
  async getPosts({ commit }, username) {
    try {
      const res = await this.$axios.$get(`/api/post/${username}`)
      commit('setPosts', res.posts)
    } catch {}
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
}
