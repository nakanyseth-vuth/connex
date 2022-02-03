<template>
  <div>
    <Header />

    <div>
      <div class="flex justify-center pb-10 mt-10">
        <img
          :src="profilePrefix + user.profileImage"
          onerror=" this.onerror = null; this.src = 'http://localhost:5000/uploads/profile_stub_image.png';"
          class="h-40 w-40 rounded-full object-cover"
          alt="profile-picture"
        />
        <div class="ml-10">
          <div class="flex items-center">
            <div class="mb-3 mr-3">
              <h2
                class="block leading-relaxed font-medium text-gray-700 text-xl md:text-3xl"
              >
                {{ user.name }}
              </h2>
              <h2
                class="block leading-relaxed font-light text-gray-700 text-sm md:text-md"
              >
                {{ '@' + user.username }}
              </h2>
            </div>

            <button
              class="flex items-center ml-3 border border-blue-600 hover:bg-blue-600 hover:text-white rounded outline-none focus:outline-none bg-blue-600 text-white text-sm py-1 px-2"
              v-if="!ownProfile && !isFollowed"
            >
              <span class="block" @click="followUser">Follow</span>
            </button>
            <button
              class="flex items-center ml-3 border hover:bg-gray-600 hover:text-white rounded outline-none focus:outline-none bg-gray-500 text-white text-sm py-1 px-2"
              v-if="isFollowed"
            >
              <span class="block" @click="unfollowUser">Unfollow</span>
            </button>

            <button
              class="flex items-center ml-3 border border-blue-600 hover:bg-blue-600 hover:text-white rounded outline-none focus:outline-none bg-blue-600 text-white text-sm py-1 px-2"
              @click="openModal"
              v-if="ownProfile"
            >
              <span class="block">Edit Profile</span>
            </button>
          </div>
          <ul class="flex flex-wrap justify-content-around items-center gap-3">
            <li>
              <span class="block text-base flex"
                ><span class="font-bold mr-2">{{ posts.length }} </span>
                Posts</span
              >
            </li>
            <li>
              <span class="cursor-pointer block text-base flex"
                ><span class="font-bold mr-2"
                  >{{ user.followers.length }}
                </span>
                Followers</span
              >
            </li>
            <li>
              <span class="cursor-pointer block text-base flex"
                ><span class="font-bold mr-2"
                  >{{ user.followings.length }}
                </span>
                Followings</span
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
      <article class="mt-10">
        <!-- post card -->

        <div v-for="post in posts" :key="post._id"
          class="flex bg-white border shadow-lg rounded-lg mx-4 my-5 md:mx-auto w-3/5"
        >
          <!--horizantil margin is just for display-->
          <div class="flex items-start px-4 py-6">
            <img
              class="w-12 h-12 rounded-full object-cover mr-4 shadow"
              :src="profilePrefix + user.profileImage"
              alt="avatar"
            />
            <div class="">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                  {{ post.user.name}}
                </h2>
              </div>
              <!-- <p class="text-gray-700">Posted: {{ (post.date_created.split('T')[0]).split('-').reverse().join('-') }}</p> -->
              <p class="text-gray-700">Posted: {{ $moment(post.date_created).fromNow() }}</p>
              <p class="mt-3 text-gray-700 text-sm">
                {{ post.post_text}}
              </p>
              <div class="mt-4 flex items-center">
                <!-- <div class="flex mr-2 text-gray-700 text-sm mr-3">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>12</span>
                </div>
                <div class="flex mr-2 text-gray-700 text-sm mr-8">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                  <span>8</span>
                </div>
                <div class="flex mr-2 text-gray-700 text-sm mr-4">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span>share</span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </article>
      <div v-if="posts.length == 0" class="w-1/5 py-3 shadow-md ui-sans-serif text-lg rounded-3xl mx-auto text-center bg-gray-50"> Nothing to show</div>
      <pre>{{ posts }}</pre>
      
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
    const userId = store.state.users.targetUser._id
    await store.dispatch('post/getPosts', userId)
  },
  name: 'ProfilePage',
  components: { Header, ProfileEdit },
  middleware: 'protected',

  data() {
    return {
      isOpenModal: false,
    }
  },
  head() {
    return {
      title: this.user.name,
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
    ownProfile() {
      return this.user._id === this.$store.state.users.user._id
    },
    isFollowed() {
      return this.$store.state.users.user.followings.some((following) => {
        return following._id === this.user._id
      })
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
    async followUser() {
      this.$modal.show({
        type: 'info',
        title: 'Follow New User',
        body: 'Do you want to follow this user?',
        primary: {
          label: 'Yes, I want to',
          theme: 'blue',
          action: () =>
            this.$store.dispatch('users/followUser', this.user.username),
        },
        secondary: {
          label: "No, I don't",
          theme: 'white',
          action: () => this.$modal.hide,
        },
      })
    },
    async unfollowUser() {
      this.$modal.show({
        type: 'danger',
        title: 'Unfollow User',
        body: 'Are you sure you want to unfollow this user?',
        primary: {
          label: 'Yes, I want to',
          theme: 'red',
          action: () =>
            this.$store.dispatch('users/unfollowUser', this.user.username),
        },
        secondary: {
          label: "No, I don't",
          theme: 'white',
          action: () => this.$modal.hide,
        },
      })
    },
  },
}
</script>
