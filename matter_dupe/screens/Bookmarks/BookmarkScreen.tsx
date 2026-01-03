import React, { use } from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {ArticleTile} from '../../components/ArticleTile';
import {useBookmarks} from '../../hooks/ArticleData';
import {Header} from '../../components/Header';

//make the titles consistent in the components
export function BookmarksScreen() {
    const {bookmarks, openArticle} = useBookmarks();

    return (
        <View style={styles.container}>
            <Header title="Bookmarks" />

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
                        onPress={() => openArticle(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2", 
    paddingTop: 75,
    paddingHorizontal: 20,
  },

  list: {
    paddingBottom: 32,
  },


});
