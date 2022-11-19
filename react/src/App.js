import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Nav from "./pages/Nav";
import CompanyList from "./pages/CompanyList";

// import SearchResult from "./pages/SearchResult";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companylist" element={<CompanyList />} />
      </Routes>
      {/* <SearchResult></SearchResult> */}
    </>
  );
}
