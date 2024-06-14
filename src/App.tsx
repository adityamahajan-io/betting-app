import React from "react";
import "./App.css";
import Header from "./components/Header";
import BettingSection from "./components/layout/BettingSection";
import "./i18n";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <BettingSection />
    </div>
  );
}

export default App;
