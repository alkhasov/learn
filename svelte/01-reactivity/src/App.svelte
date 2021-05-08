<script>
  import Nested from './Nested.svelte';
  import Info from './Info.svelte';

  let count = 0;

  const handeClick = () => {
    count += 1;
  };

  $: doubled = count * 2;
  $: if (count === 10) {
    alert(`Oh wow, you counted ${count}`);
  }

  const course = {
    courseName: 'Svelte',
    hoursInLearn: 1,
    personalScore: 5,
  };
</script>

<button on:click={handeClick}
  >Clicked {count} {count === 1 ? 'time' : 'times'}</button
>

<Nested {count} {doubled} />
<Nested {count} />
<hr />
<h2>About {course.courseName} course</h2>
<Info {...course} />
<Info hoursInLearn="3" personalScore="3" />
