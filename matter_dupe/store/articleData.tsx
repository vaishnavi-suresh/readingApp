import {create} from 'zustand';
import { Article } from '../types/Article';
type BookmarkState = {
    bookmarks: Article[];
    toggleBookmark: (article: Article) => void;
    getBookmarks: () => Article[];
    isBookmarked: (articleId: number) => boolean;
};

type ArticleState = {
    articles: Article[];

    getArticles: () => Article[];
};

export const useBookmarkStore = create<BookmarkState>((set,get) => ({
    bookmarks: [],
    toggleBookmark: (article) => set((state) => {
        const isBookmarked = state.bookmarks.some((item) => item.id === article.id);
        const bookmarks = isBookmarked
            ? state.bookmarks.filter((item) => item.id !== article.id)
            : [...state.bookmarks, article];
        return { bookmarks };
    }),
    getBookmarks: () => get().bookmarks,
    isBookmarked: (articleId) => {
        return get().bookmarks.some((item) => item.id === articleId);
    }
}));

export const useArticleStore = create<ArticleState>((set, get) => ({
    articles: [],

    getArticles: () => get().articles,
}));
