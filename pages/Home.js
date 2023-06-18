import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Home() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/chair.jpeg')}
                style={{
                    width: wp(80),
                    height: hp(50)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})