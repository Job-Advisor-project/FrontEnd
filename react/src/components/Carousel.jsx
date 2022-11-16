import React, { useState } from "react";
import { useCompanies } from "../api/useCompanies";
export default function Carousel() {
  const [section, setSection] = useState("work-life-balances");
  useCompanies(section);

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <span
        onClick={() => {
          setSection("work-life-balances");
        }}
      >
        Work life balance
      </span>
      <span
        onClick={() => {
          setSection("diversity-inclusions");
        }}
      >
        Diversity and inclusion
      </span>
      <span
        onClick={() => {
          setSection("benefits-compensations");
        }}
      >
        Benefits and Compensation
      </span>
      <span
        onClick={() => {
          setSection("social-responsibilities");
        }}
      >
        Sustainability
      </span>
    </div>
  );
}
