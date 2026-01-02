import React, { use } from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {ArticleTile} from '../../components/ArticleTile';
import {useBookmarks} from '../../hooks/ArticleData';

//make the titles consistent in the components
export function BookmarkScreen() {
    const {bookmarks, openArticle} = useBookmarks();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bookmarks</Text>
            <FlatList
                data={bookmarks}
                renderItem={({ item }) => (
                    <ArticleTile
                        key={item.id}
                        title={item.title}
                        imageURI={item.imageURI}
                        vibe={item.vibe}
                        readingTime={item.readingTime}
                        newsletterName={item.newsletterName}
                        onPress={() => clickArticle(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8ecddff", paddingTop: 60, paddingHorizontal: 18 },
    title: { fontSize: 28, fontWeight: "500", marginBottom: 18 }, //comment out once we have consistency
    list: { paddingBottom: 24 },

});
