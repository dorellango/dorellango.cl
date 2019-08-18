<template>
  <div class="container">
    <!-- Blog post -->
    <h1 class="text-2xl">
      {{ title }}
    </h1>
    <p>{{ name }}</p>
    <div v-html="body">
      <!-- Content -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, app }) {
    const fileContent = await import(`~/contents/${params.slug}.md`)
    const attr = fileContent.attributes
    return {
      name: params.slug,
      title: attr.title,
      body: fileContent.html
      // year: attr.year,
      // id: attr.id,
      // owner: attr.owner,
      // colors: attr.colors,
      // role: attr.role,
      // cardAlt: attr.cardAlt,
      // noMainImage: attr.noMainImage,
      // description: attr.description,
      // related: attr.related,
      // extraComponent: attr.extraComponent,
      // renderFunc: fileContent.vue.render,
      // staticRenderFuncs: fileContent.vue.staticRenderFns,
      // image: {
      //   main: attr.image && attr.image.main,
      //   og: attr.image && attr.image.og
      // }
    }
  }
}
</script>
