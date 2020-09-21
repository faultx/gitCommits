<template>
  <div class="container-fluid">
    <div class="row" v-if="vuexGetPageNotFoundHeader ">
      <Header></Header>
    </div>
    <div class="row">
      <slot />
    </div>
    <div class="row">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  },
  computed:{
    vuexGetPageNotFoundHeader(){
      return this.$store.getters.getPageNotFoundHeader
    }
  },
}
</script>
