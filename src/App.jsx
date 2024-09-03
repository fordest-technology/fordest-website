import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Fordest Technologies Here we come</h1>
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <h2>About Us We are the best </h2>
          </>
        }
      />
    </Routes>
  );
}

export default App;
