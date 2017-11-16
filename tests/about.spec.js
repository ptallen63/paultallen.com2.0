import React from "react";
import ReactDOM from "react-dom";
import AboutPage from "../src/pages/about";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render('<AboutPage />', div);
});
