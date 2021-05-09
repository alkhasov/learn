<script>
  import Pokemon from './Pokemon.svelte';
  let pokemons = [
    {
      id: 1,
      name: 'Rapidash',
      level: 3,
      trainingHours: 411,
      imgLink: 'img/78.gif',
    },
    {
      id: 2,
      name: 'Tapu Bulu',
      level: 1,
      trainingHours: 14,
      imgLink: 'img/787.gif',
    },
    {
      id: 3,
      name: 'Tangela',
      level: 1,
      trainingHours: 42,
      imgLink: 'img/114.gif',
    },
    {
      id: 4,
      name: 'Snorlax',
      level: 2,
      trainingHours: 123,
      imgLink: 'img/143.gif',
    },
    {
      id: 5,
      name: 'Charizard Mega Y',
      level: 5,
      trainingHours: 2101,
      imgLink: 'img/6-mega-y.gif',
    },
  ];

  const removeFirst = () => {
    pokemons = pokemons.slice(1);
  };
</script>

<h1>Pokemons</h1>

<ul>
  {#each pokemons as pokemon}
    <Pokemon {pokemon} />
  {/each}
</ul>

<button on:click={removeFirst}>Remove first</button>

<style>
  ul {
    padding-inline-start: 0px;
  }
</style>
