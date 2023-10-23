import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRootComponent, Home } from "./pages";
import PrivateRoute from "./utils/router/PrivateRoute";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='login' element={<AuthRootComponent />} />
        <Route path='register' element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
