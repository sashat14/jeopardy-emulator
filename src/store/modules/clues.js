import axios from 'axios';

const state = {
    clues:[]
};

const actions = {
    async getClues({ commit }, id){
        const response = await axios.get(`http://www.jservice.io/api/clues?count=6&category=${id}`);
        commit('setClues', response.data);
    }
};


const mutations = {
    setClues: (state, clues) => (state.clues = clues)
};

const getters = {
    allClues: state => state.clues
};

export default {
    state,
    getters,
    actions,
    mutations
  };