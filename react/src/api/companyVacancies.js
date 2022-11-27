export async function getCompanyVacancies(company) {
  let url = `http://localhost:1337/api/job-opportunities`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  console.log("vacancy data", data);
  return data;
}
