export async function getCompanyList() {
  let url = `https://strapi-production-ed57.up.railway.app/api/companies`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
