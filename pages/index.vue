<template>
  <div class="container mx-auto max-w-6xl px-4">
    <div class="md:flex my-6 sm:my-8 md:my-16 lg:my-32 justify-between items-center">
      <div class="leading-normal mb-6">
        <div class="text-lg leading-loose max-w-md md:max-w-full mx-auto md:mx-0 lg:pr-24 xl:pr-32">
          <h1 class="text-5xl mb-6 font-bold hand font-handwritten">
            Hello! 🖐
          </h1>
          <p class="text-gray-600">
            I'm <strong class="text-gray-800">Diego Orellana</strong>, a multidisciplinary web developer from <strong class="text-gray-800">Santiago, Chile.</strong>
          </p>
          <p class="text-gray-600">
            I'm currently available for small & big projects. If you'd like to talk about your projects or an advice about product design, just shot me an email.
          </p>
          <div class="mt-6">
            <nuxt-link to="/contact" class="bg-red-500 text-red-100 tracking-wide text-sm py-2 px-3 rounded hover:bg-red-900 md:inline-block block text-center shadow-md">Contact me</nuxt-link>
          </div>
        </div>
      </div>
      <div class="rounded overflow-hidden shadow-md">
        <img src="~static/me.jpeg" alt="me">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hand:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
