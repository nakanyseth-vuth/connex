<template>
  <div>
    <Header />

    <div>
      <div class="flex justify-center pb-10 mt-10">
        <img
          :src="profilePrefix + user.profileImage"
          class="h-40 w-40 rounded-full object-cover"
          alt="username"
        />
        <div class="ml-10">
          <div class="flex items-center">
            <div class="mb-3 mr-3">
              <h2
                class="block leading-relaxed font-medium text-gray-700 text-3xl"
              >
                {{ user.name }}
              </h2>
              <h2
                class="block leading-relaxed font-light text-gray-700 text-md"
              >
                {{ '@' + user.username }}
              </h2>
            </div>

            <!-- <a class="cursor-pointer h-7 px-3 ml-3 focus:outline-none hover:border-transparent text-center rounded border border-gray-400 hover:bg-blue-500 hover:text-white bg-transparent text-gray-500 font-semibold">Editar perfil</a> -->

            <button
              class="flex items-center ml-3 border border-blue-600 hover:bg-blue-600 hover:text-white rounded outline-none focus:outline-none bg-blue-600 text-white text-sm py-1 px-2"
            >
              <span class="block">Follow</span>
            </button>
            <button
              class="flex items-center ml-3 border border-blue-600 hover:bg-blue-600 hover:text-white rounded outline-none focus:outline-none bg-blue-600 text-white text-sm py-1 px-2"
              @click="openModal"
            >
              <span class="block">Edit Profile</span>
            </button>

            <!-- <button class="ml-5">
              <svg
                aria-label="Options"
                class="_8-yf5"
                color="#262626"
                fill="#262626"
                height="32"
                role="img"
                viewBox="0 0 24 24"
                width="32"
              >
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
              </svg>
            </button> -->
            <!-- <a class="cursor-pointer ml-2 p-1 border-transparent text-gray-700 rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                        aria-label="Notifications">
                            <svg class="h-8 w-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a> -->
          </div>
          <ul class="flex justify-content-around items-center">
            <li>
              <span class="block text-base flex"
                ><span class="font-bold mr-2">{{ posts.length }} </span>
                Posts</span
              >
            </li>
            <li>
              <span class="cursor-pointer block text-base flex ml-5"
                ><span class="font-bold mr-2"
                  >{{ user.followers.length }}
                </span>
                Followers</span
              >
            </li>
            <li>
              <span class="cursor-pointer block text-base flex ml-5"
                ><span class="font-bold mr-2"
                  >{{ user.followings.length }}
                </span>
                followed</span
              >
            </li>
          </ul>
          <br />
          <div class="">
            <h1 class="text-base font-bold font-light"></h1>
            <span class="text-base"> {{ user.bio }}</span
            ><br />
            <!-- <a class="block text-base text-blue-500 mt-2" target="_blank"></a> -->
          </div>
        </div>
      </div>
      <div class="border-b border-gray-300"></div>
      <article class="mt-5 flex justify-around">
        <div
          class="cursor-pointer relative"
          style="width: 300px; height: 300px"
        >
          <img
            src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            class="foto w-full h-full object-cover"
            alt="description"
          />
        </div>
        <div
          class="cursor-pointer relative"
          style="width: 300px; height: 300px"
        >
          <img
            src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            class="foto w-full h-full object-cover"
            alt="description"
          />
        </div>
        <div
          class="cursor-pointer relative"
          style="width: 300px; height: 300px"
        >
          <img
            src="https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            class="foto w-full h-full object-cover"
            alt="description"
          />
        </div>
      </article>
    </div>
    <ProfileEdit @closeModal="closeModal" v-if="isOpenModal" />
  </div>
</template>

<script>
import Header from '~/components/Utils/Header.vue'
import ProfileEdit from '~/components/Modal/ProfileEdit.vue'
import setToken from '~/utils/setToken'
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, params }) {
    await store.dispatch('users/getUser')
    await store.dispatch('users/getTargetUser', params.id)
    await store.dispatch('post/getPosts', params.id)
  },
  name: 'ProfilePage',
  components: { Header, ProfileEdit },
  middleware: 'protected',

  data() {
    return {
      isOpenModal: false,
    }
  },
  created() {
    const token = this.$cookies.get('token')
    if (token) {
      setToken(this.$axios, token)
    }
  },
  computed: {
    ...mapGetters({
      user: 'users/getTargetUser',
      posts: 'post/getPosts',
    }),
    profilePrefix() {
      return this.user.profileImage.includes('uploads')
        ? 'http://localhost:5000/'
        : ''
    },
  },
  methods: {
    openModal() {
      this.isOpenModal = true
      console.log(this.isOpenModal)
    },
    closeModal() {
      this.isOpenModal = false
      console.log(this.isOpenModal)
    },
  },
}
</script>
