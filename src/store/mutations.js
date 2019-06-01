import * as types from './mutationsTypes'

const mutations = {

  //loading
  [types.SHOW_LOADING](state, data) {
    state.showLoading = data;
  },
  [types.SHOW_LOADMORE](state, data) {
    state.showLoadMore = data;
  },
  [types.NO_CONTENT](state, data) {
    state.noContent = data;
  },

  //二级页面下拉显示
  [types.SHOW_DRAWER_TAB](state, data) {
    state.showDrawerTba = data;
  },

  //基础配置数据
  [types.BASE_SETTING_DATA](state, obj) {
    state.baseSettingData = obj;
  },

  // 彩种编码
  [types.LOTTERY_CODES](state, list) {
    state.lotteryCodes = list;
  },

  // 当前彩种code
  [types.CUR_LOTTERY_CODE](state, code) {
    state.curLotteryCode = code;
  },

   // 当前彩种类型
  [types.CUR_LOTTERY_TYPE](state, type) {
    state.cur_lottery_type = type;
  },

  // 基础数据
  [types.LOTTERY_DATA](state, list) {
    state.lotteryData = list
    // console.log(state.lotteryData)
  },

    //长龙数据
  [types.SAVE_CHANGLONG_DATA](state, list) {
    state.dragonData = list;
  },

  // 双面统计
  [types.SAVE_SIDES_TOTAL](state, list) {
    state.sidesTotal = list;
  },

  //websocket开奖结果
  [types.SOCKET_OPEN_RESULT](state, obj) {
    state.socketOpenResult = obj;
  },

  //websocket計劃
  [types.SOCKET_PLAN_RESULT](state, obj) {
    state.socketPlanResult = obj;
  },

  //websocket 时间
  [types.SOCKET_UPDATE_TIME](state, obj) {
    state.socketUpdateTime = obj;
  },

  // 当前彩种开奖结果
  // [types.OPEN_RESULT](state, obj) {
  //   state.openResult = obj;
  // },

  // 预测计划-排行榜(首页)
  [types.FORECATST_RANKING](state, list) {
    state.forecastRanking = list;
  },

  //计划参数
  [types.NUMBER_PLAN_PARAMS](state, obj) {
    state.numberPlanParams = obj;
  }
};

export default mutations;
