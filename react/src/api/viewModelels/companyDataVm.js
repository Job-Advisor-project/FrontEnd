import { getCompanyData } from "../companyData";

export async function getCompanyDataVm(company, value) {
  console.log(company, value);

  const data = await getCompanyData(company, value);
  console.log(data);
  return data;
}
