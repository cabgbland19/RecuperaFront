import { ManageGESUCS } from "~/interfaces/manageGESUCS.interface";
import { setProperty } from "~/plugins/helpers";

export const getDefaultState = () => ({
  editedManageGESUCS: { ...ManageGESUCS },
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

export const getters = {
  editedManageGESUCS({ editedManageGESUCS }) {
    return editedManageGESUCS;
  },
};
