import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {Newspaper} from 'lucide-react-native'

export function Header({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Newspaper />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical:24,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 30,
    fontFamily: "PlayfairDisplay-Regular", 
    fontWeight: "400",
    marginHorizontal: 16,

    color: "#111111",

  },
});
