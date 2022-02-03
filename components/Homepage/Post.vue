<template>
  <!-- post card -->
  <div
    class="flex bg-white border shadow-lg rounded-lg mx-4 my-5 md:mx-auto w-3/5"
  >
    <!--horizantil margin is just for display-->
    <div class="flex items-start px-4 py-6">
      <img
        class="w-12 h-12 rounded-full object-cover mr-4 shadow"
        :src="profilePrefix + post.user.profileImage"
        alt="avatar"
      />
      <div class="">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 -mt-1">
            {{ post.user.name }}
          </h2>
        </div>
        <!-- <p class="text-gray-700">Posted: {{ (post.date_created.split('T')[0]).split('-').reverse().join('-') }}</p> -->
        <p class="text-sm font-light text-gray-700">
          Posted: {{ $moment(post.date_created).fromNow() }}
        </p>
        <p class="mt-3 text-gray-700 text-base">
          {{ post.post_text }}
        </p>
        <div class="mt-4 flex items-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('post/getAllPosts')
  },
  name: 'Post',
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    profilePrefix() {
      return this.post.user.profileImage.includes('uploads')
        ? 'http://localhost:5000/'
        : ''
    },
  },
}
</script>
