<template>
  <div>
    <Homepage />
    <pre>{{ user }}</pre>
    <pre>{{ posts }}</pre>
  </div>
</template>

<script>
import Homepage from '../components/Homepage/Homepage.vue'
import setToken from '~/utils/setToken'
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store }) {
    await store.dispatch('users/getUser')
    await store.dispatch('post/getAllPosts')
  },
  middleware: 'protected',
  components: { Homepage },
  layout: 'index',
  name: 'IndexPage',
  created() {
    const token = this.$cookies.get('token')
    if (token) {
      setToken(this.$axios, token)
    }
  },
  computed: {
    ...mapGetters({
      user: 'users/getUser',
      posts: 'post/getAllPosts'
    }),
  },
}
</script>
