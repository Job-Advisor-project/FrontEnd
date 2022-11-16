// import * as React from "react";
// import { useCompanies } from "./api/viewModelels/useCompanies";
// import Homepage from "./pages/Home";

// export default function App() {
//   const { companies } = useCompanies();
//   return <Homepage companies={companies}></Homepage>;
// }
//--------------------------------------------------------------------

import React from "react";
import CompanyCards from "./components/CompanyCards";

export default function App() {
  return <CompanyCards />;
}
