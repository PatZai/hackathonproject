import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ForumPage from "./pages/ForumPage";
import SurveyPage from "./pages/SurveyPage";
import ArticleListPage from "./pages/ArticleListPage";
import DepressionPage from "./pages/DepressionPage";
import AnxietyPage from "./pages/AnxietyPage";
import TraumaPage from "./pages/TraumaPage";
import PhobiasPage from "./pages/PhobiasPage";

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Forum" element={<ForumPage />} />
        <Route path="/Survey" element={<SurveyPage />} />
        <Route path="/ArticleList" element={<ArticleListPage />} />
        <Route path="/Depression" element={<DepressionPage />} />
        <Route path="/Anxiety" element={<AnxietyPage />} />
        <Route path="/Trauma" element={<TraumaPage />} />
        <Route path="/Phobias" element={<PhobiasPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
