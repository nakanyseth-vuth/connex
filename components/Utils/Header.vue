<template>
  <nav class="bg-white shadow px-48 border-b border-gray-400">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
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
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                class="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              class="hidden h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- icons-->
        <div class="lg:ml-4 lg:flex lg:items-center">
          <nuxt-link to="/">
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
          </nuxt-link>

          <div class="ml-4 relative flex-shrink-0">
            <nuxt-link :to="'/profile/' + user.username">
              <button
                class="flex rounded-lg p-2 bg-green-400 transition duration-150 ease-in-out hover:bg-gray-600 text-white"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
              >
                {{ user.name }}
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      user: 'users/getUser',
    }),
  },
}
</script>

<style></style>
