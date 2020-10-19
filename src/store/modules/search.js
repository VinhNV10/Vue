import screenFlow from '../../services/screenFlow';

const types = {
  GET_LIST_SCREEN: 'GETLISTSCREEN',
}

const search = {
  namespace: true,
  state: {
    inputScreen: ''
  },
  actions: {
    getDataScreen({commit}) {
      screenFlow.getListScreen().then((data) => {
        commit(types.GET_LIST_SCREEN, data)
      });
    }
  },
  mutations: {
    [types.GET_LIST_SCREEN](state, payload) {
      state.inputScreen = payload;
    },
  }
}

export default search;