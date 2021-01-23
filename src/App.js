import React from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header title="rick and morty api" />
      <Characters />
    </>
  );
};

export default App;
