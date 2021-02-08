<template>
  <div class="container">
      <div class="row"><Navigation></Navigation></div>
      <hr>
      <div class="row">
          <Products></Products>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Navigation,
    Products
  }
}
</script>
