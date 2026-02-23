export async function getNews(typeID) {
  const API_URL = import.meta.env.VITE_API_URL;
  const APP_ID = import.meta.env.VITE_APP_ID;
  const APP_SECRET = import.meta.env.VITE_APP_SECRET;

  const response = await fetch(
    `${API_URL}?typeId=${typeID}&page=1&app_id=${APP_ID}&app_secret=${APP_SECRET}`,
  );
  const data = await response.json();
  return data.data;
}
