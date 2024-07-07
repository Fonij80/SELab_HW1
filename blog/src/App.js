import React from "react";
import './App.css';

import Posts from "./components/Posts";
import Navbar from "./components/BlogNav"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container" style={{backgroundColor: "aliceblue"}}>
        <Navbar />
        <Posts />
        <Footer />
    </div>
  );
}

export default App;