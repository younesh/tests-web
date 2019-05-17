import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
function CoolComponent({ attr1 = "attribute01" }) {
  return <p>Youpi So Cool !!!!! hhhhh {attr1}</p>;
}

ReactDOM.render(
  <CoolComponent attr1="newAtrrib01 ...... " />,
  document.getElementById("root")
); */
