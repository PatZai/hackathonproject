import React from 'react';
// import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Register" element={<RegisterPage />} />
			</Routes>
		</Router>
	);
}

export default App;
