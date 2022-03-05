<template>
    <div id="app-content">
        <div id="background"></div>
        <Pokedex />
    </div>
</template>

<script>
import Pokedex from "./components/Pokedex.vue";

export default {
    name: 'App',
    components: {
        Pokedex
    }
}

</script>

<style>

*{
    margin-top: 0;
    margin-left: 0;
    font-family: "Calibri";
}

html, body, #app-content{
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    background-color: transparent;
}

#background{
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    background: url("assets/fond.jpg") no-repeat center fixed;
    -webkit-background-size: cover;
    background-size: cover;
}

.visual-box{
    border: none;
    background-color: white;
    box-shadow: 5px 5px 20px gray;
    border-radius: 5px;
}

input:focus{
    outline: none;
}

</style>
