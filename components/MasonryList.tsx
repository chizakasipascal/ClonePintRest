import {View, Text, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import pins from '../assets/data/pins';
import Pin from './Pin';


interface IMasonryList {
    pin: {
        id: string
        image: string
        title: string
    }[];
}

const MasonryList = ({pins}: IMasonryList) => {
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
    )
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
export default MasonryList