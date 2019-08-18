<template>
  <div class="container mx-auto max-w-6xl px-4">
    <div class="py-4 flex justify-between">
      <a href="/" class="logo" alt="home">
        <svg class="h-16 w-16" version="1.1" viewBox="0 0 640 401" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(0 1)">
              <polygon points="80 0 0 0 0 400 80 400 220 400 300 320 80 320 80 80 300 80 220 0" fill="#DC5959"/>
              <polygon points="220 80 300 80 300 320 220 320" fill="#BA4949" />
            </g>
            <g transform="translate(340 1)">
              <polygon points="80 400 220 400 300 320 80 320 0 320" fill="#DC5959" />
              <polygon transform="translate(150 40) rotate(180) translate(-150 -40)" points="80 80 220 80 300 1.4211e-14 80 1.4211e-14 0 1.4211e-14" fill="#DC5959" />
              <polygon points="220 80 300 80 300 320 220 320" fill="#BA4949" />
              <polygon points="0 80 80 80 80 320 0 320" fill="#BA4949" />
            </g>
          </g>
        </svg>
      </a>
      <!-- Links -->
      <ul class="md:flex items-center font-bold text-gray-800 text-lg hidden">
        <li class="mr-4 hover:text-red-700 cursor-not-allowed soon">Blog (👷)</li>
        <li class="mr-4 hover:text-red-700 cursor-not-allowed soon">Portfolio (👷)</li>
        <li class="hover:text-red-700"><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .soon {
    position: relative;
  }

  .soon:hover::after {
    opacity: 1;
  }

  .soon::after {
    @apply .font-handwritten;
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

  .logo {
    position: relative;
  }
  .logo:hover::after, .logo:hover::before{
    opacity: 1;
  }

  .logo::before {
    @apply .font-handwritten;
    font-size: 30px;
    content: "let's";
    position: absolute;
    right: 100%;
    margin-right: 20px;
    margin-bottom: 10px;
    bottom: 0;
    opacity: 0;
    transition: .3s opacity;
  }

  .logo::after {
    @apply .font-handwritten;
    font-size: 30px;
    content: 'it!';
    position: absolute;
    left: 100%;
    margin-left: 20px;
    margin-bottom: 10px;
    bottom: 0;
    opacity: 0;
    transition: .3s opacity;
  }
</style>
