import React, {useEffect} from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { exercises } from "../data/exercises";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyeASCq4qLx0x0CeNKG2i17hvjJEcH0CU",
    authDomain: "dermatis-5fbbc.firebaseapp.com",
    projectId: "dermatis-5fbbc",
    storageBucket: "dermatis-5fbbc.appspot.com",
    messagingSenderId: "747374242824",
    appId: "1:747374242824:web:782e3320ca7370435875bd",
    measurementId: "G-DGME54RR5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Authentication
const auth = getAuth(app);

export default function Exercise() {

    useEffect(() => {
        console.log(auth.currentUser.email)
    }, [auth])
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
            <Text
                style={{
                    color: 'black',
                    fontSize: hp(3),
                    marginLeft: hp(2),
                    marginTop: hp(4),
                    fontWeight: 'bold'
                }}
            >
                Recommended Exercise
            </Text>
            {
                exercises.slice(0,1).map((el, ind) => (
                    <View
                        style={{
                            width: wp(90),
                            marginTop: hp(2),
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
            <Text
                style={{
                    color: 'black',
                    fontSize: hp(3),
                    marginLeft: hp(2),
                    marginTop: hp(4),
                    fontWeight: 'bold'
                }}
            >
                Available Exercises
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