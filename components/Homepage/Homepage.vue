<template>
  <div>
    <PostForm />
    <Post />
  </div>
</template>
<script>
import Header from '~/components/Utils/Header'
import Post from '~/components/Homepage/Post'
import PostForm from '~/components/Homepage/PostForm'
export default {
  components: { Header, Post, PostForm },
}
</script>
