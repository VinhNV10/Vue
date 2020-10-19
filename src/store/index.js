import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import add from './modules/add';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search,
    add
  }
})

export default store;