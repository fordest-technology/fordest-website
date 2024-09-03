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
            <h2 className=" flex w-full flex-col justify-start">
              About Us We are the best We are the bestWe are the bestWe are the
              best{" "}
            </h2>
          </>
        }
      />
    </Routes>
  );
}

export default App;
