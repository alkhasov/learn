<script>
  import Outer from './Outer.svelte';

  let mouse = { x: 0, y: 0 };

  const handleMousemove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  const handleClick = (event) => {
    alert('Do not click the button!');
  };

  const handleMessage = (event) => {
    alert(event.detail.message);
  };
</script>

<div
  on:mousemove={(e) => {
    mouse = { x: e.clientX, y: e.clientY };
  }}
>
  <p>Pointer coordinates is {mouse.x} and {mouse.y}</p>
  <button on:click|once={handleClick}>Don't click</button>

  <hr />
  <Outer on:message={handleMessage} />
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
