import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Svg, { Defs, RadialGradient, Stop, Ellipse, Text as SVGText } from "react-native-svg";
import axios from 'axios';

export default function Home() {
    const [sensor1, setSensor1] = useState(1);
    const [sensor2, setSensor2] = useState(1);
    const [sensor3, setSensor3] = useState(1);
    const [sensor4, setSensor4] = useState(1);
    const [sensor5, setSensor5] = useState(1);
    const [postureStatus, setPostureStatus] = useState("good");
    const [lastUpdated, setLastUpdated] = useState("2023-07-16 15:58")

    useEffect(() => {
        const getSensorData = () => {
            axios.get('http://52.79.122.229:8000/fetch_most_recent')
            .then(function (response) {
                // handle success
                var data = response.data;
                var sen1 = data.sen1
                var sen2 = data.sen2
                var sen3 = data.sen3
                var sen4 = data.sen4
                var sen5 = data.sen5
                setSensor1((data.sen1/1000));
                setSensor2((data.sen2/1000));
                setSensor3((data.sen3/1000));
                setSensor4((data.sen4/1000));
                setSensor5((data.sen5/1000));

                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
        getSensorData();
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{
                    color: 'black',
                    fontSize: hp(4),
                    fontWeight: 'bold',
                    marginTop: hp(8),
                    marginLeft: hp(2)
                }}>
                    Welcome Back
                </Text>
                <View
                    style={{
                        backgroundColor: '#e9e4d8',
                        height: hp(50),
                        margin: hp(2),
                        borderRadius: hp(2)
                    }}
                >

                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginLeft: hp(2),
                            marginTop: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                        Current Pressure Data
                    </Text>
                    <Text
                        style={{
                            paddingHorizontal: hp(2),
                            marginBottom: hp(2),
                            fontSize: hp(1.2)
                        }}
                    >
                        Last updated: {lastUpdated}
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            paddingHorizontal: hp(2),
                            letterSpacing: 1
                            
                        }}
                    >
                        The figure below shows the current sensor readings of each sensor on the wheel chair. The maximum sensor data is 100 and the minimum is 0.
                    </Text>
                    <ImageBackground
                        source={require('../assets/chair.png')}
                        style={{
                            width: wp(60),
                            height: hp(30),
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                        resizeMode="contain"
                    >
                        <View
                            style={{
                                width: hp(4),
                                height: hp(4),
                                position: 'absolute',
                                top: '40%',
                                left: '30%',
                                borderRadius: hp(20),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Svg height={hp(5)} width={hp(5)}>
                                <Defs>
                                    <RadialGradient
                                        id="grad"
                                        cx="50%"
                                        cy="50%"
                                        rx="50%"
                                        ry="50%"
                                        fx="40%"
                                        fy="40%"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <Stop offset="0" stopColor="rgb(220, 20, 60)" stopOpacity={sensor1} />
                                        <Stop offset="1" stopColor="rgb(220, 20, 60)" stopOpacity={sensor1/2} />
                                    </RadialGradient>
                                </Defs>
                                <Ellipse cx={hp(2)} cy={hp(2)} rx={hp(2)} ry={hp(2)} fill="url(#grad)" />
                                <SVGText
                                    x={hp(2)}
                                    y={hp(2.7)}
                                    fontSize="15"
                                    fontWeight={"bold"}
                                    textAnchor="middle"
                                    fill="white"
                                >
                                    {parseInt(sensor1*100)}
                                </SVGText>

                            </Svg>
                        </View>
                        <View
                            style={{
                                width: hp(4),
                                height: hp(4),
                                position: 'absolute',
                                top: '40%',
                                left: '60%',
                                borderRadius: hp(20),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Svg height={hp(5)} width={hp(5)}>
                                <Defs>
                                    <RadialGradient
                                        id="grad"
                                        cx="50%"
                                        cy="50%"
                                        rx="50%"
                                        ry="50%"
                                        fx="40%"
                                        fy="40%"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <Stop offset="0" stopColor="rgb(220, 20, 60)" stopOpacity={sensor2} />
                                        <Stop offset="1" stopColor="rgb(220, 20, 60)" stopOpacity={sensor2/2} />
                                    </RadialGradient>
                                </Defs>
                                <Ellipse cx={hp(2)} cy={hp(2)} rx={hp(2)} ry={hp(2)} fill="url(#grad)" />
                                <SVGText
                                    x={hp(2)}
                                    y={hp(2.7)}
                                    fontSize="15"
                                    fontWeight={"bold"}
                                    textAnchor="middle"
                                    fill="white"
                                >
                                    {parseInt(sensor2*100)}
                                </SVGText>

                            </Svg>
                        </View>
                        <View
                            style={{
                                width: hp(4),
                                height: hp(4),
                                position: 'absolute',
                                top: '60%',
                                left: '20%',
                                borderRadius: hp(20),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Svg height={hp(5)} width={hp(5)}>
                                <Defs>
                                    <RadialGradient
                                        id="grad"
                                        cx="50%"
                                        cy="50%"
                                        rx="50%"
                                        ry="50%"
                                        fx="40%"
                                        fy="40%"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <Stop offset="0" stopColor="rgb(220, 20, 60)" stopOpacity={sensor3} />
                                        <Stop offset="1" stopColor="rgb(220, 20, 60)" stopOpacity={sensor3/2} />
                                    </RadialGradient>
                                </Defs>
                                <Ellipse cx={hp(2)} cy={hp(2)} rx={hp(2)} ry={hp(2)} fill="url(#grad)" />
                                <SVGText
                                    x={hp(2)}
                                    y={hp(2.7)}
                                    fontSize="15"
                                    fontWeight={"bold"}
                                    textAnchor="middle"
                                    fill="white"
                                >
                                    {parseInt(sensor3*100)}
                                </SVGText>

                            </Svg>
                        </View>
                        <View
                            style={{
                                width: hp(4),
                                height: hp(4),
                                position: 'absolute',
                                top: '60%',
                                left: '70%',
                                borderRadius: hp(20),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Svg height={hp(5)} width={hp(5)}>
                                <Defs>
                                    <RadialGradient
                                        id="grad"
                                        cx="50%"
                                        cy="50%"
                                        rx="50%"
                                        ry="50%"
                                        fx="40%"
                                        fy="40%"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <Stop offset="0" stopColor="rgb(220, 20, 60)" stopOpacity={sensor4} />
                                        <Stop offset="1" stopColor="rgb(220, 20, 60)" stopOpacity={sensor4/2} />
                                    </RadialGradient>
                                </Defs>
                                <Ellipse cx={hp(2)} cy={hp(2)} rx={hp(2)} ry={hp(2)} fill="url(#grad)" />
                                <SVGText
                                    x={hp(2)}
                                    y={hp(2.7)}
                                    fontSize="15"
                                    fontWeight={"bold"}
                                    textAnchor="middle"
                                    fill="white"
                                >
                                    {parseInt(sensor4*100)}
                                </SVGText>

                            </Svg>
                        </View>
                        <View
                            style={{
                                width: hp(4),
                                height: hp(4),
                                position: 'absolute',
                                top: '70%',
                                left: '45%',
                                borderRadius: hp(20),
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Svg height={hp(5)} width={hp(5)}>
                                <Defs>
                                    <RadialGradient
                                        id="grad"
                                        cx="50%"
                                        cy="50%"
                                        rx="50%"
                                        ry="50%"
                                        fx="40%"
                                        fy="40%"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <Stop offset="0" stopColor="rgb(220, 20, 60)" stopOpacity={sensor5} />
                                        <Stop offset="1" stopColor="rgb(220, 20, 60)" stopOpacity={sensor5/2} />
                                    </RadialGradient>
                                </Defs>
                                <Ellipse cx={hp(2)} cy={hp(2)} rx={hp(2)} ry={hp(2)} fill="url(#grad)" />
                                <SVGText
                                    x={hp(2)}
                                    y={hp(2.7)}
                                    fontSize="15"
                                    fontWeight={"bold"}
                                    textAnchor="middle"
                                    fill="white"
                                >
                                    {parseInt(sensor5*100)}
                                </SVGText>

                            </Svg>
                        </View>
                    </ImageBackground>
                </View>
                <View
                    style={{
                        backgroundColor: '#e9e4d8',
                        margin: hp(2),
                        borderRadius: hp(2)
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: hp(3),
                            marginLeft: hp(2),
                            marginTop: hp(2),
                            marginBottom: hp(2),
                            fontWeight: 'bold'
                        }}
                    >
                        Current Posture
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            paddingHorizontal: hp(2),
                            letterSpacing: 1
                            
                        }}
                    >
                        Based on the sensor data, we can analyze whether your current posture is good or bad. Your current posture is:
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: hp(3),
                            fontWeight: 'bold',
                            marginVertical: hp(2),
                            textTransform: 'uppercase',
                            color: postureStatus == 'good' ? '#1A5D1A' : '#F31559'
                        }}
                    >
                        {postureStatus}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})