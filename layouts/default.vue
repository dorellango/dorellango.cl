<template>
  <div class="bg-gray min-h-screen border-t-4 border-red-700">
    <Header />
    <nuxt />
    <Bottom />
  </div>
</template>
<script>
import Header from '~/components/Header'
import Bottom from '~/components/Bottom'

export default {
  components: { Header, Bottom }
}
</script>
