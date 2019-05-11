<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view/>
    </div>
    <!-- loading -->
    <div v-show="showLoading" class="modal">
      <loading :show="showLoading" text="loading..."></loading>
    </div>
     <!-- 推送 -->
    <div class="push">
      <p class="item" v-for="(item, index) in pushArr" :key="index">
        {{item.name}}出现【{{item.last_count}}中{{item.result_sum}}】<span class="info" @click="goPlanInfo(item.code, item.code_type, item.expert_id, item.forecast_quantity, item.location)">查看</span> 
      </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapActions, mapGetters } from "vuex";
import { Loading  } from 'vux'

export default {
  components:{ Header, Loading },
  name: 'App',
  data() {
    return {
      pushArr: []
    }
  },
  created() {

  },
  methods: {
    ...mapActions(["getLotteryCodes", "chengecurLotteryCode", "chenge_cur_lootery_type"]),
    goPlanInfo(code, type, expert_id, forecast_quantity, location) {
      // 修改彩种的code
      this.chengecurLotteryCode(code);
      // 修改彩种的type
      this.chenge_cur_lootery_type(type);
      this.$router.push({
        path: '/second-detail/planInfo', 
        query:{'expertId': expert_id, 'forecastQuantity': forecast_quantity, 'location': location}
      })
    }
  },
  computed: {
    ...mapGetters(['showLoading', 'socketPlanResult'])
  },
  mounted() {
    this.getLotteryCodes()
  },
  watch: {
    socketPlanResult() {
      this.pushArr.push(this.socketPlanResult)
      // 推送最多显示三条
      if(this.pushArr.length > 3) {
        this.pushArr.shift()
      }
    },
    pushArr() {
      let _this = this
      setTimeout(() => {
        if(_this.pushArr.length != 0) {
          _this.pushArr.shift()
        }
      },10000)
    }
  }
}
</script>

<style lang="scss">
    #app {
      max-width: 640px;
      .main{
        width: 100%; padding-top: 50px;padding-bottom: 10px;
      }
      .modal{
        position: fixed;top: 0;left: 0;bottom: 0;right: 0;background: rgba(0,0,0,.5);z-index: 200;
        .weui-toast{
          top: 50%;transform:translate(0, -50%)
        }
      }
      .push{
        position:fixed;bottom: 5px;left: 50%;transform: translate(-50%, 0);color: #fff;
        .item{
          padding: 5px 10px;margin-bottom: 5px;background: rgba(0,0,0,.6);border-radius: 5px;text-align: center; white-space:nowrap;font-size: 14px;
          .info{color: #FFFF00;}       
        }
        .item:last-child{
          margin-bottom: 0;
        }
      }
    }
</style>
