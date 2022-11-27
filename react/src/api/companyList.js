import { settings } from "../config/config";

export async function getCompanyList() {
  let url = `${settings.BACKEND_URL}/api/companies`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
