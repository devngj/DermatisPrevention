import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Home() {
    const [sensor1, setSensor1] = useState(1);
    const [sensor2, setSensor2] = useState(1);
    const [sensor3, setSensor3] = useState(1);
    const [sensor4, setSensor4] = useState(1);
    const [sensor5, setSensor5] = useState(1);


    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={require('../assets/chair.jpeg')}
                    style={{
                        width: wp(70),
                        height: hp(40),
                        position: 'relative'
                    }}
                >
                    <View
                        style={{
                            width: hp(4),
                            height: hp(4),
                            backgroundColor: 'rgba(220, 20, 60, ' + String(sensor1) + ')',
                            position: 'absolute',
                            top: '40%',
                            left: '30%',
                            borderRadius: hp(20),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                opacity: 1,
                                fontWeight: 'bold',
                                fontSize: hp(1.5)
                            }}
                        >
                            50
                        </Text>
                    </View>
                    <View
                        style={{
                            width: hp(4),
                            height: hp(4),
                            backgroundColor: 'rgba(220, 20, 60, ' + String(sensor2) + ')',
                            position: 'absolute',
                            top: '40%',
                            left: '60%',
                            borderRadius: hp(20),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                    <Text
                        style={{
                            color: 'white',
                            opacity: 1,
                            fontWeight: 'bold',
                            fontSize: hp(1.5)
                        }}
                    >
                        50
                    </Text>

                    </View>
                    <View
                        style={{
                            width: hp(4),
                            height: hp(4),
                            backgroundColor: 'rgba(220, 20, 60, ' + String(sensor3) + ')',
                            position: 'absolute',
                            top: '55%',
                            left: '20%',
                            borderRadius: hp(20),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                    <Text
                        style={{
                            color: 'white',
                            opacity: 1,
                            fontWeight: 'bold',
                            fontSize: hp(1.5)
                        }}
                    >
                        50
                    </Text>

                    </View>
                    <View
                        style={{
                            width: hp(4),
                            height: hp(4),
                            backgroundColor: 'rgba(220, 20, 60, ' + String(sensor4) + ')',
                            position: 'absolute',
                            top: '55%',
                            left: '70%',
                            borderRadius: hp(20),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                    <Text
                        style={{
                            color: 'white',
                            opacity: 1,
                            fontWeight: 'bold',
                            fontSize: hp(1.5)
                        }}
                    >
                        50
                    </Text>

                    </View>
                    <View
                        style={{
                            width: hp(4),
                            height: hp(4),
                            backgroundColor: 'rgba(220, 20, 60, ' + String(sensor5) + ')',
                            position: 'absolute',
                            top: '60%',
                            left: '45%',
                            borderRadius: hp(20),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                    <Text
                        style={{
                            color: 'white',
                            opacity: 1,
                            fontWeight: 'bold',
                            fontSize: hp(1.5)
                        }}
                    >
                        50
                    </Text>

                    </View>
                </ImageBackground>
            </ScrollView>
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