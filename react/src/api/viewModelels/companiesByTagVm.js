import { getCompaniesByTag } from "../companiesByTag";

export async function getCompaniesByTagVm(input) {
  if (input) {
    const companiesData = await getCompaniesByTag(input);
    const uniqueCompanyList = Array.from(
      new Set(
        companiesData.map((a) => a.attributes.company.data.attributes.name)
      )
    ).map((name) => {
      return companiesData.find(
        (a) => a.attributes.company.data.attributes.name === name
      );
    });
    return uniqueCompanyList;
  }
  return;
}
