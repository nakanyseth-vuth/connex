<template>
  <div
    class="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased mx-auto"
  >
    <form @submit.prevent="post()">
      <div class="bg-white w-full shadow rounded-lg p-5">
        <textarea
          v-model="text"
          class="bg-gray-200 w-full rounded-lg shadow border p-2"
          rows="5"
          placeholder="Speak your mind"
          required
        ></textarea>

        <div class="w-full flex flex-row flex-wrap mt-3">
          <div class="w-1/3"></div>
          <div class="w-2/3">
            <button
              type="submit"
              class="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Post',
  },
  data() {
    return {
      text: '',
    }
  },
  created() {
  },
  methods: {
    async post() {
      const { text } = this
      const formData = {
        text,
      }
      try {
      await this.$store.dispatch('post/submitPost', formData)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
