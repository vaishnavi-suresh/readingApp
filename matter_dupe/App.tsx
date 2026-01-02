import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStackParamList = createNativeStackNavigator({
  Screens:{
    Home: {
      screen: 'HomeScreen',
    },
    Article: {
      screen: 'ArticleScreen',
    },
    Bookmarks: {
      screen: 'BookmarksScreen'
    }
  }

});

export default function App() {
  return (
    <Navigation/>
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
