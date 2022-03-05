<template>
    <article class="pokedex-card-professor">
        <img src="../assets/professor.png" />
        <h3>Professeur Pokémon</h3>
    </article>
</template>

<script>

export default {

}

</script>

<style>

.pokedex-card-professor{
    width: 520px;
    height: 400px;
    background-color: white;
    box-shadow: 5px 5px 20px gray;
    border-radius: 5px;

    margin-left: 20px;
    margin-bottom: 20px;
    float: left;
}

.pokedex-card-professor img{
    width: 177px;
    height: 276px;

    margin-top: 50px;
    margin-left: 170px;
}

.pokedex-card-professor h3{
    text-align: center;
    
    font-size: 20px;
    text-transform: capitalize;
}

</style>