import {StyleSheet, Image, Pressable, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import pins from '../assets/data/pins';
import Pin from '../components/Pin';
import MasonryList from '../components/MasonryList';
export default function ProfileScreen() {

  return (

    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Image source={{
          uri: pins[0].image,
        }} style={[styles.image,]} />

        <Text style={styles.title}>{pins[0].title}</Text>
        <Text style={styles.subtitle}>100 followers|256 following</Text>
      </View>

      <MasonryList pins={pins} />
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    width: '100%',
    // alignItems: 'center',
    // position: "absolute",
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
  container: {
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },

  column: {
    flex: 1
  }
});
