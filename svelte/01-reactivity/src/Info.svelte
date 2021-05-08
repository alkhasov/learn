<script>
  export let courseName, hoursInLearn, personalScore;
</script>

<p
  >{hoursInLearn}
  {hoursInLearn === 1 ? 'hour' : 'hours'} in learn right now and it is {personalScore ===
  5
    ? 'amazing'
    : personalScore === 4
    ? 'good'
    : 'not much of interesting'}</p
>
