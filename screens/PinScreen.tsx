

import {Text, View, StyleSheet, Image} from 'react-native';

const PinScreen = () => {
    return <View style={styles.root}>

        <Image source={{uri: ""}} style={styles.image} />
        <Text style={styles.title}></Text>
    </View>
};
const styles = StyleSheet.create({
    root: {},
    image: {},
    title: {}
})
export default PinScreen;