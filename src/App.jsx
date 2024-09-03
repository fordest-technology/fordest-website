import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Fordest Technologies</h1>
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <h2>About Us</h2>
          </>
        }
      />
    </Routes>
  );
}

export default App;
