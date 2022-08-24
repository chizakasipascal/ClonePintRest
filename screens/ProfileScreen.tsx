import {StyleSheet, Image, Pressable, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import pins from '../assets/data/pins';
import Pin from '../components/Pin';
export default function ProfileScreen() {

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={{
          uri: pins[0].image,
        }}
          style={[styles.image,]}
        />

        <Text style={styles.title}>{pins[0].title}</Text>
        <Text style={styles.subtitle}>100 followers|256 following</Text>

        <View style={styles.container}>
          {/* Fisrt column */}
          <View style={styles.column}>
            {pins.filter((_, index) => index % 2 == 0).map(
              (pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
          {/* Second column */}
          <View style={styles.column}>
            {pins.filter((_, index) => index % 2 != 0).map(
              (pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        </View>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '300',
  },
  image: {
    marginVertical: 30,
    height: 200,
    width: 200,
    borderRadius: 100
  },

  container: {
    padding: 10,
    flexDirection: 'row'
  },
  column: {
    flex: 1
  }
});
