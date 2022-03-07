<template>
    <div 
    id="pokemon-card-detail-background"
    v-if="dataLoaded">
        <div id="pokemon-card-detail">
            <div id="pokemon-selected-image-container">
                <div id="pokemon-image-container-before">
                    <div class="circle"></div>
                </div>
                <div id="pokemon-image-container">
                    <img :src="pokemonImageUrl" />
                </div>
                <div id="pokemon-image-container-after">
                    <div class="circle"></div>
                </div>
            </div>

            <div id="pokemon-state-container">
                <h2>{{ pokemonData.name }}</h2>

                <div class="line">
                    <span class="category">Expérience</span>
                    <span class="category-value">{{ pokemonData.base_experience }} XP</span>
                </div>

                <div class="line">
                    <span class="category">Taille</span>
                    <span class="category-value">{{ pokemonData.height / 10 }} m</span>
                </div>

                <div class="line">
                    <span class="category">Poids</span>
                    <span class="category-value">{{ pokemonData.height / 1000 }} kg</span>
                </div>

                <div class="line-without-border">
                    <span class="category full-line">Types</span>
                </div>
                <div class="line">
                    <div class="div-type">
                        <span
                        v-for="(value, index) in pokemonData.types"
                        :key="'value' + index"
                        :class="'type ' + value.type.name"
                        >
                            {{ value.type.name }}
                        </span>
                    </div>
                </div>

                <div class="line-without-border">
                    <span class="category full-line">Talents</span>
                </div>
                <div class="line">
                    <div class="div-type">
                        <span
                        v-for="(value, index) in pokemonData.abilities"
                        :key="'value' + index"
                        class="ability"
                        >
                            {{ value.ability.name }}
                        </span>
                    </div>
                </div>

            </div>


            <button @click="closeDetail">Fermer</button>
        </div>
    </div>
</template>

<script>

import { mapState } from "vuex";
import config from "../config/config.json";
import axios from "axios";

export default{
    "name": "PokedexCardDetail",

    data(){
        return {
            "pokemonData": {},
            "dataLoaded": false
        }
    },

    "computed": {
        ...mapState([
            "pokemonWantedName"
        ]),

        "pokemonImageUrl": function(){
            return config.IMG_URL + "/" + this.pokemonWantedName + ".png";
        },

        "pokemonDataUrl": function(){
            return config.API_URL + "/pokemon/" + this.pokemonWantedName;
        }

    },

    beforeMount(){
        this.$data.dataLoaded = false;
        axios
        .get(this.pokemonDataUrl)
        .then(response => {
            this.pokemonData = response.data;
            this.$data.dataLoaded = true;
            console.log(this.pokemonData);
        });
    },

    methods: {
        closeDetail: function(){
            this.$store.commit("SET_SHOW_DETAIL", false);
        }
    }
}

</script>

<style lang="scss" scoped>

#pokemon-card-detail-background{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);

    top: 0;
    left: 0;
}

#pokemon-card-detail{
    width: 400px;
    height: auto;
    padding: 60px;
    padding-bottom: 20px;
    background-color: white;
    box-shadow: 5px 5px 20px gray;
    border-radius: 5px;

    margin-left: calc(50vw - 260px);
    margin-top: 100px;
    float: left;
}

#pokemon-image-container{
    width: 140px;
    height: 140px;

    margin-left: 130px;
    margin-top: -140px;

    background-color: white;
    border-radius: 140px;
}

#pokemon-image-container-before{
    display: block;
    position: absolute;

    width: 70px;
    height: 70px;

    left: calc(50vw - 105px);
    top: 55px;

    background-color: white;
    border-radius: 140px;
}

.circle{
    display: block;
    position: absolute;

    width: 50px;
    height: 50px;

    left: 10px;
    top: 10px;

    background-color: #FFC300;
    border-radius: 140px;
}

#pokemon-image-container-after{
    display: block;
    position: absolute;

    width: 70px;
    height: 70px;

    left: calc(50vw + 35px);
    top: 55px;

    background-color: white;
    border-radius: 140px;
}

#pokemon-image-container img{
    width: 120px;
    height: 120px;

    position: absolute;
    z-index: 10;

    left: calc(50vw - 60px);
    top: 30px;

    background-color: #FFC300;
    border-radius: 120px;
}



#pokemon-state-container h2{
    text-transform: capitalize;
    font-size: 25px;
    text-align: center;
}

.line, .line-without-border{
    width: 100%;
    min-height: 20px;
    padding-bottom: 5px;
    margin-bottom: 5px;
}

.line{
    border-bottom: 1px solid gray;
}

.category{
    font-size: 20px;
    font-weight: bold;
    float: left;
}

.category-value{
    font-size: 20px;
    float: right;
}

button{
    width: 200px;

    padding: 10px;
    margin-bottom: 0;
    margin-left: 100px;
    margin-top: 35px;

    background-color: #FF5733;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
}

.full-line{
    display: block;
    min-height: 20px;
    width: 100%;
}

.div-type{
    display: block;
    width: 100%;
}

.ability{
    display: inline-block;
    padding: 3px 10px 3px 10px;
    color: green;
    border: 2px solid green;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;

    margin-right: 10px;
    border-radius: 50px;
}

.type{
    display: inline-block;
    padding: 5px 12px 5px 12px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-transform: capitalize;

    margin-right: 10px;
    border-radius: 50px;
}

.grass {
    background: rgb(3, 139, 44) !important;
}

.poison {
    background: rgb(74, 7, 105) !important;
}

.water {
    background: rgb(8, 135, 219) !important;
}

.dragon {
    background: rgb(27, 2, 68) !important;
}

.ice {
    background: rgb(78, 199, 255) !important;
}

.flying {
    background: rgb(145, 215, 255) !important;
}

.fire {
    background: rgb(238, 135, 17) !important;
}

.ghost {
    background: rgb(74, 52, 87) !important;
}

.fighting {
    background: rgb(122, 0, 0) !important;
}

.normal {
    background: rgb(104, 104, 104) !important;
}

.psychic {
    background: rgb(195, 0, 255) !important;
}

.bug {
    background: rgb(52, 87, 6) !important;
}

.dark {
    background: rgb(43, 43, 43) !important;
}

.steel {
    background: rgb(116, 116, 116) !important;
}

.fairy {
    background: rgb(248, 165, 237) !important;
}

.eletric {
    background: rgb(255, 217, 1) !important;
}

.rock {
    background: rgb(88, 95, 100) !important;
}

.ground {
    background: rgb(92, 70, 70) !important;
}


</style>