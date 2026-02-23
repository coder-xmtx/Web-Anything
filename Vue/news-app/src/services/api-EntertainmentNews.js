import { getNews } from "./api-News";

export async function getEntertainmentNews() {
  const data = await getNews(533);
  return data;
}
