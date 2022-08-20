import {StyleSheet, Image} from 'react-native';
import Pin from '../components/Pin';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';

export default function HomeScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Pin
        title={"Title one"}
        image={"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"}
      />

      <Pin
        title={"Title two"}
        image={"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg"}
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
