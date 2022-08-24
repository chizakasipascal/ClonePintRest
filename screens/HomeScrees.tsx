import {StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import pins from '../assets/data/pins';
import Pin from '../components/Pin';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* This Flat list build all itm from assest pins */}
        {/* <FlatList
        data={pins}
        renderItem={({item}) => <Pin pin={item} />}
        numColumns={2}
      /> */}
        {/* Fisrt column */}
        <View style={{backgroundColor: "#94ffa955", flex: 1}}>
          {/* <Pin pin={pins[0]} />
          <Pin pin={pins[2]} />
          <Pin pin={pins[4]} /> */}

          {/* Let loop this object */}

          {pins.filter((item, index) => index % 2 == 0).map(
            (pin) => (
              <Pin pin={pin} />
            ))}
        </View>
        {/* Second column */}
        <View style={{backgroundColor: "#cd94ff", flex: 1}}>
          {/* <Pin pin={pins[1]} />
          <Pin pin={pins[3]} />
          <Pin pin={pins[5]} /> */}

          {pins.filter((item, index) => index % 2 == 1).map(
            (pin) => (
              <Pin pin={pin} />
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


});
