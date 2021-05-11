<script>
  import Form from './Form.svelte';

  let user = {
    name: 'Mir',
    subscribe: false,
    message: 'Some words are <I>italic</I>, some are <strong>bold</strong>',
  };

  const newsletterSubscribe = () => {
    alert(user.name + ', you are subscribed now.');
  };
</script>

<label
  >What is your name?<br />
  <input type="text" bind:value={user.name} />
</label>

<p>Privet, {user.name}!</p>

<label
  ><input type="checkbox" bind:checked={user.subscribe} /> I want to subscribe newsletter</label
>

{#if user.subscribe}
  <p>Gotcha! Now prepare you inbox {user.name}.</p>
{:else}
  <p>You have to I mean</p>
{/if}

<button on:click|once={newsletterSubscribe} disabled={!user.subscribe}
  >Subscribe</button
>

<hr />

<h2>HTML Previewer</h2>
<textarea bind:value={user.message} cols="40" rows="5" style="display: block" />

{@html user.message}

<hr />

<Form />
