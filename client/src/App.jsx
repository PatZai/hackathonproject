import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ArticlePage from "./pages/ArticlePage";
import ForumPage from "./pages/ForumPage";
import SurveyPage from "./pages/SurveyPage";
import ArticleListPage from "./pages/ArticleListPage";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Router>
    <HashRouter>
      <Routes>
        {/* <div> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Forum" element={<ForumPage />} />
        <Route path="/Articles" element={<ArticlePage />} />
        <Route path="/Survey" element={<SurveyPage />} />
        <Route path="/ArticleList" element={<ArticleListPage />} />
      </Routes>
      {/* </div> */}
    </HashRouter>
    // </Router>
  );
}

export default App;
