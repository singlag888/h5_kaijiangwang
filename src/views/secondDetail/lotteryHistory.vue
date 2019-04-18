<!-- 开奖记录 -->
<template>
    <div class="history">
        <ul>
            <li class="item">
                <div class="left">
                    <span>期号</span>
                    <span>时间</span>
                </div>
                <div class="title">
                    <span v-for="(item, index) in historyTab" :key="index" :class="activeTab == item.name ? 'active' : ''" @click="changeTab(item.name)">{{item.label}}</span>
                </div>
            </li>
            <li class="item" v-for="(item, index) in lotteryData" :key="index">
                <div class="left">
                    <span>{{item.expect.slice(-4)}}</span>
                    <span>{{item.open_datetime.split(' ')[1].slice(0,5)}}</span>
                </div>
                <!-- 号码 -->
                <div class="square number-square liu_he_cai margin" v-show="activeTab == 'open_numbers'">
                    <p :class="cur_lottery_type == 'pk10' ? 'num' + num : cur_lottery_type == 'liu_he_cai' ? 'liu' + num : 'circle'" v-for="(num, index) in item.data.open_numbers" :key="index">{{num}}</p>
                </div>
                <!-- 单双 -->
                <div class="history-square margin" v-show="activeTab == 'single_double'">
                    <p class="square" :class="num == '单' ? 'odd' : 'even'" v-for="(num, index) in item.data.single_double" :key="index">{{num}}</p>
                </div>
                <!-- 大小 -->
                <div class="history-square margin" v-show="activeTab == 'big_small'">
                    <p class="square" :class="num == '小' ? 'odd' : 'even'" v-for="(num, index) in item.data.big_small" :key="index">{{num}}</p>
                </div>
                <!-- 龙虎 -->
                <div class="history-square margin" v-show="activeTab == 'dragon_tiger'">
                    <p class="square dragon-tiger" v-for="(sum,index) in item.data.first_second_sum" :key="index + 'a'">{{sum}}</p>
                    <p class="square dragon-tiger" v-for="(num, index) in item.data.dragon_tiger" :key="index + 'b'">{{num}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    components: {  },
    data() {
        return {
            activeTab:'open_numbers',
            historyTab:[
                {label:'号码',name:'open_numbers'},
                {label:'单双',name:'single_double'},
                {label:'大小',name:'big_small'},
                {label:'龙虎',name:'dragon_tiger'}
            ]
        }
    },
    computed: {
        ...mapGetters(["lotteryData", "cur_lottery_type"])
    },
    methods: {
        changeTab(name) {
            this.activeTab = name
        }
    },
    mounted() {

    },
    watch: {
        
    }
}
</script>

<style lang="scss" scoped>
    .history{
        background: #fff;
        .item{
            display: flex;height: 36px;line-height: 36px;border-bottom: 1px solid #f1f1f1;
            .left{
                width: 82px;box-sizing: border-box;display: flex;
                span{
                    font-size: 12px;color: #777;text-align: center;width: 50%;
                }
            }
            .title{
                box-sizing: border-box;display: flex;justify-content: space-around;align-items: center;flex: 1;//padding:0 15px;width: 100%;
                span{
                    border-radius: 5px;height: 20px;line-height: 20px;padding: 0 5px;font-size: 12px;color: #666;
                }
                .active{
                    color: #fff;background: red;
                }
            }
            .margin{margin-left: 5px;white-space:nowrap;overflow: hidden;}
            .square{
                color: #fff;
                p{
                    display: inline-block;margin-right: 5px;text-align: center;width: 22px;height: 22px;line-height: 22px;
                }
                .circle{background: #3771de;border-radius: 50%}
            } 
            .history-square{
                .square{
                    display: inline-block;margin-right: 5px;text-align: center;border-radius: 5px;width: 21px;height: 21px;line-height: 21px;color: #fff;
                }
                .odd{
                    background: #569ebb
                }
                .even{
                    background: #ff7300
                }
                .dragon-tiger{color: #000;}
            }
        }
    }
</style>
