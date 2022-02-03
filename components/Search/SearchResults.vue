<template>
  <div
    class="fixed left-0 right-0 top-[9%] bottom-0 flex justify-center z-10"
    @click="$emit('closeSearch')"
  >
    <div
      class="rounded-md w-[450px] max-w-full h-[400px] overflow-auto border-2 bg-white shadow-lg"
    >
      <p class="p-5 font-light opacity-60" v-if="errorMsg">{{ errorMsg }}</p>

      <div v-else v-for="(user, i) in users" :key="i">
        <nuxt-link
          class="flex items-center gap-3 p-3 mb-2 hover:bg-gray-300"
          :to="'/profile/' + user.username"
        >
          <div class="w-[40px] h-[40px] border-1">
            <img
              class="w-full h-full rounded-full object-cover"
              :src="
                (user.profileImage.includes('uploads\\') ||
                user.profileImage.includes('uploads/')
                  ? 'http://localhost:5000/'
                  : '') + user.profileImage
              "
              onerror=" this.onerror = null; this.src = 'http://localhost:5000/uploads/profile_stub_image.png';"
              alt="user-profile"
            />
          </div>
          <div class="userInfo">
            <p class="font-medium">{{ user.name }}</p>
            <p class="text-sm font-light">@{{ user.username }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      users: 'users/getSearchUsers',
      errorMsg: 'users/getErrorMsg',
    }),
  },
  methods: {
    handleNoImage() {
      this.onerror = null
      this.src = 'http://localhost:5000/uploads/profile_stub_image.png'
    },
  },
}
</script>

<style></style>
