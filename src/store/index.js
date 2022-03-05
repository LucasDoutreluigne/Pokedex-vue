import { createStore } from 'vuex'

export default createStore({
    state: {
        "pokemons": [],
        "searchValue": "",
        "pokemonWantedName": "",
        "showDetail": false
    },

    getters: {

    },

    mutations: {
        SET_POKEMONS(state, payload){
            state.pokemons = payload;
        }
    },

    actions: {

    },

    modules: {
        
    }
})
