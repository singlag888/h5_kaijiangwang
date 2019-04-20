<template>
    <div class="header">
        <x-icon v-if="$route.meta.showBack" type="ios-arrow-left" size="30" @click="goBack"></x-icon>
        <img class="header-img" src="../../static/img/header.png" alt="">
        <div v-if="$route.meta.showBack" class="navicon" @click="showTab">
            <x-icon type="navicon" size="35" style="top:0;left:0"></x-icon>
        </div>
    </div>    
</template>

<script>
import { mapState } from "vuex";

export default {
   data() {
       return {

       }
   },
   methods:{
       goBack() {
           if(this.showDrawerTba == true) {
               this.$store.commit('SHOW_DRAWER_TAB', false)
           }
           this.$router.go(-1)
       },
       showTab() {
           if(this.showDrawerTba == true) {
               this.$store.commit('SHOW_DRAWER_TAB', false)
           }else {
               this.$store.commit('SHOW_DRAWER_TAB', true)
           }
       }
   },
   computed: {
       ...mapState(['showDrawerTba'])
   }
}
</script>

<style scoped lang="scss">
    .header{
        width: 100%; max-width: 640px; height: 50px; background: #e54545; position: fixed;top: 0;left: 0;z-index: 100;
        .vux-x-icon {
            fill: #fff;position: absolute; left: 5px; top: 10px;
        }
        .header-img{
            width: 119px; height: 50px;position: absolute;top: 0;left: 50%;transform: translate(-50%,0)
        }
        .navicon{
            position: absolute;right: 5px;width: 35px;height: 35px;top: 50%;transform: translate(0, -50%)
        }
    }
</style>
