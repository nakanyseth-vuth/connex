<template>
  <Homepage />
</template>

<script>
import Homepage from '../components/Homepage/Homepage.vue'
export default {
  asyncData({ store, redirect }) {
    // const isAuth = store.getters['users/isAuth']
    // // If the user is not authenticated
    // if (!isAuth) {
    //   const REDIRECT_URL = '/login'
    //   return redirect(REDIRECT_URL)
    // }

    console.log(store.getters['users/user'])
  },
  components: { Homepage },
  name: 'IndexPage',
}
</script>
