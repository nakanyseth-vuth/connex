<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Utils/Header'
export default {
  async asyncData({ store }) {
    await store.dispatch('users/getUser')
  },
  components: { Header },
}
</script>

<style></style>
