<script>
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  let count = 0;

  const getPokemon = async () => {
    count += 1;
    const res = await fetch(apiUrl + count);
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  };

  let pokemon = getPokemon();

  const handleClick = () => {
    pokemon = getPokemon();
  };
</script>

<button on:click={handleClick}>Request New Pokemon</button>

<i style="font-size:12px; color:gray;">
  Requested {count}
  {count === 1 ? 'pokemon' : 'pokemons'}
</i>

{#await pokemon}
  <p>...awaiting new pokemon information</p>
{:then list}
  <p>Here is info:</p>
  <code>{list}</code>
{:catch error}
  <p style="color:red">{error}</p>
{/await}
