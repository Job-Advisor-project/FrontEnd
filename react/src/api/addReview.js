export async function getAddReview(review) {
  const body = {
    data: review,
  };

  const url = `https://strapi-production-ed57.up.railway.app/api/reviews?populate=company`;
  const response = await fetch(url, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  console.log(result);
  return;
}
