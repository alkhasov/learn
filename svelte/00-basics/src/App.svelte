<script>
  import Nested from './Nested.svelte';
  export let answer;

  const greetName = 'Vselennaya';
  const greetPicSrc = 'https://hotemoji.com/images/emoji/s/17zcrtbfkj7ms.png';
</script>

<img src={greetPicSrc} alt="Waving hand." width="{answer}px" />
<h1>Privet, {greetName}!</h1>
<Nested />
