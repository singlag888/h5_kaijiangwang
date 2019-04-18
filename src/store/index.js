import Vue from "vue";
import Vuex from "vuex";

import * as action from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);


export default new Vuex.Store({
    state: state,
    actions: action,
    getters: getters,
    mutations: mutations
})