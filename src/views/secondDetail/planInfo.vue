<!-- 计划 -->
<template>
    <div class="plan-info">
        <div class="tab">
            <p class="location" @click="location = item.location" v-for="(item, index) in planData.location" :key="index" :class="item.location == location ? 'active' : ''">
                {{item.location_name.length == '3' ? item.location_name.slice(1, 2) : item.location_name.slice(0, 1)}}
                <transition name="fade">
                    <span class="line" v-show="item.location == location"></span>
                </transition>   
            </p>           
        </div>
        <div class="tab">
            <p class="forecast-qantity" @click="forecastQuantity = item.forecast_quantity" v-for="(item, index) in planData.forecast_quantity_list" :key="index" :class="item.forecast_quantity == forecastQuantity ? 'active' : ''">
                {{item.forecast_quantity}}码榜
                <transition name="fade">
                    <span class="line" v-show="item.forecast_quantity == forecastQuantity"></span>
                </transition>   
            </p>           
        </div>
        <div class="content">
            <div class="top">专家: {{this.$route.query.name}} 1天/{{planData.wheel_quantity}}轮 1轮/{{planData.wheel_expect_quantity}}期 </div>
            <ul v-for="(item, index) of planData.expert_forecast_data_list" :key="index">
                <li class="title">第{{planData.expert_forecast_data_list.length - index}}轮  待开奖 : {{calcOopenNumToTal(item).noOpen}}  中 : {{calcOopenNumToTal(item).noWin}}  胜率 : {{calcOopenNumToTal(item).winPro}}</li>
                <li class="item">
                    <p>期</p>
                    <p>轮次</p>
                    <p>期号</p>
                    <p>预测</p>
                    <p>开奖</p>
                    <p>结果</p>
                    <p>盈利</p>
                </li>
                <li class="item" v-for="(obj, key) in item" :key="key">
                    <p>{{item.length - key}}</p>
                    <p>第{{planData.expert_forecast_data_list.length - index}}轮</p>
                    <p>{{obj.expect.slice(-4)}}</p>
                    <p>
                        <span :style="{color: obj.open_number == temp ? 'red' : ''}" v-for="(temp,k) in obj.forecast_numbers" :key="k"><template v-if="k!=0">,</template>{{temp}}</span>
                    </p>
                    <p>
                        <span v-if="obj.status == 0">待开</span>
                        <span v-else v-for="(temp,k) in obj.open_numbers" :key="k"><span style="color: red" v-show="obj.open_number == temp">{{temp}}</span></span>
                    </p>
                    <p>
                        <span v-if="obj.status == 0">待开</span>
                        <span style="color: green" v-else-if="obj.forecast_numbers.indexOf(obj.open_number) != -1">中</span>
                        <span style="color: red" v-else>挂</span>
                    </p>
                    <p>待开</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import { mapGetters, mapActions } from "vuex";
import { getCurTime } from "@/js/utils";

export default {
    components: { Tab, TabItem },
    data() {
        return {
            planData: {},
            expertId: 0,    //专家id
            forecastQuantity: 0, //规则(码)
            location: 1, //名次
        }
    },
    created() {
        this.expertId = this.$route.query.expertId || 0;
        this.forecastQuantity = this.$route.query.forecastQuantity || 0;
        this.location = this.$route.query.location || 1;
        this.getForecastPlanFunc(
            this.curLotteryCode,
            this.expertId,
            getCurTime("YYYY-MM-DD"),
            this.forecastQuantity,
            this.location
        );
    },
    methods: {
        ...mapActions(["getForecastPlan"]),
        getForecastPlanFunc(code, expert_id, open_date, forecast_quantity, location) {
            this.getForecastPlan({
                code: code,
                expert_id: expert_id || 0,
                open_date: open_date,
                forecast_quantity: forecast_quantity || 0,
                location: location || 0
            }).then(res => {
                if(res.code == 200) {
                    this.planData = res.data
                } else {
                    // console.log('error')
                }
            })
        },
        // 计算开奖统计
        calcOopenNumToTal(item) {
            let noOpen = 0;
            let win = 0;
            let noWin = 0;
            let winPro = 0;
            item.forEach(obj => {
                if (obj.status == 0) {
                noOpen++;
                }
                if (obj.result == 0) {
                noWin++;
                }
                if (obj.result == 1) {
                win++;
                }
            });
            winPro = ((win / (item.length - noOpen)) * 100).toFixed(2) + "%";
            return {
                noOpen: noOpen,
                win: win,
                noWin: noWin,
                winPro: winPro
            };
        },
    },
    computed: {
        ...mapGetters(["curLotteryCode"])
    },
    mounted() {

    },
    watch: {
        curLotteryCode: function() {
            this.getForecastPlanFunc(
                this.curLotteryCode,
                this.expertId,
                getCurTime("YYYY-MM-DD"),
                this.forecastQuantity,
                this.location
            );
        },
        expertId() {
            this.getForecastPlanFunc(
                this.curLotteryCode,
                this.expertId,
                getCurTime("YYYY-MM-DD"),
                this.forecastQuantity,
                this.location
            );
        },
        location() {
            this.getForecastPlanFunc(
                this.curLotteryCode,
                this.expertId,
                getCurTime("YYYY-MM-DD"),
                this.forecastQuantity,
                this.location
            );
        },
        forecastQuantity(){
            this.getForecastPlanFunc(
                this.curLotteryCode,
                this.expertId,
                getCurTime("YYYY-MM-DD"),
                this.forecastQuantity,
                this.location
            );
        }
    }
}
</script>

<style lang="scss" scoped>
    .plan-info{ 
        .tab{
            width: 100%;display: flex;justify-content: space-around;background: #fff;color: gray;font-size: 15px;border-bottom: 1px solid #e6e6e6;
            p{
                height: 100%;line-height: 41px;text-align: center;position: relative;
                .line{
                    width: 100%;height: 2px;position: absolute;background: #0072c6;bottom: 0;left: 0;
                }
            }
            .location{width: 10%;}
            .forecast-qantity{width: 33.33%;}
            .active{color:#0072c6}
            .fade-enter-active, .fade-leave-active {
                transition: opacity .5s
            }
            .fade-enter, .fade-leave-active {
                opacity: 0
            }
        }
        .content{
            //padding-top: 44px;
            .top{
                height: 41px;text-align: center;font-size: 13px;color: #666;line-height: 41px;
            }
            .title{
                height: 31px;text-align: center;font-size: 15px;line-height: 31px;color: #1089e0;background: #f2f9ff
            }
            .item{
                display: flex;height: 41px;align-items: center;font-size: 13px;color: #777;box-sizing: border-box;border-bottom: 1px solid #f1f1f1;
                P{text-align: center;}
                P:nth-child(1) {width: 8%;}
                P:nth-child(2) {width: 13%;}
                P:nth-child(3) {width: 17%;}
                P:nth-child(4) {width: 25%;}
                P:nth-child(5) {width: 10%;}
                P:nth-child(6) {width: 12%;}
                P:nth-child(7) {width: 15%;}  
            }
            .item:nth-child(odd){background: #fff }
            .item:nth-child(even){background: #f5f7fb}
        }
    }
</style>