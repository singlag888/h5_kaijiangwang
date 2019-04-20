<!-- 首页彩票卡片 -->
<template>
    <div class="lottery-card">
        <div class="top">
            <span v-for="(item, index) in filterData(lotteryCodes)" :key="index" @click="changType(item.code_type)">{{item.code_title}}</span>
        </div>
        <ul class="box">
            <li class="item" v-for="(obj, key) in lotteryCodes" :key="key" v-show="curCodeType == 'hot' ? obj.is_hot == 1 : curCodeType == obj.code_type">
                <div @click="goToSecondDetail(obj.code, obj.code_type, '/second-detail')">
                    <LotteryInfo :result="obj"/>
                </div>
                <div class="bottom">
                    <p v-for="(tab, index) in tabControl" :key="index" @click="goToSecondDetail(obj.code, obj.code_type, tab.path)">{{tab.label}}</p>
                </div>
            </li>
        </ul>
    </div>
     
</template>

<script>
import LotteryInfo from './LotteryInfo'
import { mapGetters, mapActions } from "vuex";
import { formatTime } from "@/js/utils";

export default {
   components: { LotteryInfo },
   data() {
       return {
            curCodeType: 'hot',
            tabControl: this.$store.state.tabControl,
            curSelectTime: new Date(),
       }
   },
   computed: {
       ...mapGetters(["lotteryCodes"])
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
        changType(type) {
            this.curCodeType = type
        },
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
        .top{
            position: fixed;top: 50px;left: 0;height: 50px;background: #fff;width: 100%;line-height: 50px;
            span{margin-right: 5px}
        }
        .box{
            margin-top: 50px;
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
    }
</style>
