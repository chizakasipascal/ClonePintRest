import {StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import pins from '../assets/data/pins';
import Pin from '../components/Pin';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  return (


    <View style={styles.container}>

      <FlatList
        data={pins}
        renderItem={({item}) => <Pin pin={item} />}
        numColumns={2}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },


});
