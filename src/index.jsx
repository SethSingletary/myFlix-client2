import { createRoot } from "react-dom/client";
import React from "react";
import Container from "react-bootstrap/Container";

//import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import MainView from "./components/main-view/main-view";

const MyFlixApplication = () => {
  return (
      <MainView />
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);