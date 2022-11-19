/**
 * Fetch data about companies based on selected tag
 * @param {input} string - Selected tag. Needed for api call
 * @returns {obj} List of all companies that have info about selected tag in backend
 **/

export async function companiesByDisplay() {
  let url = `http://localhost:1337/api/companies`;
  const response = await fetch(url);
  const result = await response.json();
  const data = result.data;
  console.log(data);
  return { data };
}
