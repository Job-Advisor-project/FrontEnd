import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import CompanyOverview from "./pages/CompanyOverview";
import HomePage from "./pages/Home";
import SearchResult from "./pages/SearchResult";

export default function App() {
  const [tag, setTag] = useState("work&life");
  const [company, setCompany] = useState("");
  const handleSelection = (selectedTag) => {
    selectedTag && setTag(selectedTag);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setCompany={setCompany} onSelect={handleSelection} />
            }
          />
          <Route path="/searchResult" element={<SearchResult tag={tag} />} />
          <Route
            path="/companyOverview"
            element={<CompanyOverview company={company} />}
          />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}
