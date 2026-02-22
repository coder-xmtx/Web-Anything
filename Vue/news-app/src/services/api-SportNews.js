export async function getSportNews() {
  const response = await fetch(
    "https://www.mxnzp.com/api/news/list/v2?typeId=534&page=1&app_id=jxwglllvsiegzngn&app_secret=m6VrHB91qBu6g2Hs8dqkMBx0sRUqmX1P",
  );
  const data = await response.json();
  return data.data;
}
