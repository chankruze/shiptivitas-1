import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/board/Board";
import { HomeTab } from "./components/home/HomeTab";
import { Navigation } from "./components/navigation/Navigation";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const updateTabSelection = (tabName) => setSelectedTab(tabName);

  return (
    <div className="app">
      <Navigation onClick={updateTabSelection} selectedTab={selectedTab} />
      <div className="app-body tab-content" id="nav-tabContent">
        {selectedTab === "home" ? <HomeTab /> : <Board />}
      </div>
    </div>
  );
}
