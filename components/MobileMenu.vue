<template>
  <div>
    <button
      class="focus:outline-none hover:text-red-700"
      @click="showMobileMenu = !showMobileMenu"
    >
      <svg
        class="h-8 w-8 md:hidden block fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path
          class="heroicon-ui"
          :d="[showMobileMenu ? 'M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' : 'M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z']"/>
      </svg>
    </button>
    <div v-show="showMobileMenu" class="absolute left-0 right-0 bg-white mt-8 h-full">
      <ul class="font-bold text-gray-800 text-lg text-center">
        <li class="hover:text-red-700 py-4 cursor-not-allowed soon">Blog (👷)</li>
        <li class="hover:text-red-700 py-4 cursor-not-allowed soon">Portfolio (👷)</li>
        <li class="hover:text-red-700 py-4"><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    }
  },
  watch: {
    $route() {
      this.showMobileMenu = false
    }
  }
}
</script>
<style scoped>
  .soon {
    position: relative;
  }

  .soon:hover::after {
    opacity: 1;
  }

  .soon::after {
    @apply .font-handwritten .-mt-4;
    content: '¡Soon!';
    text-align: center;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    font-size: small;
    opacity: 0;
    transition: .3s opacity;
  }
</style>
