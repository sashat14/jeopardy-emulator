import axios from 'axios';

const state = {
    categories:[]
};

const actions = {
    async getCategories({ commit }) {
        const response = await axios.get('http://www.jservice.io/api/categories?count=8');
        commit('setCategories', response.data);
     }
};

const mutations = {
    setCategories: (state, categories) => (state.categories = categories)
};

const getters = {
    allCategories: state => state.categories
};

export default {
    state,
    getters,
    actions,
    mutations
  };