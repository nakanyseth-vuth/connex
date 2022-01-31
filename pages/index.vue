<template>
  <Homepage />
</template>

<script>
import Homepage from '../components/Homepage/Homepage.vue'
export default {
  components: { Homepage },
  name: 'IndexPage',
  middleware: 'auth',
}
</script>
