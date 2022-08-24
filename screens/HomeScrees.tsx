import {StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import pins from '../assets/data/pins';
import Pin from '../components/Pin';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    flexDirection: 'row'
  },
  column: {
    flex: 1
  }
});


{/* This Flat list build all itm from assest pins */}
{/* <FlatList
        data={pins}
        renderItem={({item}) => <Pin pin={item} />}
        numColumns={2}
      /> */}