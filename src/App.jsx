import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App max-w-[2560px] mx-auto overflow-hidden">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
