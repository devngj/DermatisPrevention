import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, ImageBackground, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LineChart } from "react-native-chart-kit";
import { Icon } from "@rneui/themed";

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
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

export default function Detail(props) {
    const { sensorType } = props.route.params
    const [isSelected, setSelection] = useState(false);
    const [average, setAverage] = useState(10);
    const [lastWeekAverage, setLastWeekAverage] = useState(6);
    const [min, setMin] = useState(4);
    const [lastWeekMin, setLastWeekMin] = useState(8);
    const [max, setMax] = useState(15);
    const [lastWeekMax] = useState(23);
    const [activated, setActivated] = useState(1);
    const [lastWeekActivated, setLastWeekActivated] = useState(2);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f7f7f7'
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: hp(4),
                    fontWeight: 'bold',
                    marginTop: hp(8),
                    marginLeft: hp(3)
                }}
            >
                {sensorType == 'sensor1' ? "Sensor 1" :
                    sensorType == 'sensor2' ? "Sensor 2" :
                    sensorType == 'sensor3' ? "Sensor 3" :
                    sensorType == 'sensor4' ? "Sensor 4" :
                    sensorType == 'sensor5' ? "Sensor 5" :
                    "All Sensors"
                }
            </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: hp(2)
            }}>
                <View style={{
                    backgroundColor: '#fff',
                    height: hp(15),
                    borderRadius: hp(2),
                    width: wp(43)
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(2),
                            marginLeft: hp(2),
                            marginTop: hp(2)
                        }}
                    >
                        Average
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginTop: hp(1),
                            marginLeft: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                            {average}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: hp(2),
                            marginTop: hp(1)
                        }}
                    >
                        <Icon 
                            type="ionicon"
                            name={(average - lastWeekAverage) > 0 ? "arrow-up-outline" : "arrow-down-outline"}
                            size={hp(2)}
                            color={(average - lastWeekAverage) > 0 ? '#71d5aa' : '#e65c6d'}
                            style={{
                                backgroundColor: (average - lastWeekAverage) > 0 ? '#c1ecd9' : '#f4b8bf',
                                borderRadius: 100
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: hp(1),
                                color: (average - lastWeekAverage) > 0 ? '#71d5aa' : '#e65c6d',
                                fontSize: hp(1.5)
                            }}
                        >
                            {(average - lastWeekAverage) > 0 ? 
                            '+' + (((average-lastWeekAverage)/lastWeekAverage) * 100).toFixed(2) + '%'
                            :
                            (((average-lastWeekAverage)/lastWeekAverage) * 100).toFixed(2) + '%'
                            }
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginLeft: hp(2),
                            fontSize: hp(1.5),
                            color: '#bcbcbc'
                        }}
                    >
                        Than Last Week
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#fff',
                    height: hp(15),
                    borderRadius: hp(2),
                    width: wp(43)
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(2),
                            marginLeft: hp(2),
                            marginTop: hp(2)
                        }}
                    >
                        Min
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginTop: hp(1),
                            marginLeft: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                            {min}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: hp(2),
                            marginTop: hp(1)
                        }}
                    >
                        <Icon 
                            type="ionicon"
                            name={(min - lastWeekMin) > 0 ? "arrow-up-outline" : "arrow-down-outline"}
                            size={hp(2)}
                            color={(min - lastWeekMin) > 0 ? '#71d5aa' : '#e65c6d'}
                            style={{
                                backgroundColor: (min - lastWeekMin) > 0 ? '#c1ecd9' : '#f4b8bf',
                                borderRadius: 100
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: hp(1),
                                color: (min - lastWeekMin) > 0 ? '#71d5aa' : '#e65c6d',
                                fontSize: hp(1.5)
                            }}
                        >
                            {(min - lastWeekMin) > 0 ? 
                            '+' + (((min-lastWeekMin)/lastWeekMin) * 100).toFixed(2) + '%'
                            :
                            (((min-lastWeekMin)/lastWeekMin) * 100).toFixed(2) + '%'
                            }
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginLeft: hp(2),
                            fontSize: hp(1.5),
                            color: '#bcbcbc'
                        }}
                    >
                        Than Last Week
                    </Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: hp(2)
            }}>
                <View style={{
                    backgroundColor: '#fff',
                    height: hp(15),
                    borderRadius: hp(2),
                    width: wp(43)
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(2),
                            marginLeft: hp(2),
                            marginTop: hp(2)
                        }}
                    >
                        Max
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginTop: hp(1),
                            marginLeft: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                            {max}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: hp(2),
                            marginTop: hp(1)
                        }}
                    >
                        <Icon 
                            type="ionicon"
                            name={(max - lastWeekMax) > 0 ? "arrow-up-outline" : "arrow-down-outline"}
                            size={hp(2)}
                            color={(max - lastWeekMax) > 0 ? '#71d5aa' : '#e65c6d'}
                            style={{
                                backgroundColor: (max - lastWeekMax) > 0 ? '#c1ecd9' : '#f4b8bf',
                                borderRadius: 100
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: hp(1),
                                color: (max - lastWeekMax) > 0 ? '#71d5aa' : '#e65c6d',
                                fontSize: hp(1.5)
                            }}
                        >
                            {(max - lastWeekMax) > 0 ? 
                            '+' + (((max-lastWeekMax)/lastWeekMax) * 100).toFixed(2) + '%'
                            :
                            (((max-lastWeekMax)/lastWeekMax) * 100).toFixed(2) + '%'
                            }
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginLeft: hp(2),
                            fontSize: hp(1.5),
                            color: '#bcbcbc'
                        }}
                    >
                        Than Last Week
                    </Text>
                </View>
                <View style={{
                    backgroundColor: '#fff',
                    height: hp(15),
                    borderRadius: hp(2),
                    width: wp(43)
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(2),
                            marginLeft: hp(2),
                            marginTop: hp(2)
                        }}
                    >
                        Time
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginTop: hp(1),
                            marginLeft: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                            {activated}hr
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: hp(2),
                            marginTop: hp(1)
                        }}
                    >
                        <Icon 
                            type="ionicon"
                            name={(activated - lastWeekActivated) > 0 ? "arrow-up-outline" : "arrow-down-outline"}
                            size={hp(2)}
                            color={(activated - lastWeekActivated) > 0 ? '#71d5aa' : '#e65c6d'}
                            style={{
                                backgroundColor: (activated - lastWeekActivated) > 0 ? '#c1ecd9' : '#f4b8bf',
                                borderRadius: 100
                            }}
                        />
                        <Text
                            style={{
                                marginLeft: hp(1),
                                color: (activated - lastWeekActivated) > 0 ? '#71d5aa' : '#e65c6d',
                                fontSize: hp(1.5)
                            }}
                        >
                            {(activated - lastWeekActivated) > 0 ? 
                            '+' + (((activated-lastWeekActivated)/lastWeekActivated) * 100).toFixed(2) + '%'
                            :
                            (((activated-lastWeekActivated)/lastWeekActivated) * 100).toFixed(2) + '%'
                            }
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginLeft: hp(2),
                            fontSize: hp(1.5),
                            color: '#bcbcbc'
                        }}
                    >
                        Than Last Week
                    </Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: 'white',
                    paddingVertical: hp(3),
                    width: wp(90),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 16,
                    marginTop: hp(2)
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: hp(2),
                        marginLeft: hp(2)
                    }}
                >
                    Overview
                </Text>
                <LineChart
                    data={data}
                    width={wp(90)} // from react-native
                    height={220}
                    yAxisInterval={1} // optional, defaults to 1
                    withInnerLines={false}
                    withOuterLines={false}
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    resizeMode="contain"
                />
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