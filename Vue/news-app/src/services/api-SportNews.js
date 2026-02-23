import { getNews } from "./api-News";

export async function getSportNews() {
  const data = await getNews(534);
  return data;
}
