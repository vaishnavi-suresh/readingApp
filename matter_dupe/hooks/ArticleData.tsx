//to do
import {useNavigation} from '@react-navigation/native';
import { useArticleStore, useBookmarkStore } from '../store/articleData';

export function useBookmarks() {
    const navigation = useNavigation();
    const { getBookmarks, isBookmarked, toggleBookmark } = useBookmarkStore();

    const bookmarks = getBookmarks();

      const openArticle = (articleId: number) => {
        navigation.navigate("Article", { id: articleId });
    };


    return {
        bookmarks,
        isBookmarked,
        toggleBookmark,
        openArticle
    };
}


