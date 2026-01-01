import React from "react";
import { Routes, Route } from "react-router-dom";
import Buy from "./routes/Buy";
import Rent from "./routes/Rent";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Agents from "./routes/Agents";
import Layout from "./Components/Layout";
import Background from "./Components/Background";
import Houses from "./Components/Houses";
import Login from "./Components/Login";

const Home = () => {
  return (
    <>
      <Background />
      <Houses />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="buy" element={<Buy />} />
        <Route path="rent" element={<Rent />} />
        <Route path="about" element={<About />} />
        <Route path="agents" element={<Agents />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;