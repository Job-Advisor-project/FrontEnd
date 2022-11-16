export async function getCompaniesByTag(input) {
  let url = `http://localhost:1337/api/${input}?fields[0]=id&populate[company][populate][image][fields][0]=formats`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
