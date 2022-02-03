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
  }
}

export const actions = {
  async submitPost( {commit}, formData) {
    console.log(formData)
    try {
      const res = await this.$axios.$post('/api/post', formData)
      console.log(res)
    } catch (error) {
      console.log(error.response)
    }
  },
  async getPosts({ commit }, userId) {
    console.log(userId)
    try {
      const res = await this.$axios.$get(`/api/post/${userId}`)
      commit('setPosts', res.posts)
      console.log(res.posts)
    } catch {}
  },
  async getAllPosts({ commit }) {
    try {
      const res = await this.$axios.get('/api/post' , {})
      commit('setAllPosts', res.data.posts)
      console.log(res.data.posts)
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
