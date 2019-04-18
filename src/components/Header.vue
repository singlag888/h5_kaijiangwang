<template>
    <div class="header">
        <x-icon v-if="$route.meta.showBack" type="ios-arrow-left" size="30" @click="goBack"></x-icon>
        <img class="header-img" src="../../static/img/header.png" alt="">
        <!-- <div></div> -->
    </div>    
</template>

<script>

export default {
   data() {
       return {

       }
   },
   methods:{
       goBack() {
           this.$router.go(-1)
       }
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
    }
</style>
