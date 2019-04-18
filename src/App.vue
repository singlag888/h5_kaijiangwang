<template>
  <div id="app">
    <Header/>
      <div class="main">
        <router-view/>
      </div>
    <Footer/>
    <!-- <loading :show="show" text="loading..."></loading> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { Loading } from 'vux'

export default {
  components:{ Header, Footer },
  name: 'App',
  data() {
    return {
      show: true
    }
  },
  methods: {
    
  },
  computed: {

  }
}
</script>

<style lang="scss">
    #app {
      max-width: 640px;
      .main{
        width: 100%; padding-top: 50px;
      }
      
    }
</style>
