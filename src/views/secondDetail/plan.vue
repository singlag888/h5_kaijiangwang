<!-- 计划 -->
<template>
    <div class="plan">
        <tab :line-width=2 active-color='#0072c6'>
            <tab-item class="vux-center" :selected="activeTab === item.name" v-for="(item, index) in forecastRanking" @on-item-click="onItemClick(item.name)" :key="index">{{item.name}}码榜</tab-item>
        </tab>
        <div class="container">
            <div v-show="activeTab == list.name" v-for="(list, index) in forecastRanking" :key="index">
                <ul>
                    <li class="title">
                        <p>专家名称</p>
                        <p>车道</p>
                        <p>码数</p>
                        <p>成绩</p>
                        <p>胜率</p>
                        <p>盈利</p>
                        <p>查看</p>
                    </li>
                    <li class="content" v-for="(item, index) in list.list" :key="index + 'b'">
                        <p>{{item.name}}</p>
                        <p>{{item.location}}</p>
                        <p>{{item.forecast_quantity}}码</p>
                        <p>{{item.result_sum}}中{{item.last_sum}}</p>
                        <p>{{Math.floor(item.result * 10000) / 100}}%</p>
                        <p>493</p>
                        <p @click="goPlanInfo(item.expert_id, item.forecast_quantity, item.location, item.name)">查看</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import { mapGetters, mapActions } from "vuex";
import { formatTime, rankingMap } from "@/js/utils";

export default {
    components: { Tab, TabItem },
    data() {
        return {
            activeTab: 5,
            curSelectTime: new Date()
        }
    },
    computed: {
        ...mapGetters(["curLotteryCode", "forecastRanking"])
    },
    methods: {
        onItemClick(name) {
            this.activeTab = name
        },
        goPlanInfo(expert_id, forecast_quantity, location, name) {
            this.$router.replace({
                path: '/second-detail/planInfo', 
                query:{'expertId': expert_id, 'forecastQuantity': forecast_quantity, 'location': rankingMap(location), 'name': name}
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .plan{
        .container{
            padding-top: 44px;
            li{
                width: 100%;height: 41px;font-size: 13px;color: #777;box-sizing: border-box;border-bottom: 1px solid #f1f1f1;display: flex;align-items: center;
                P{text-align: center;}
                P:nth-child(1) {width: 18%;}
                P:nth-child(2) {width: 15%;}
                P:nth-child(3) {width: 10%;}
                P:nth-child(4) {width: 15%;}
                P:nth-child(5) {width: 15%;}
                P:nth-child(6) {width: 15%;}
                P:nth-child(7) {width: 12%;}
            }
            .title{
                background: #fbfbfb
            }
            .content:nth-child(odd){
                background: #f5f7fb
            }
            .content:nth-child(even){
                background: #fff
            }
        }
    }
</style>
