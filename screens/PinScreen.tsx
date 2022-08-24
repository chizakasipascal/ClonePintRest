

import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import pins from '../assets/data/pins';
import {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons';
const PinScreen = () => {
    const pin = pins[1];
    const [ratio, setRatio] = useState(1);
    const goBack = () => {console.log("Back screen")};
    useEffect(() => {
        if (pin.image) {
            Image.getSize(pin.image, (width, height) => setRatio(width / height));
        }
    }, [pin]);
    const insets = useSafeAreaInsets(); //
    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar style="light" />
            <View style={styles.root}>
                <Image source={{uri: pin.image}} style={[styles.image, {aspectRatio: ratio}]} />
                <Text style={styles.title}>{pin.title}</Text>
            </View>
            <Pressable onPress={goBack} style={[styles.btnBack, {top: insets.top}]}>
                <Ionicons name={"chevron-back"} size={35} color={"white"} />
            </Pressable>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    safe: {
        backgroundColor: 'black'
    },
    image: {
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 5,
        lineHeight: 35,
    },
    btnBack: {
        position: "absolute",
        left: 10,
    }
})
export default PinScreen