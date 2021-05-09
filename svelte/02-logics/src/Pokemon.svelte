<script>
  export let pokemon;
</script>

<li
  ><img src={pokemon.imgLink} alt={pokemon.name} class="pokemon-preview" /><h3
    >{pokemon.name}</h3
  >
  {pokemon.level} level</li
>

<style>
  li {
    display: block;
    list-style: none;
    margin-bottom: 16px;
  }

  h3 {
    display: inline;
  }

  .pokemon-preview {
    display: inline-block;
    height: 24px;
    margin-right: 8px;
  }
</style>
