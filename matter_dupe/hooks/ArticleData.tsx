//to do
import {useNavigation} from '@react-navigation/native';
import { useBookmarkStore } from '../store/articleData';
import { Article } from '../types/Article';

export function useBookmarks() {
    const navigation = useNavigation();
    const { getBookmarks, isBookmarked, toggleBookmark } = useBookmarkStore();

    const bookmarks = getBookmarks();

      const openArticle = (articleId: number) => {
        navigation.navigate("Article", { id: articleId } );//fix?
    };


    return {
        bookmarks,
        isBookmarked,
        toggleBookmark,
        openArticle
    };
}
