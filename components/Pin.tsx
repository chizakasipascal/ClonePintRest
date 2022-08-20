import {Image, View, Text, StyleSheet} from "react-native"


const Pin = (props: any) => {
    const {image, title} = props;
    return (
        < View style={styles.pin} >
            <Image source={{
                uri: image,
            }}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
        </View >
    )
};

const styles = StyleSheet.create({

    pin: {
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 25
    },
});

export default Pin;