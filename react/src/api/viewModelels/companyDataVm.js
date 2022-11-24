import { getCompanyData } from "../companyData";

export async function getCompanyDataVm(company) {
  console.log(company);
  const data = await getCompanyData(company);
  console.log(data);
  return data;
}
