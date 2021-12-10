
# React Boilerplate 

The point of this project is to get away from CRA. It's basically a modern version of the react boilerplates I created years ago back when I didn't work in places that used CRA for everything.

My knowledge on non-CRA react projects was a bit out of date, so [this article helped me a lot](https://medium.com/@harshverma04111989/basic-setup-for-react-application-without-cra-8f885d9dbbf).

## Quick start 

```
npm install
npm run dev
```

## Testing 

Tests use Jest and the [React ShallowRenderer](https://reactjs.org/docs/shallow-renderer.html). Note that the `babel.config.js` file was necessary in order to get Jest working, along with these devDependencies:

- @babel/preset-react
- babel-jest
- react-test-renderer

(A few other devDependencies were required but these had already been installed as part of the basic react setup.)

To run all tests: `npm run test`
To run a specific test: `npm run test App.test.js`

## ToDo

- [Optimise bundle splitting with webpack](https://webpack.js.org/guides/code-splitting/)

- Find a good loading screen methodology:
  - https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering
  - https://stackoverflow.com/questions/66136068/how-to-have-a-loading-screen-until-all-my-components-are-mounted-in-react
  - https://stackoverflow.com/questions/67218603/what-is-the-best-way-to-implement-a-loading-screen-with-react-navigation-i-want
  - https://betterprogramming.pub/a-quick-and-easy-react-js-loading-screen-with-hooks-940feccd553f

- [Investigate making particles in React](https://dev.to/prem1835/moving-particles-background-in-reactjs-f3l)
  - https://particles.js.org/samples/index.html#