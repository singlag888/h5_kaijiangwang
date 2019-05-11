<template>
    <div class="header">
        <x-icon v-if="$route.meta.showBack" type="ios-arrow-left" size="30" @click="goBack"></x-icon>
        <img class="header-img" :src="baseSettingData.site_logo" alt="">
        <div v-if="$route.meta.showBack" class="navicon" @click="showTab">
            <x-icon type="navicon" size="35" style="top:0;left:0"></x-icon>
        </div>
    </div>    
</template>

<script>
import { mapGetters } from "vuex";

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
            this.$store.commit('SHOW_DRAWER_TAB', !this.showDrawerTba)
       }
   },
   computed: {
       ...mapGetters(['baseSettingData']),
        showDrawerTba() {
            return this.$store.state.showDrawerTba
        }
   },
   mounted() {

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
            position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 145px;
        }
        .navicon{
            position: absolute;right: 5px;width: 35px;height: 35px;top: 50%;transform: translate(0, -50%)
        }
    }
</style>
