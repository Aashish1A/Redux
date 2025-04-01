import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
