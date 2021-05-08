import App from './App.svelte';

var app = new App({
  target: document.body,
  props: {
    answer: 42,
  },
});

export default app;
