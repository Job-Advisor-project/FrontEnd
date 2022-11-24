export async function getCompanyList() {
  let url = `http://localhost:1337/api/companies`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
