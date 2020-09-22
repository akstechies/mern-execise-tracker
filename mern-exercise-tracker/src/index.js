import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));


/*

Hey i am following the same tutorial and i figured out the answer

in index.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
to

ReactDOM.render(<App />, document.getElementById("root"));
it will fix the error.

and to display the exercise in the console,

go to console settings( top right)
select the checkbox for preserve console log*/

