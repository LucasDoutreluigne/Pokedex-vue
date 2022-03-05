<template>
    <article class="pokedex-card">
        <img :src=url_image />
        <h3>{{ pokemonName }}</h3>
    </article>
</template>

<script>
import config from "../config/config.json";

export default {
    "name": "PokedexCard",
    "props": ["name"],

    data(){
        return {
            pokemonName: null
        }
    },

    mounted(){
        this.$data.pokemonName = this.$props.name;
    },

    computed: {
        url_image: function(){
            return config.IMG_URL + "/"  + this.$data.pokemonName + ".png";
        }
    }
}

</script>

<style>

.pokedex-card{
    width: 160px;
    height: 140px;
    background-color: white;
    box-shadow: 5px 5px 20px gray;
    border-radius: 5px;

    margin-left: 20px;
    margin-bottom: 20px;
    float: left;
}

.pokedex-card img{
    width: 110px;
    height: 110px;

    margin-left: 25px;
}

.pokedex-card h3{
    margin-top: -15px;
    text-align: center;
    
    font-size: 20px;
    text-transform: capitalize;
}

</style>