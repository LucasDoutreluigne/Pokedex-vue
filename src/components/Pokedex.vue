<template>
    <PokedexSearch />
    <PokedexList />
    <PokedexCardDetail
    v-if=showDetail />
</template>

<script>

import PokedexSearch from "./PokedexSearch.vue";
import PokedexList from "./PokedexList.vue";
import PokedexCardDetail from "./PokedexCardDetail.vue";

import { mapState } from "vuex";

export default{
    "name": "Pokedex",
    "components": {
        PokedexSearch,
        PokedexList,
        PokedexCardDetail
    },

    computed: {
        ...mapState([
            "showDetail"
        ])
    }
}

</script>

<style>

</style>