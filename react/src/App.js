import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResult from "./pages/SearchResult";

export default function App() {
  const [tag, setTag] = useState("work&life");

  const handleSelection = (selectedTag) => {
    selectedTag && setTag(selectedTag);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage onSelect={handleSelection} />} />
          <Route path="/searchResult" element={<SearchResult tag={tag} />} />
        </Routes>
      </Router>
    </div>
  );
}
