import { getCompaniesByTag } from "../companiesByTag";
/**
 * Remove duplicates from fetched data
 * @param {input} string - Selected tag. Needed for api call
 * @returns {obj} Unique list of companies
 **/
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
    console.log(uniqueCompanyList);
    return uniqueCompanyList;
  }
  return;
}
