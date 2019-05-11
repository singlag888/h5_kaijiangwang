import * as types from './mutationsTypes';
import * as api from '@/js/api';
import { saveAccessToken } from '@/js/cache';

// 获取access token
export const getAccessToken = ({
  commit,
  state,
  dispatch
}) => {
  return api.getAccessToken().then((res) => {
    if (res.code == 200) {
      // 保存assess token
      saveAccessToken(res.data.access_token);

      // 获取基础参数
      dispatch('getSetting');

      // 彩种编码
      // dispatch('getLotteryCodes');

    } else {
      return 404;
    }
  }).catch(e => {
    return 404;
  });
}

// 基础参数
export const getSetting = ({
  commit,
  state
}) => {
  api.getSetting().then(res => {
    if (res.code == 200) {
      document.title = res.data.site_title;
      // document.querySelector('#favicon').setAttribute('href',res.data.site_favicon);
      commit(types.BASE_SETTING_DATA, res.data);
    } else {
      // todo
    }
  });
}

// 彩种编码
export const getLotteryCodes = ({
  commit,
  state
}, params) => {
  return api.getLotteryCodes(params).then((res) => {
    if (res.code == 200) {
      commit(types.LOTTERY_CODES, res.data);
      // commit(types.SHOW_LOADING, false)
      //console.log(res)
    } else {
      //console.log(res)
    }
  }).catch(e => {
    //console.log(e)
  });
}

// 修改当前彩种类型
export const chenge_cur_lootery_type = ({
  commit,
  state
}, type) => {
  commit(types.CUR_LOTTERY_TYPE, type);
}

// 修改当前彩种code
export const chengecurLotteryCode = ({
  commit,
  state
}, code) => {
  commit(types.CUR_LOTTERY_CODE, code);
}

// 获取基础数据
export const getLotteryData = ({
  commit,
  state
}, params) => {
  return api.getLotteryData(params).then((res) => {
    if (res.code == 200) {
      // console.log(params)    
      let result = res.data.rows
      if(params.page == 1) {
        commit(types.LOTTERY_DATA, result);
      }else {
        commit(types.LOTTERY_DATA, [...state.lotteryData,...result]);
        if(result.length == 0) {
          commit(types.NO_CONTENT, true)
        }else {
          commit(types.NO_CONTENT, false)
        }
      }
    } else {
      //console.log(res)
    }
  }).catch(e => {
    //console.log(e)
  });
}

// 获取长龙提醒
export const getLongDragon = ({
  commit,
  state
}, params) => {
  return api.getLongDragon(params).then((res) => {
    if (res.code == 200) {
      // todo
      commit(types.SAVE_CHANGLONG_DATA, res.data);
      // commit(types.SHOW_LOADING, false)
    } else {
      //console.log(res)
    }
  }).catch(e => {
    //console.log(e)
  });
}

// 获取双面统计
export const getSidesTotal = ({
  commit,
  state
}, params) => {
  return api.getSidesTotal(params).then((res) => {
    if(res.code == 200) {
      commit(types.SAVE_SIDES_TOTAL, res.data)
      // commit(types.SHOW_LOADING, false)
    } else {
      //console.log(res)
    }
  }).catch(e => {
    // console.log(e)
  })
}

// 预测计划-排行榜(首页)
export const getForecastRanking = ({
  commit,
  state
}, params) => {
  return api.getForecastRanking(params).then((res) => {
    if(res.code == 200) {
      commit(types.FORECATST_RANKING, res.data)
      // commit(types.SHOW_LOADING, false)
    } else {
      //console.log(res)
    }
  }).catch(e => {
    // console.log(e)
  })
}

// 获取预测计划
export const getForecastPlan = ({
  commit,
  state
}, params) => {
  return api.getForecastPlan(params);
}

// 开奖信息
// export const getLotteryExpect = ({
//   commit,
//   state
// }, code) => {
//   api.getLotteryExpect(code).then(res => {
//     if (res.code == 200) {
//       commit(types.OPEN_RESULT,res.data);
//     }
//   });;
// }

// 获取预测计划首页
// export const getForecastPlanIndex = ({
//   commit,
//   state
// }) => {
//   api.getForecastPlanIndex().then(res => {
//     if (res.code == 200) {
//       commit(types.FORECAST_PLAN_INDEX, res.data);
//     } else {
//       // todo
//     }
//   });
// }

// 获取预测计划 -- 概貌
// export const getForecastOverview = ({
//   commit,
//   state
// }, params) => {
//   api.getForecastOverview(params).then(res => {
//     if (res.code == 200) {
//       commit(types.FORECAST_OVERVIEW, res.data);
//     } else {
//       // todo
//     }
//   });
// }

// 获取文章列表
// export const getArticles = ({
//   commit,
//   state
// }, params) => {
//   return api.getArticles(params);
// }


// 获取文章详情
// export const getArticlesInfo = ({
//   commit,
//   state
// }, id) => {
//   return api.getArticlesInfo(id);
// }

// 获取基本趋势-统计
// export const getBasicTrend = ({
//   commit,
//   state
// }, params) => {
//   return api.getBasicTrend(params).then((res) => {
//     if (res.code == 200) {
//       commit(types.BASIC_TREND, res.data ? res.data : []);
//       //console.log(res)
//     } else {
//       //console.log(res)
//     }
//   }).catch(e => {
//     //console.log(e)
//   });
// }

// 获取文章分类
// export const getArticleCategory = ({
//   commit,
//   state
// }, params) => {
//   return api.getArticleCategory(params).then((res) => {
//     if (res.code == 200) {
//       commit(types.ARTICLE_CATEGORY, res.data);
//     } else {
//       //console.log(res)
//     }
//   }).catch(e => {
//     //console.log(e)
//   });
// }

// 广告列表
// export const getAdvertisement = ({
//   commit,
//   state
// }, params) => {
//   api.getAdvertisement(params).then((res) => {
//     if (res.code == 200) {
//       commit(types.AD_LIST,res.data);
//     } else {
//       //console.log(res)
//     }
//   }).catch(e => {
//     //console.log(e)
//   });

// }

// 基本走势
// export const getBasicTrendEveryPeriod = ({
//   commit,
//   state
// }, params) => {
//   return api.getBasicTrendEveryPeriod(params);
// }

// 路珠走势
// export const getGlassBeadTrend = ({
//   commit,
//   state
// }, params) => {
//   return api.getGlassBeadTrend(params);
// }

// 冷热号码
// export const getColdAndHotNumbers = ({
//   commit,
//   state
// }, code) => {
//   return api.getColdAndHotNumbers(code);
// }