import Vue from "vue";
import Vuex from "vuex";
import progressBar from "@/store/progressBar";
import snackbar from "@/store/snackbar";
import auth from "@/store/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    progressBar,
    auth,
    snackbar
  }
});
