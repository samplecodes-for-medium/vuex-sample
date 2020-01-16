const state = {
  //State: Shared Variabl
  name: "",
  surname: ""
};
const mutations = {
  //Mutation: Changing state
  MUTATE_NAME(state, action) {
    state.name = action;
  },
  MUTATE_SURNAME(state, action) {
    state.surname = action;
  }
};
const actions = {
  setName(store, action) {
    console.log("setName:" + action);
    store.commit("MUTATE_NAME", action);
  },
  setSurname(store, action) {
    console.log("setName:" + action);
    store.commit("MUTATE_SURNAME", action);
  }
};
const getters = {
  getName(state) {
    return state.name;
  },
  getSurname(state) {
    return state.surname;
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
