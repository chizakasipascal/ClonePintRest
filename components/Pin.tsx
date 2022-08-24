import {Image, View, Text, StyleSheet, Pressable} from "react-native"
import {AntDesign} from '@expo/vector-icons';
import {useState, useEffect} from "react"; // react hooks
import {useNavigation} from "@react-navigation/native";
const Pin = (props: any) => {
    const {id, image, title} = props.pin; //This is propos 
    const [ratio, setRatio] = useState(1);
    const navigation = useNavigation();
    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image]);
    const OnLike = () => {console.log("Like")};
    const gotoPinPage = () => {
        navigation.navigate("Pin", {id});
    };
    return (
        < Pressable onPress={gotoPinPage} style={styles.pin} >
            <View>
                <Image source={{
                    uri: image,
                }}
                    style={[styles.image, {aspectRatio: ratio}]}
                />
                <Pressable onPress={OnLike} style={styles.heartBtn}>
                    <AntDesign name="hearto" size={16} color="black" />
                </Pressable>
            </View>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </Pressable >
    )
};

const styles = StyleSheet.create({

    pin: {
        width: '100%',
        padding: 4
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        margin: 5,
        lineHeight: 22,
        color: '#181818',
    },
    image: {

        width: '100%',
        borderRadius: 15,
        aspectRatio: 1 / 2
    },
    heartBtn: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
    }
});

export default Pin;