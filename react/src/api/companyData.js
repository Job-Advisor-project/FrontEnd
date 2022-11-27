import { settings } from "../config/config";
export async function getCompanyData(input) {
  let url = `${settings.BACKEND_URL}/api/companies?filters[name][$eq]=${input}&populate=*`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
