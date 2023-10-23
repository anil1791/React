import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//const singleElement = (<a href="www.google.com" target="_blank">click to go to Google</a>)
/*
const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click this to go to Google",
  evaluated_expressions
);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App/>
    
  
);
