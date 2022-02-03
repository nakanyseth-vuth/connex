<template>
  <nav class="bg-white shadow px-0 md:px-48 border-b border-gray-400">
    <div class="mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <nuxt-link to="/" class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://nuxtjs.org/design-kit/colored-logo.png"
              alt="Workflow logo"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://nuxtjs.org/design-kit/colored-logo.png"
              alt="Workflow logo"
            />
          </div>
        </nuxt-link>
        <div class="flex-1 flex items-center justify-center px-2 lg:ml-12">
          <SearchBar />
        </div>

        <!-- icons-->
        <div class="lg:ml-4 flex items-center">
          <!-- <nuxt-link to="/">
            <button
              class="flex-shrink-0 p-3 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                aria-label="Home"
                class="_8-yf5"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </nuxt-link> -->

          <div class="relative flex-shrink-0">
            <nuxt-link :to="'/profile/' + user.username">
              <button
                class="flex rounded-lg p-2 bg-green-500 transition duration-150 ease-in-out hover:bg-gray-600 text-white"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
              >
                {{ user.name }}
              </button>
            </nuxt-link>
          </div>
          <!-- Logout -->
          <div class="ml-3">
            <button
              class="flex-shrink-0 p-3 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              @click="logout"
            >
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from '~/components/Search/SearchBar'
export default {
  name: 'IndexPage',
  components: {
    SearchBar,
  },
  computed: {
    ...mapGetters({
      user: 'users/getUser',
    }),
  },
  methods: {
    logout() {
      this.$modal.show({
        type: 'info',
        title: 'Logout',
        body: 'Do you want to logout?',
        primary: {
          label: 'Yes, I need to go',
          theme: 'blue',
          action: () => this.logoutAction(),
        },
        secondary: {
          label: 'Stay here',
          theme: 'white',
          action: () => this.$modal.hide,
        },
      })
    },

    logoutAction() {
      this.$cookies.removeAll()
      this.$router.push('/login')
      this.$toast.success('You are logged out. See you again soon!')
    },
  },
}
</script>

<style></style>
