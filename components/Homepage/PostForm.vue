<template>
  <div class="w-full md:w-3/4 lg:w-3/5 py-5 lg:24 h-full antialiased mx-auto">
    <form @submit.prevent="post()">
      <div class="bg-white w-full shadow rounded-lg p-5">
        <textarea
          v-model="post_text"
          class="bg-gray-200 w-full rounded-lg shadow border p-2"
          rows="5"
          placeholder="Speak your mind"
          required
        ></textarea>

        <div class="pt-4">
          <span>Upload Photo</span>
          <input
            type="file"
            name="post_image"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            aria-label="Upload Image"
            @change="selectFile"
          />
        </div>

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
  data() {
    return {
      text: '',
      post_image: null,
    }
  },
  created() {},
  methods: {
    async post() {
      const formData = new FormData();
      const { post_text, post_image } = this;

      formData.append("post_text", post_text)
      if (post_image){
        formData.append("post_image", post_image)
      }
      try {
        console.log(formData.post_image)
        await this.$store.dispatch('post/submitPost', formData)
      } catch (error) {
        console.log(error)
      }
      this.post_image = null;
    },
    async selectFile(e) {
      this.post_image = e.target.files[0];
    }
  },
}
</script>

<style></style>
