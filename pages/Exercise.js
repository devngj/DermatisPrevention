import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { exercises } from "../data/exercises";

export default function Exercise() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
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
                Exercises
            </Text>
            <ScrollView
                style={{
                    marginTop: hp(3)
                }}
            >
                {
                    exercises.map((el, ind) => (
                    <View
                        style={{
                            width: wp(90),
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: hp(4),
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            backgroundColor: 'white',
                            borderRadius: hp(1),
                            padding: hp(2)
                        }}
                        key={ind}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: hp(2)
                            }}
                        >
                            <Image 
                                source={el.image}
                                style={{
                                    width: hp(5),
                                    height: hp(8)
                                }}
                                resizeMode="contain"
                            />
                            <View
                                style={{
                                    width: wp(60)
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: hp(2.5),
                                        fontWeight: 'bold',
                                        letterSpacing: 1.5,
                                        marginLeft: hp(2)
                                    }}
                                >
                                    {el.name}
                                </Text>
                            </View>
                        </View>
                        <Text>
                            {el.description}
                        </Text>
                    </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}