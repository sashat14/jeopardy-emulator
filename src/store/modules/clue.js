import axios from 'axios';

const state = {
    clue:{},
    prize:0
};

const actions = {
    async getClue({ commit }, {id, value}){
        const response = await axios.get(`http://www.jservice.io/api/clues?category=${id}&value=${value}`)
        commit('setClue', response.data[0]);
    },

    incrementPrize({commit}, clue) {
        let clueValue = clue.value;
        commit('increasePrize', clueValue);
    },

    decrementPrize({commit}, clue) {
        let clueValue = clue.value;
        commit('decreasePrize', clueValue)
    }
};


const mutations = {
    setClue: (state, clue) => (state.clue = clue),
    increasePrize: (state, prize) => (state.prize += prize),
    decreasePrize:(state, prize) => (state.prize -= prize)
};

const getters = {
    singleClue: state => state.clue,
    getPrize: state => state.prize
};

export default {
    state,
    getters,
    actions,
    mutations
  };