<!-- 首页彩票卡片 -->
<template>
    <ul class="lottery-card">
        <li class="item" v-for="(item, index) in lotteryCodes" :key="index">
            <div @click="goToSecondDetail(item.code, item.code_type, '/second-detail')">
                <LotteryInfo :result="item"/>
            </div>
            <div class="bottom">
                <p v-for="(tab, index) in tabControl" :key="index" @click="goToSecondDetail(item.code, item.code_type, tab.path)">{{tab.label}}</p>
            </div>
        </li>
    </ul>    
</template>

<script>
import LotteryInfo from './LotteryInfo'
import { mapGetters, mapActions } from "vuex";
import { formatTime } from "@/js/utils";

export default {
   components: { LotteryInfo },
   data() {
       return {
            tabControl: this.$store.state.tabControl,
            curSelectTime: new Date(),
       }
   },
   computed: {
       ...mapGetters(["lotteryCodes"])
   },
   methods: {
        ...mapActions([
            "chengecurLotteryCode",
            "chenge_cur_lootery_type",
            // "getLotteryExpect"
        ]),
        goToSecondDetail(code, type, path) {
            //开奖信息
            // this.getLotteryExpect(code);
            //修改彩种的code
            this.chengecurLotteryCode(code);
            //修改彩种的type
            this.chenge_cur_lootery_type(type);
            this.$router.push({path: path})
       }
   },
   mounted() {
       
   }
}
</script>

<style scoped lang="scss">
    .lottery-card{
        width: 100%; max-width: 640px;
        .item{
            background: #fff;border-bottom: 1px solid #e6e6e6;
            .bottom{
                display: flex;justify-content: flex-start;padding: 6px 10px;
                p{
                    font-size: 12px;padding: 3px 5px;border: 1px solid #eee;border-radius: 5px;margin-right: 5px;color: #777;
                }
            }
        }
    }
</style>
