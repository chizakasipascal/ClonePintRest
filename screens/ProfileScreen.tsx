import pins from '../assets/data/pins';
import {Text, View} from '../components/Themed';
import MasonryList from '../components/MasonryList';
import {StyleSheet, Image, ScrollView} from 'react-native';
import {Entypo, Feather} from '@expo/vector-icons';
export default function ProfileScreen() {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Feather name='share' size={24} color="black" style={styles.icon} />
          <Entypo
            name='dots-three-horizontal'
            size={24}
            color="black"
            style={styles.icon}

          />
        </View>
        <Image source={{
          uri: pins[0].image,
        }} style={[styles.image,]} />
        <Text style={styles.title}>{pins[0].title}</Text>
        <Text style={styles.subtitle}>100 followers|256 following</Text>
      </View>
      <MasonryList pin={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  icons: {
    flexDirection: 'row',
    alignSelf: "flex-end",
    padding: 10
  },
  icon: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    margin: 5
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
});
