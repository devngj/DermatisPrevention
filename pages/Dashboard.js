import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LineChart } from "react-native-chart-kit";
import { Icon } from "@rneui/base";

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
                Sensor Data
            </Text>
            <TouchableOpacity
                style={{
                    borderTopWidth: 1,
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    marginTop: hp(2)
                }}
            >
                <Text
                    style={{
                        fontSize: hp(2.4)
                    }}>
                    Sensor1
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={23} color="green" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}
            >
                <Text
                    style={{
                        fontSize: hp(2.4)
                    }}>
                    Sensor2
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={23} color="green" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}
            >
                <Text
                    style={{
                        fontSize: hp(2.4)
                    }}>
                    Sensor3
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={23} color="green" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}
            >
                <Text
                    style={{
                        fontSize: hp(2.4)
                    }}>
                    Sensor4
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={23} color="green" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}
            >
                <Text
                    style={{
                        fontSize: hp(2.4)
                    }}>
                    Sensor5
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={23} color="green" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}
            >
                <Text
                    style={{
                        fontSize: hp(2.4)
                    }}>
                    All Sensors
                </Text>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={23} color="green" />
                </View>
            </TouchableOpacity>
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