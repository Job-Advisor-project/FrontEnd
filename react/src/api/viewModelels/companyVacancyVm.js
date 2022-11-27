import { getCompanyVacancies } from "../companyVacancies";

export async function getCompanyVacanciesVm(company) {
  console.log("inside company vacancy", company);
  const data = await getCompanyVacancies(company);
  console.log("comapanyvacancy display", data);
  return data;
}
