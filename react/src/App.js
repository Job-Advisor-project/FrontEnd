import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import CompanyOverview from "./pages/CompanyOverview";
import HomePage from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import ContactUs from "./pages/ContactUs";

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
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}
