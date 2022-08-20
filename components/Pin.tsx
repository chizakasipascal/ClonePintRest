import {Image, View, Text, StyleSheet, Pressable} from "react-native"
import {AntDesign} from '@expo/vector-icons';
import {useState, useEffect} from "react"; // react hooks

const Pin = (props: any) => {
    const {image, title} = props.pin; //This is propos
    const OnLike = () => {console.log("Like")};
    const [ratio, setRatio] = useState(1);
    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image]);
    return (
        < View style={styles.pin} >
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
            <Text style={styles.title}>{title}</Text>
        </View >
    )
};

const styles = StyleSheet.create({

    pin: {
        width: '50%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,

    },
    image: {

        width: '100%',
        borderRadius: 25,
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