import { RecoverInterface } from "~/interfaces/recover.interface";
import { setProperty } from "~/plugins/helpers";

export const getDefaultState = () => ({
  editedRecover: { ...RecoverInterface },
});

export const state = () => ({
  ...getDefaultState(),
});

export const mutations = {
  updateValue(state, payload) {
    state[payload.key] = payload.value;
  },

  resetState(state) {
    Object.assign(state, getDefaultState());
  },

  setProperty,
};

export const actions = {
  actUpdateValue({ commit }, payload) {
    commit("updateValue", payload);
  },
  actResetState({ commit }) {
    commit("resetState");
  },
};
