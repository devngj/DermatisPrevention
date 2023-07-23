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
    const [sen1CurData, setsen1CurData] = useState(10);
    const [sen2CurData, setsen2CurData] = useState(10);
    const [sen3CurData, setsen3CurData] = useState(10);
    const [sen4CurData, setsen4CurData] = useState(10);
    const [sen5CurData, setsen5CurData] = useState(10);
    const [senAllCurData, setsenAllCurData] = useState(10);

    return (
        <View
            style={styles.container}
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
            <Text
                style={{
                    color: 'gray',
                    fontSize: hp(2.5),
                    marginLeft: hp(2),
                    marginTop: hp(2)
                }}
            >
                Your most recent pressure data
            </Text>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#DDE6ED',
                    alignItems: 'center'
                }}
            >
                <Icon 
                    type="ionicon"
                    name="analytics-outline"
                    size={hp(4)}
                    color={'#969fbd'}
                />
                <View
                    style={{
                        marginLeft: hp(2)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.4),
                            fontWeight: '600'
                        }}>
                        Sensor1
                    </Text>
                    <Text
                        style={{
                            marginTop: hp(1),
                            color: '#8a8ba3',
                            fontWeight: '600'
                        }}
                    >
                        Current: {sen1CurData}
                    </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={hp(3)} color="gray" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#DDE6ED',
                    alignItems: 'center'
                }}
            >
                <Icon 
                    type="ionicon"
                    name="analytics-outline"
                    size={hp(4)}
                    color={'#969fbd'}
                />
                <View
                    style={{
                        marginLeft: hp(2)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.4),
                            fontWeight: '600'
                        }}>
                        Sensor2
                    </Text>
                    <Text
                        style={{
                            marginTop: hp(1),
                            color: '#8a8ba3',
                            fontWeight: '600'
                        }}
                    >
                        Current: {sen2CurData}
                    </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={hp(3)} color="gray" />
                </View>
            </TouchableOpacity><TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#DDE6ED',
                    alignItems: 'center'
                }}
            >
                <Icon 
                    type="ionicon"
                    name="analytics-outline"
                    size={hp(4)}
                    color={'#969fbd'}
                />
                <View
                    style={{
                        marginLeft: hp(2)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.4),
                            fontWeight: '600'
                        }}>
                        Sensor3
                    </Text>
                    <Text
                        style={{
                            marginTop: hp(1),
                            color: '#8a8ba3',
                            fontWeight: '600'
                        }}
                    >
                        Current: {sen3CurData}
                    </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={hp(3)} color="gray" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#DDE6ED',
                    alignItems: 'center'

                }}
            >
                <Icon 
                    type="ionicon"
                    name="analytics-outline"
                    size={hp(4)}
                    color={'#969fbd'}
                />
                <View
                    style={{
                        marginLeft: hp(2)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.4),
                            fontWeight: '600'
                        }}>
                        Sensor4
                    </Text>
                    <Text
                        style={{
                            marginTop: hp(1),
                            color: '#8a8ba3',
                            fontWeight: '600'
                        }}
                    >
                        Current: {sen4CurData}
                    </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={hp(3)} color="gray" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#DDE6ED',
                    alignItems: 'center'

                }}
            >
                <Icon 
                    type="ionicon"
                    name="analytics-outline"
                    size={hp(4)}
                    color={'#969fbd'}
                />
                <View
                    style={{
                        marginLeft: hp(2)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.4),
                            fontWeight: '600'
                        }}>
                        Sensor5
                    </Text>
                    <Text
                        style={{
                            marginTop: hp(1),
                            color: '#8a8ba3',
                            fontWeight: '600'
                        }}
                    >
                        Current: {sen5CurData}
                    </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={hp(3)} color="gray" />
                </View>
            </TouchableOpacity><TouchableOpacity
                style={{
                    padding: hp(2.5),
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    borderBottomColor: '#DDE6ED',
                    alignItems: 'center'
                }}
            >
                <Icon 
                    type="ionicon"
                    name="analytics-outline"
                    size={hp(4)}
                    color={'#969fbd'}
                />
                <View
                    style={{
                        marginLeft: hp(2)
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2.4),
                            fontWeight: '600'
                        }}>
                        All Sensor
                    </Text>
                    <Text
                        style={{
                            marginTop: hp(1),
                            color: '#8a8ba3',
                            fontWeight: '600'
                        }}
                    >
                        Current: {senAllCurData}
                    </Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                    <Icon name="chevron-right" size={hp(3)} color="gray" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})