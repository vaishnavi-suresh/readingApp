import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Header } from '../../components/Header';
import { useBookmarks } from '../../hooks/ArticleData';
import { ArticleTile } from '../../components/ArticleTile';
import {Bookmark} from 'lucide-react-native'
import { AISummaryCard } from './components/AISummaryCard';
import { Article } from '../../types/Article';

export function HomeScreen({ SummaryItems, articles }: { SummaryItems: { title: string; description: string }[], articles: Article[] }) {
  const navigation = useNavigation();
  const { openArticle } = useBookmarks();

  return (
    <View style={styles.container}>
        <View style={styles.metaRow}>
          <Header title="Home" />
          <TouchableOpacity   onPress={() => navigation.navigate('Bookmarks')}>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <AISummaryCard
          introDescription="This is a brief description of the AI summary."
          SummaryItems={SummaryItems}
        />
        <FlatList
            data={articles}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF7F2", 
    paddingTop: 75,
    paddingHorizontal: 20,
  },
  metaRow:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    paddingBottom: 32,
  },

});