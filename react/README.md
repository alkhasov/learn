## React

_For this learning part each step will be in one folder (react), but steps of journey like earlier will declared below_

#### 00 ¬ Hello world

I'm very interest at React last two years at least. JS learnings that I started is fundament and preparing for to start touching React. So, React-Hello-World achievement unlocked.

#### 01 ¬ First app

I looked over create-react-app build setup, run, it works. But I need to back to learn common js and practice more, because I'm not feel ready... but I could not.

#### 02 ¬ Nested components

I created `class Pokemon` by extends `React.Component`, which calls Pokemon component, need to get used to terminology. Each pokemon has properties form `pokemonsDatabase`. Then I created `Pokemons` component with two instances of `Pokemon` and add click event to `Pokemon` which update instance to new one.

#### 03 ¬ Props and State

Coded little bit more complex components with generating childres form "database", add evenlisteners `onClick`. Worked with lists and keys.

#### 04 ¬ Styled Components and React Router

Styled components just surprised me about how they handy to use. Don't know about large projects but for small experiments it's just perfect solution. React router surprised me too, I thought even simple router is hard to code, but with [react-router-dom](https://github.com/ReactTraining/react-router) package it's simple as can be.

#### 05 ¬ Lifting state up

At the start of this step I knew about react elements but not much about how to use them for usefull things. For fill the gap I coded the page with table which has header rows and common rows, search field and filter option. Table may any size and any count of ony rows. Search and filter functionality follows the "source of truth" clue, I used hierarchy of nested props for lifting state up.

#### 06 ¬ Fetching data

Started trying to requsest data from local server.

## create-react-app scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload after edits.<br>
Also see print lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
