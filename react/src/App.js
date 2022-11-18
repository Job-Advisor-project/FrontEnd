import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResult from "./pages/SearchResult";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchResult" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}
