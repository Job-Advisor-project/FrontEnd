import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyOverview from "./pages/CompanyOverview";
import HomePage from "./pages/Home";
import SearchResult from "./pages/SearchResult";

export default function App() {
  const [tag, setTag] = useState("work-life-balances");
  const [company, setCompany] = useState("");
  const handleSelection = (selectedTag) => {
    selectedTag && setTag(selectedTag);
  };
  console.log(company);

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
          <Route
            path="/searchResult"
            element={<SearchResult setCompany={setCompany} tag={tag} />}
          />
          <Route
            path="/companyOverview"
            element={<CompanyOverview company={company} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
