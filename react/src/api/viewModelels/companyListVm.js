import { getCompanyList } from "../companyList";

export async function getCompanyListVm() {
  const data = await getCompanyList();
  let companyList = data.map((a) => a.attributes.name);
  return companyList;
}
