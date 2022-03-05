<template>
    <div id="pokedex-list">

        <div v-if="searchValue == ''">
            <h2
            id="pokedex-search-number-results"
            v-if="searchValue == ''">
                Effectuez une recherche pour visualiser des cartes.
            </h2>

            <PokedexCardProfessor />
        </div>

    
        <div v-if="searchValue != ''">
            <h2
            id="pokedex-search-number-results"
            v-if="searchValue != ''">
                {{ this.filteredPokemonNames.length }} résultat(s) trouvé(s).
            </h2>

            <PokedexCard
            v-for="(name, index) in filteredPokemonNames"
            :key="name + index"
            :name="name"/>
        </div>
    </div>
</template>

<script>

import axios from "axios";
import config from "../config/config.json";
import {mapState} from "vuex";

import PokedexCard from "./PokedexCard.vue"
import PokedexCardProfessor from "./PokedexCardProfessor.vue"

export default{
    "name": "PokedexList",
    components: {
        PokedexCard,
        PokedexCardProfessor
    },

    "computed": {
        ...mapState([
            "pokemons",
            "searchValue"
        ]),

        filteredPokemonNames: function() {
            var tab = [];
            var lowerSearch = this.searchValue.toLowerCase();

            for(var value in this.pokemons){
                if(this.pokemons[value].name.toLowerCase().includes(lowerSearch)){
                    tab.push(this.pokemons[value].name);
                }
            }
            return tab;
        }
    },

    mounted(){
        axios
            .get(config.API_URL + "/pokemon?limit=2000")
            .then(response => {
                this.$store.commit("SET_POKEMONS", response.data.results);
                console.log(response.data.results);
            });
    },
}

</script>

<style>

#pokedex-list{
    width: 560px;
    margin: auto;
}

#pokedex-search-number-results{
    text-align: center;
    font-weight: 400;
}

</style>