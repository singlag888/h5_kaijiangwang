import Vue from 'vue';
//loading
// export const showLoading =state=> state.showLoading;

// 页面公用选项卡
export const tabControl =state=> state.tabControl;
export const tabPlanInfo =state=> state.tabPlanInfo;

// 基础配置数据
export const baseSettingData =state=> state.baseSettingData;

// 彩种编码
export const lotteryCodes =state=> state.lotteryCodes;

// 当前彩种code
export const curLotteryCode =state=> state.curLotteryCode;

// 当前彩种类型
export const cur_lottery_type =state=> state.cur_lottery_type;

// 基础数据
export const lotteryData =state=> state.lotteryData;

//长龙数据
export const dragonData =state=> state.dragonData;

// 双面统计
export const sidesTotal =state=> state.sidesTotal;

// 预测计划-排行榜(首页)
export const forecastRanking =state=> state.forecastRanking;

// 预测计划
// export const forecastPlan =state=> state.forecastPlan;

// 预测计划首页
export const forecastPlanIndex =state=> state.forecastPlanIndex;

// 获取预测计划 -- 概貌
export const forecastOverview =state=> state.forecastOverview;

//websocket开奖结果
export const socketOpenResult =state=> state.socketOpenResult;


// 当前彩种开奖结果
// export const openResult =state=> state.openResult;

// 历史开奖title
// export const historyTitle =state=> {
//     state.historyTitle && state.historyTitle.forEach(item=>{
//         if(!Array.isArray(item)){
//             let len = state.lotteryData.length>0 ? state.lotteryData[0].data[item.type].length : 0;
//             Vue.set(item,'len',len);
//         }
//     });
//     return state.historyTitle;
// };





// 文章分类
// export const articleCategory =state=> state.articleCategory;

// 广告分组
// export const adList =state=> state.adList;

// 号码名次
// export const locationNames =state=> state.locationNames;

// 基本趋势-统计
// export const basicTrend =state=> state.basicTrend;

//当前彩种所有球号
// export const curLotteryNumbers =state=> state.curLotteryNumbers;



//大小单双分布
// export const screeningParameter =state=> state.screeningParameter;

