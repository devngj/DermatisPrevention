import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { CheckBox } from "@react-native-community/checkbox";
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

export default function Dashboard() {

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
                Long-Term
            </Text>
            <Text
                style={{
                    color: 'black',
                    fontSize: hp(4),
                    fontWeight: 'bold',
                    marginTop: hp(0),
                    marginLeft: hp(2)
                }}
            >
                Pressure Data
            </Text>
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
            <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Do you like React Native?</Text>
                </View>
                <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text>
            </View>
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