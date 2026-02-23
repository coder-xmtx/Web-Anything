import { getNews } from "./api-News";

export async function getFinanceNews() {
  const data = await getNews(535);
  return data;
}
