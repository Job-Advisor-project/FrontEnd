import { useState, useEffect } from "react";

export const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1337/api/companies`)
      .then((result) => result.json())
      .then((obj) => {
        console.log(obj);
        const companyData = obj.data;
        setCompanies(companyData);
      })
      .catch(console.warn);
  }, []);
  return { companies };
};
