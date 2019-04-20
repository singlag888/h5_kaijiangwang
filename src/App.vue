<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view/>
    </div>
    <div class="tab-drawer" v-show="showDrawerTba">
      <ul>
        <li class="item" v-for="(item, index) in filterData(lotteryCodes)" :key="index">
          <div class="title">{{item.code_title}}</div>
          <div class="info">
            <span @click="goTo(obj.code, obj.code_type)" v-for="(obj, key) in lotteryCodes" :key="key" v-show="item.code_title == obj.code_title">{{obj.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <Footer/>
    <!-- <loading :show="show" text="loading..."></loading> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapGetters, mapState, mapActions } from "vuex";
import { formatTime } from "@/js/utils";
// import { Loading } from 'vux'

export default {
  components:{ Header, Footer },
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    // 转换数据过滤相同数据
    filterData(list) {
      let arr = [];
      let data = list;
      for(let i = 0; i < data.length; i++) {
        for(let j = i+1; j < data.length; j++) {
          if(data[i].code_title == data[j].code_title) {
            ++i
          }
        }
        arr.push(data[i])
      }
      return arr
    },
    ...mapActions(['chengecurLotteryCode', 'chenge_cur_lootery_type', 'getLotteryData', 'getLongDragon', 'getSidesTotal', 'getForecastRanking']),
    goTo(code, type) {
      this.chengecurLotteryCode(code);
      this.chenge_cur_lootery_type(type);
      this.$router.replace({path: '/second-detail/history'})
      this.$store.commit('SHOW_DRAWER_TAB', false)
      //历史记录
      this.getLotteryData({
        open_date: formatTime(this.curSelectTime, "YYYY-MM-DD"),
        code: code
      });
      // 长龙
      this.getLongDragon({ code: code });
      // 双面统计
      this.getSidesTotal({
        open_date: formatTime(this.curSelectTime, "YYYY-MM-DD"),
        code: code
      });
      //预测计划-排行榜(首页)
      this.getForecastRanking({ code: code });
    }
  },
  computed: {
    ...mapGetters(['lotteryCodes']),
    ...mapState(['showDrawerTba'])
  },
  mounted() {

  }
}
</script>

<style lang="scss">
    #app {
      max-width: 640px;
      .tab-drawer{
        width: 100%;position: fixed;top: 50px;bottom: 0;
        .item{
          display: flex;padding: 10px;border-bottom: 1px solid #e6e6e6;line-height: 25px;background: #fff;overflow: hidden;
          .title{
            width: 20%;
          }
          .info{width: 80%;
            span{margin-right: 10px;color: #999;font-size: 14px}
          }
        }
      }
      .main{
        width: 100%; padding-top: 50px;
      }
      
    }
</style>
