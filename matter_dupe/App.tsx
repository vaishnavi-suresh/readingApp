import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home/HomeScreen';
import {ArticleScreen} from './screens/Article/ArticleScreen';
import {BookmarksScreen} from './screens/Bookmarks/BookmarkScreen';


type RootStackParamList = {

    Home: undefined,
    Article: {id: number},
    Bookmarks: undefined;
  

};
const Stack = createNativeStackNavigator<RootStackParamList>();

//replace props
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home">{() => <HomeScreen SummaryItems={[]} articles={[]} />}</Stack.Screen> 
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

