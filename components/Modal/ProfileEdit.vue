<template>
  <div
    class="py-12 bg-gray-700 bg-opacity-50 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
  >
    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
      <form
        @submit.prevent="handleForm"
        class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
      >
        <div class="w-full flex justify-start text-gray-600 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <h1
            class="text-gray-800 text-xl font-bold tracking-normal leading-tight mb-4"
          >
            {{ ' ' }}Edit Information
          </h1>
        </div>

        <label
          class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >Account Name</label
        >
        <input
          class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          v-model="name"
        />
        <label
          class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >Username</label
        >
        <input
          class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          v-model="username"
        />
        <label
          class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >Bio</label
        >
        <input
          class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          v-model="bio"
        />
        <label
          for="email2"
          class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
          >Profile Image</label
        >
        <input
          class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          placeholder="Input the image url..."
        />

        <div class="flex items-center justify-start w-full">
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
          >
            Submit
          </button>
          <button
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
            @click="closeModal()"
          >
            Cancel
          </button>
        </div>
        <button
          class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
          @click="closeModal()"
          aria-label="close modal"
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const user = this.$store.state.users.targetUser
    return {
      loading: false,
      name: user.name,
      username: user.username,
      bio: user.bio,
      profile: '',
    }
  },

  methods: {
    closeModal() {
      this.$emit('closeModal', 'just close')
    },
    async handleForm() {
      const id = this.$store.state.users.user._id
      const formData = {
        name: this.name,
        username: this.username,
        bio: this.bio,
        profileImage: this.profile,
      }
      const payload = { id, formData }
      try {
        this.$store.dispatch('users/editProfile', payload)
      } catch (error) {}
      this.closeModal()
    },
  },
  computed: {},
}
</script>
