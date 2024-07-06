import React from "react";
import './App.css';

import Posts from "./components/Posts";
import Navbar from "./components/BlogNav"

function App() {
  return (
    <div className="main-container" style={{backgroundColor: "aliceblue"}}>
        <Navbar />
        <Posts />
    </div>
  );
}

export default App;