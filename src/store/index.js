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
        },

        SET_SHOW_DETAIL(state, payload){
            if(payload == true || payload == false) state.showDetail = payload;
            else state.showDetail = false;
        },

        SET_POKEMON_WANTED_NAME(state, payload){
            state.pokemonWantedName = payload;
        }
    },

    actions: {

    },

    modules: {
        
    }
})
