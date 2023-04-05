import React from 'react';
// import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HashRouter, Route,Routes } from 'react-router-dom';


function App() {
	return (
		// <Router>
		<HashRouter>
			<Routes>
			{/* <div> */}
				<Route path="/" element={<HomePage />} />
				<Route path="/Register" element={<RegisterPage />} />
				</Routes>
			{/* </div> */}
		</HashRouter>
		// </Router>
	);
}

export default App;
