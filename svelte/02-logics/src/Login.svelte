<script>
  let greet = 'Mir';

  let user = {
    name: 'Noah',
    loggedIn: false,
    visitTimes: 0,
  };

  const toggleUserLogin = () => {
    user.loggedIn = !user.loggedIn;
    if (user.loggedIn) user.visitTimes += 1;
  };
</script>

<p>Privet, {user.loggedIn ? user.name : 'Unknown'}!</p>

{#if user.loggedIn}
  <button on:click={toggleUserLogin}> Log out </button>
{:else}
  <button on:click={toggleUserLogin}> Log in </button>
{/if}

{#if user.visitTimes > 9}
  <p>You are amazed with button!</p>
{:else if user.visitTimes > 4}
  <p>You are comfortable with smashing button</p>
{:else if user.visitTimes > 1}
  <p>You are come back, yay</p>
{:else}
  <p>You are newbee here!</p>
{/if}

{#if user.visitTimes && user.loggedIn}
  <i style="font-size:12px; color:gray;"
    >Visited {user.visitTimes} {user.visitTimes === 1 ? 'time' : 'times'}</i
  >
{/if}
