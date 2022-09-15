import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Friends from "./routes/Friends";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/friends" element={<Friends/>} />
    </Routes>
    </>
  );
}

export default App;
