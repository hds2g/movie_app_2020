import React from "react";

//function Food({ props.favorite }) {
//function Food( props ) {
function Food({ favorite }) {
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Good morning!!</h1>
      <Food favorite="aaa" />
      <Food favorite="bbb" />
      <Food favorite="ccc" />
      <Food favorite="ddd" />
      <Food favorite="eee" />
      <Food favorite="fff" />
    </div>
  );
}

export default App;
