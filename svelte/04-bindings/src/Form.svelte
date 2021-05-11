<script>
  const messageTypes = [
    { id: 1, title: 'Text' },
    { id: 2, title: 'Voice' },
    { id: 3, title: 'Video' },
  ];
  let selectedType;

  let content = '';

  const sendMessage = () => {
    alert(selectedType.title + ' with ' + content);
  };
</script>

<form on:submit|preventDefault={sendMessage}>
  <select bind:value={selectedType}>
    {#each messageTypes as type}
      <option value={type}>{type.title}</option>
    {/each}
  </select>

  <input type="text" bind:value={content} />

  <button type="submit" disabled={!content}>Send</button>
</form>
