// import { useState, useEffect } from "react";

// export const useCompanies = () => {
//   const [companies, setCompanies] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:1337/api/companies`)
//       .then((result) => result.json())
//       .then((obj) => {
//         console.log(obj);
//         const companyData = obj.data;
//         setCompanies(companyData);
//       })
//       .catch(console.warn);
//   }, []);
//   return { companies };
// };
import { useEffect, useState } from "react";

export const useCompanies = (input) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    let url = `http://localhost:1337/api/${input}?fields[0]=id&populate[company][populate][image][fields][0]=formats`;
    fetch(url)
      .then((result) => result.json())
      .then((obj) => {
        console.log(obj.data);
        console.log(url);
        setCompanies(obj.data);
      })
      .catch(console.warn);
  }, [input]);
  return { companies };
};
