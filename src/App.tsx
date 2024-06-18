import React from "react";
import Header from "./components/Header";
import BettingSection from "./components/layout/BettingSection";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";

function App() {
  return (
    <div className="h-screen flex flex-col select-none uppercase">
      <Header />
      <BettingSection />
    </div>
  );
}

export default App;
