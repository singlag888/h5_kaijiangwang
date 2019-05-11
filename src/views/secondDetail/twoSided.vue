<!-- 双面统计 -->
<template>
    <div class="two-sided" ref="outerWrapper">
        <div>
            <ul v-for="(thData, index) in sidesTotal && filterData(sidesTotal)" :key="index">
                <li class="title">{{thData.location_name}}</li>
                <li class="item" v-for="(item, key) in sidesTotal" v-show="thData.location == item.location" :key="key">
                    <p>{{item.result}}</p>
                    <p>{{item.count}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BScroll from 'better-scroll';

export default {
    computed: {
        ...mapGetters(["sidesTotal"])
    },
    methods: {
        // 转换数据过滤相同数据
        filterData(list) {
            let data = list;
            let obj = {};
            let arr = data && data.reduce(function(item, next) {
                obj[next.location] ? "" : (obj[next.location] = true && item.push(next));
                return item;
            }, []);

            arr && arr.forEach(temp => {
                let len = 0;
                data && data.forEach(item => {
                    if (temp.location == item.location) {
                        len++;
                    }
                });
                this.$set(temp, "len", len);
            });
            // console.log(arr)
            return arr;
        },
    },
    mounted() {
        this.$nextTick(() => {
            if(!this.scroll) {
                this.scroll = new BScroll(this.$refs.outerWrapper,{click: true})               
            }else {
                this.scroll.refresh()
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .two-sided{
        padding:8px;overflow: hidden;position:absolute;top: 166px;bottom: 10px;left: 0;right: 0;
        ul{
            box-shadow: 0 4px 4px rgba(0,0,0,.09);margin-bottom: 8px;
            li:last-child{
                border-right: none
            }
        }
        .title{
            height: 28px;line-height: 28px;color: #fff;font-size: 13px;text-align: center;background: #9da9c2;
        }
        .item{
            border-right: 1px solid #e6e6e6;background: #fff;width: 25%;box-sizing: border-box;display: inline-block;//text-align: center;background: #fff;//border-bottom: 1px solid #e6e6e6;
            p{
                text-align: center;height: 28px;line-height: 28px;color: #666;font-size: 13px;//border-right: 1px solid #e6e6e6;
            }
            p:first-child{
                border-bottom: 1px solid #e6e6e6;
            }
        }
        
    }
</style>
