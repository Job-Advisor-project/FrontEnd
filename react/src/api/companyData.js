export async function getCompanyData(input) {
  let url = `http://localhost:1337/api/companies?filters[name][$eq]=${input}`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
