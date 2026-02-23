import { getNews } from "./api-News";

export async function getHotNews() {
  const data = await getNews(532);
  return data;
}
