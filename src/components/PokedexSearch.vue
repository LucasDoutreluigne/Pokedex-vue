<template>
    <div id="div-pokedex-search">
        <input
            class="visual-box"
            type="text"
            placeholder="Entrez le nom d'un pokémon à rechercher..." 
            v-model="$store.state.searchValue"/>
    </div>
</template>

<script>

export default{
    "name": "PokedexSearch"
}

</script>

<style>

#div-pokedex-search{
    width: 100vw;
    height: 65px;
}

#div-pokedex-search input{
    width: 500px;
    height: 45px;

    border: none;

    padding: 0 10px 0 10px;
    margin-top: 10px;
    margin-left: calc((100vw - 520px) / 2);

    font-size: 17px;
}

</style>