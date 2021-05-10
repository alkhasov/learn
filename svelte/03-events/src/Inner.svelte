<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const vocabular = ['Amm', 'Ok', 'Something'];

  const sayIt = () => vocabular[Math.floor(Math.random() * 3)];

  const saySomething = () => {
    dispatch('message', {
      message: sayIt(),
    });
  };
</script>

<button on:click={saySomething}>Say Something</button>
