import axios from "./axios";
import * as urls from "./apiUrl";
import * as apiConfig from "./config";

//  获取Token Code
export function getAccessToken(params) {
    let param = Object.assign({}, {
        app_id: apiConfig.app_id,
        grant_type: apiConfig.grant_type,
        timestamp: apiConfig.timestamp,
        signature: apiConfig.signature,
    });
    return axios.get(urls.getAccessTokenAPI(), param);
}

//  基础参数
export function getSetting() {
    return axios.get(urls.getSettingAPI(), {});
}

//  彩种编码
export function getLotteryCodes() {
    return axios.get(urls.getLotteryCodesAPI(), {});
}

//  获取基础数据
export function getLotteryData(params) {
    let param = Object.assign({}, {
        open_date: params.open_date,
        page_size: params.page_size || 30,
        page: params.page || 1,
        code: params.code,
    });
    return axios.get(urls.getLotteryDataAPI(), param);
}

//  获取长龙提醒
export function getLongDragon(params) {
    let param = Object.assign({}, {
        code: params.code,
    });
    return axios.get(urls.getLongDragonAPI(), param);
}

//  获取双面统计
export function getSidesTotal(params) {
    let param = Object.assign({}, {
        open_date: params.open_date,
        code: params.code,
    });
    return axios.get(urls.getSidesTotalAPI(), param);
}

//  开奖信息
// export function getLotteryExpect(code) {
//     let param = Object.assign({}, {
//         code: code,
//     });
//     return axios.get(urls.getLotteryExpectAPI(), param);
// }

// 预测计划-排行榜(首页)
export function getForecastRanking(params) {
    let param = Object.assign({}, {
        code: params.code
    });
    return axios.get(urls.getForecastRankingAPI(), param);
}

//  预测计划
export function getForecastPlan(params) {
    let param = Object.assign({}, {
        code: params.code,
        expert_id: params.expert_id,
        open_date: params.open_date,
        forecast_quantity: params.forecast_quantity,
        location: params.location,
        at_last_expect: params.at_last_expect || 0
    });
    return axios.get(urls.getForecastPlanAPI(), param);
}

//  预测计划首页
// export function getForecastPlanIndex() {
//     return axios.get(urls.getForecastPlanIndexAPI(), {});
// }

//  预测计划 -- 概貌
// export function getForecastOverview(params) {
//     let param = Object.assign({}, {
//         code: params.code
//     });
//     return axios.get(urls.getForecastOverviewAPI(), param);
// }

//  获取文章列表
// export function getArticles(params) {
//     let param = Object.assign({}, {
//         page: params.page || 1,
//         page_size: params.page_size || 20,
//         category_id: params.category_id || 0,
//     });
//     return axios.get(urls.getArticlesAPI(), param);
// }

//  获取文章详情
// export function getArticlesInfo(id) {
//     return axios.get(urls.getArticlesInfoAPI(id), {});
// }

//  获取基本趋势-统计
// export function getBasicTrend(params) {
//     let param = Object.assign({}, {
//         code: params.code,
//         open_date: params.open_date,
//     });
//     return axios.get(urls.getBasicTrendAPI(), param);
// }

//  获取文章分类
// export function getArticleCategory(params) {
//     let param = Object.assign({}, {
//         page: params && params.page || 1,
//         page_size: params && params.page_size || 100,
//     });
//     return axios.get(urls.getArticleCategoryAPI(), param);
// }

//  广告分组
// export function getAdCategory(params) {
//     let param = Object.assign({}, {
//         page: params && params.page || 1,
//         page_size: params && params.page_size || 20,
//     });
//     return axios.get(urls.getAdCategoryAPI(), param);
// }

//  广告列表
// export function getAdvertisement(params) {
//     let param = Object.assign({}, {
//         page: params && params.page || 1,
//         page_size: params && params.page_size || 20,
//     });
//     return axios.get(urls.getAdvertisementAPI(), param);
// }

//  基本走势
// export function getBasicTrendEveryPeriod(params) {
//     let param = Object.assign({}, {
//         open_date: params && params.open_date,
//         code: params && params.code,
//     });
//     return axios.get(urls.getBasicTrendEveryPeriodAPI(), param);
// }

//  路珠走势
// export function getGlassBeadTrend(params) {
//     let param = Object.assign({}, {
//         open_date: params && params.open_date,
//         code: params && params.code,
//     });
//     return axios.get(urls.getGlassBeadTrendAPI(), param);
// }

//  冷热号码
// export function getColdAndHotNumbers(code) {
//     let param = Object.assign({}, {
//         code: code,
//     });
//     return axios.get(urls.getColdAndHotNumbersAPI(), param);
// }