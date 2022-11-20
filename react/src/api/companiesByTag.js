/**
 * Fetch data about companies based on selected tag
 * @param {input} string - Selected tag. Needed for api call
 * @returns {obj} List of all companies that have info about selected tag in backend
 **/

export async function getCompaniesByTag(tag) {
  let url = `http://localhost:1337/api/${tag}?fields[0]=id&populate[company][populate][image][fields][0]=formats`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  return data;
}
