export async function getCompanyData(input, value) {
  let url;
  value === 0 &&
    (url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${input}&populate=image`);
  value === 1 &&
    (url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${input}&populate[0]=image&populate[1]=benefits_compensations&populate=*`);
  value === 2 &&
    (url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${input}&populate[0]=image&populate[1]=social_responsibilities.image`);
  value === 3 &&
    (url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${input}&populate[0]=image&populate[1]=work_life_balances&populate=*`);

  value === 4 &&
    (url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${input}&populate[0]=image&populate[1]=diversity_inclusions.image`);
  console.log(url);
  // value === 5 &&
  //   (url = `https://strapi-production-ed57.up.railway.app/api/companies?filters[name][$eq]=${input}&populate[0]=diversity_inclusions&populate=*`);
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
