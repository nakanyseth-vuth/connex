<template>
  <div>
    <PostForm />
    <div v-for="post in posts" :key="post._id">
      <Post :post="post" />
    </div>
    <div
      v-if="posts.length == 0"
      class="flex w-max flex-col justify-center items-center mt-10 p-5 font-light text-lg rounded-xl mx-auto text-center"
    >
      Nothing to show. Post Something!
      <div class="mt-3 w-[20vw]">
        <img class="w-full" src="/add_friends.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '~/components/Utils/Header'
import Post from '~/components/Homepage/Post'
import PostForm from '~/components/Homepage/PostForm'
export default {
  async asyncData({ store }) {
    await store.dispatch('post/getAllPosts')
  },
  components: { Header, Post, PostForm },
  computed: {
    ...mapGetters({
      posts: 'post/getAllPosts',
    }),
  },
}
</script>
