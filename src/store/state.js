const state = {
    //loading
    showLoading: false,
    showLoadMore: false,
    noContent: false,
    // 二级页面下拉显示
    showDrawerTba: false,
    //页面公用选项卡
    // tabControl: [
    //     {label: '开奖记录', path: '/second-detail/history'},
    //     {label: '长龙统计', path: '/second-detail/trend-line'},
    //     {label: '双面统计', path: '/second-detail/two-sided'},
    //     {label: '专家计划', path: '/second-detail/plan'}
    // ],
    // 基础配置数据
    baseSettingData: {},
     // 彩种编码
    lotteryCodes: [],
    // 当前彩种code
    curLotteryCode: 'bjpk10',
    // 当前彩种类型
    cur_lottery_type: 'pk10',
    // 基础数据
    lotteryData: [],
    //长龙数据
    dragonData: {},
    //双面统计
    sidesTotal: [],
    // websocket开奖结果
    socketOpenResult: {},
    // websocket計劃
    socketPlanResult: {},
    // 当前彩种开奖结果
    // openResult: {},
    //预测计划-排行榜(首页)
    forecastRanking: [],
    //预测计划首页
    // forecastPlanIndex: [],
    //获取预测计划 -- 概貌
    // forecastOverview: [], 
    // 历史开奖title
    // historyTitle: [],   
    // 文章分类
    // articleCategory: {},   
    // 广告列表
    // adList: [],   
    // 号码名次
    // locationNames: [],
    // 基本趋势-统计
    // basicTrend: [],   
    // 当前彩种所有球号
    // curLotteryNumbers: [],
    // 大小单双分布
    // screeningParameter:[]
};

export default state;
