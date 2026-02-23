import { getLocalStorage, setLocalStorage } from "@/utils/localstorageHelper";
import { ref } from "vue";

const STORAGE_KEY = "bookmark";

export function useToggleBookmark() {
  const showBookmark = ref(false);
  const toggleBookmark = () => {
    showBookmark.value = !showBookmark.value;
  };
  return { showBookmark, toggleBookmark };
}

export function useBookmark() {
  // 从本地存储获取数据
  const bookmarkNews = ref(getLocalStorage(STORAGE_KEY) || []);
  // 添加收藏
  const addBookmark = (news) => {
    if (!news || !news.newsId) return;
    const exist = bookmarkNews.value.some(
      (item) => item.newsId === news.newsId,
    );
    if (!exist) {
      bookmarkNews.value = [...bookmarkNews.value, news];
      setLocalStorage(STORAGE_KEY, bookmarkNews.value);
    }
  };
  // 删除收藏
  const removeBookmark = (newsId) => {
    bookmarkNews.value = bookmarkNews.value.filter(
      (item) => item.newsId !== newsId,
    );
    setLocalStorage(STORAGE_KEY, bookmarkNews.value);
  };

  // 判断是否收藏
  const isBookmarked = (newsId) => {
    return bookmarkNews.value.some((item) => item.newsId === newsId);
  };

  // 切换收藏状态（常用）
  const toggleBookmark = (news) => {
    if (isBookmarked(news.newsId)) {
      removeBookmark(news.newsId);
    } else {
      addBookmark(news);
    }
  };

  return {
    bookmarkNews,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark,
  };
}
