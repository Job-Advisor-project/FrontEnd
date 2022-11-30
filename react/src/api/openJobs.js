export async function getOpenJobs(company) {
  let url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${company}&populate[0]=image&populate[1]=job_opportunities`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
