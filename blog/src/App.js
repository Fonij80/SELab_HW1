import React from "react";
import "./App.css";

import Posts from "./components/Posts";

const App = () => {
	return (
		<div className="main-container" style={{backgroundColor: "aliceblue"}}>
			<Posts />
		</div>
	);
};

export default App;
