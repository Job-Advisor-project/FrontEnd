import { getCompanyVacancies } from "../companyVacancies";

export async function getCompanyVacanciesVm(company) {
  console.log(company);
  const data = await getCompanyVacancies(company);
  console.log(data);
  return data;
}
