"use strict";

console.clear();

let pokemons = [
  { name: "Charizard", level: 3, trainingHours: 411 },
  { name: "Bulbasaur", level: 1, trainingHours: 14 },
  { name: "Squirtle", level: 1, trainingHours: 42 },
  { name: "Pikachu", level: 2, trainingHours: 123 },
  { name: "Meowt", level: 1, trainingHours: 76 },
  { name: "Eevee", level: 2, trainingHours: 281 },
  { name: "Mew", level: 4, trainingHours: 902 },
  { name: "Snorlax", level: 2, trainingHours: 305 },
  { name: "Slowpoke", level: 2, trainingHours: 243 },
  { name: "Vaporeon", level: 3, trainingHours: 619 }
];

const renderPokemons = pokemons => {
  for (let pokemon of pokemons) {
    ReactDOM.render(
      React.createElement("li", null, pokemon.name),
      document.getElementById("app")
    );
  }
};

// создаём компонент Img, который возвращает <img />
const Img = props => {
  let img = {
    className: props.className,
    src: props.src,
    alt: props.alt
  };
  return React.createElement("img", img);
};

const Movie = props => {
  return React.createElement(
    "div",
    { className: "movie-page" },
    // чилдреном может быть массив
    [
      // создаём элемент из компонента Img
      React.createElement(Img, {
        className: "movie-img",
        src: props.imgSrc,
        alt: props.title
      }),
      React.createElement("h1", { className: "movie-title" }, props.title)
    ]
  );
};

const App = React.createElement(Movie, {
  title: "2001: A Space Odyssey",
  imgSrc: "https://i.imgur.com/vaZoNCA.jpg"
});

ReactDOM.render(App, document.getElementById("app"));
