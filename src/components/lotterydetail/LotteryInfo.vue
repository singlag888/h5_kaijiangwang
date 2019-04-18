<!-- 彩票详情 -->
<template>
    <div class="lottery-info">
        <div class="info">
            <div>
                {{ curReslut.name }}{{curReslut.code_title}}&nbsp&nbsp
                <span class="color999">{{curReslut.expect}}期</span>
            </div>
            <!-- 时间 -->
            <TimeDown @callBackFunc="callBackFunc" :isLastQs="curReslut.remaining_expect" :time="curReslut.next_open_seconds"></TimeDown>    
        </div>
        <!-- number-square -->
        <Number :isOPen="isOPen" :code_type="curReslut.code_type" :result="curReslut.open_numbers"/>
    </div>
</template>

<script>
import TimeDown from './TimeDown'
import Number from './Number'
import { mapGetters } from 'vuex'

export default {
    components: { Number, TimeDown },
    props: ['result'],
    data() {
        return {
            curReslut: this.result,
            isOPen: false
        }
    },
    methods: {
        callBackFunc(isOpen){
            this.isOPen = isOpen;
        },
    },
    computed: {
        ...mapGetters(['socketOpenResult']),
    },
    mounted() {

    },
    watch: {
        result:function() {
            this.curReslut = this.result;           
        },
        socketOpenResult:function() {
            if(this.socketOpenResult.code == this.curReslut.code){
                this.curReslut = this.socketOpenResult;
            }
        },
        // isOPen(){
        //     this.$emit('test', this.isOPen)
        // }
    }
}
</script>

<style lang="scss" scoped>
    .lottery-info{
        background: #fff;padding: 6px 10px;
        .info{
            display: flex; justify-content: space-between; font-size: 12px; color: #666;margin-bottom: 10px;
        }     
        .color999{color: #999;}
    }
</style>
