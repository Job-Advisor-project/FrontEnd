import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";

// import SearchResult from "./pages/SearchResult";

export default function App() {
  return (
    <>
      <Homepage></Homepage>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <SearchResult></SearchResult> */}
    </>
  );
}
