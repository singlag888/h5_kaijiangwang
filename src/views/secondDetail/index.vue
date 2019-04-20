<template>
    <div>
        <div class="lotteryInfo" v-for="(item, index) in lotteryCodes" :key="index">
            <LotteryInfo :result="item" v-show="item.code == curLotteryCode"/>
        </div>
        <tab :line-width=2 active-color='#0072c6'>
            <tab-item class="vux-center" :selected="path === item.path" v-for="(item, index) in tabControl" @on-item-click="onItemClick(item.path)" :key="index">{{item.label}}</tab-item>
        </tab>
        <div class="second-views">
            <router-view/>
        </div>    
    </div>
</template>

<script>
import LotteryInfo from '@/components/lotterydetail/LotteryInfo'
import { Tab, TabItem } from 'vux'
import { mapGetters, mapActions } from "vuex";
import { formatTime } from "@/js/utils";

export default {
    components: { LotteryInfo, Tab, TabItem },
    data() {
        return {
            path:'',
            tabControl: this.$store.state.tabControl,
            curSelectTime: new Date()
        }
    },
    methods: {
        ...mapActions([
            "getLotteryData", 
            "getLongDragon",
            "getSidesTotal", 
            "getForecastRanking",
            "getForecastPlanIndex", 
            "getForecastOverview"
        ]),
        onItemClick (path) {
            this.$router.replace({path: path})
        }
    },
    computed: {
        ...mapGetters(["lotteryCodes", "curLotteryCode", "socketOpenResult"])
    },
    watch: {
        socketOpenResult:function() {       
            if(this.socketOpenResult.code == this.curLotteryCode){
                //历史记录
                this.getLotteryData({
                    open_date: formatTime(this.curSelectTime, "YYYY-MM-DD"),
                    code: this.curLotteryCode
                });
                // 长龙
                this.getLongDragon({ code: this.curLotteryCode });
                // 双面统计
                this.getSidesTotal({
                    open_date: formatTime(this.curSelectTime, "YYYY-MM-DD"),
                    code: this.curLotteryCode
                });
                //预测计划-排行榜(首页)
                this.getForecastRanking({code: this.curLotteryCode});
            }
        },
        $route(to, from) {
            this.path = to.path
        }
    },
    mounted() {
        this.path = this.$route.path
        if( this.path == '/second-detail/planInfo') {
            this.path = '/second-detail/plan'
        }
        //历史记录
        this.getLotteryData({
            open_date: formatTime(this.curSelectTime, "YYYY-MM-DD"),
            code: this.curLotteryCode
        });
        // 长龙
        this.getLongDragon({ code: this.curLotteryCode });
        // 双面统计
        this.getSidesTotal({
            open_date: formatTime(this.curSelectTime, "YYYY-MM-DD"),
            code: this.curLotteryCode
        });
        //预测计划-排行榜(首页)
        this.getForecastRanking({ code: this.curLotteryCode });
        //预测计划首页
        // this.getForecastPlanIndex();
        //预测计划 -- 概貌
        // this.getForecastOverview({
        //     code: this.curLotteryCode
        // });
        // console.log(this.curLotteryCode)
    }
}
</script>

<style lang="scss" scoped>
    .second-views{
        padding-top: 44px
    }
</style>
