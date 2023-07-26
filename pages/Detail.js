import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LineChart } from "react-native-chart-kit";

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
            ]
        },
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
            ]
        }
    ]
}

export default function Detail() {

    const [isSelected, setSelection] = useState(false);

    return (
        <View
            style={StyleSheet.container}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: hp(4),
                    fontWeight: 'bold',
                    marginTop: hp(8),
                    marginLeft: hp(2)
                }}
            >
                Sensor1
            </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View style={{
                    backgroundColor: '#e9e4d8',
                    height: hp(15),
                    margin: hp(2),
                    borderRadius: hp(2),
                    alignContent: 'center'
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginLeft: hp(1),
                            marginTop: hp(2),
                            marginRight: hp(5),
                            fontWeight: 'bold'
                        }}
                    >
                        Average
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginTop: hp(2),
                            marginLeft: hp(1),
                            fontWeight: 'bold'
                        }}
                    >
                            10
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#e9e4d8',
                    height: hp(15),
                    margin: hp(2),
                    borderRadius: hp(2)
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginRight: hp(4),
                            marginLeft: hp(1),
                            marginTop: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                        Min / Max
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginTop: hp(2),
                            marginLeft: hp(1),
                            fontWeight: 'bold'
                        }}
                    >
                            10
                    </Text>
                </View>
            </View>
            <LineChart
                data={data}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                resizeMode="contain"
            />
            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Do you like React Native?</Text>
            </View>
            <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})