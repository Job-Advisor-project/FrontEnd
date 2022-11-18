import Cards from "../components/CompanyCards";
import React, { useEffect, useState } from "react";
import { getCompaniesByTagVm } from "../api/viewModelels/companiesByTagVm";
export default function SearchResult({ tag }) {
  const [companyList, setCompanyList] = useState([]);
  useEffect(() => {
    getCompaniesByTagVm(tag).then((vm) => {
      setCompanyList(vm);
    });
  }, [tag]);

  return <Cards companies={companyList}></Cards>;
}
