import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Input } from '@rneui/themed'
import LoginScreen from './LoginScreen';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = async () => {

    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <KeyboardAwareScrollView style={styles.container}>
                <Image
                    source={require('../assets/registerback.jpg')}
                    style={{
                        width: wp(100),
                        height: hp(30)
                    }}
                />
                <Text
                    style={{
                        color: '#162b4d',
                        fontSize: hp(4),
                        fontWeight: 'bold',
                        padding: hp(4)
                    }}
                >Register</Text>
                <Input
                    placeholder='Name'
                    containerStyle={{
                        paddingHorizontal: hp(4)
                    }}
                    leftIcon={{
                        type: 'material',
                        name: 'badge',
                        color: '#7b879b',
                        size: hp(2.5)
                    }}
                    placeholderTextColor={'#7b879b'}
                    inputStyle={{
                        fontSize: hp(2)
                    }}
                    onChangeText={setName}
                />
                <Input
                    placeholder='Email'
                    containerStyle={{
                        paddingHorizontal: hp(4)
                    }}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'at',
                        color: '#7b879b',
                        size: hp(2.5)
                    }}
                    placeholderTextColor={'#7b879b'}
                    inputStyle={{
                        fontSize: hp(2)
                    }}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder='Password'
                    containerStyle={{
                        paddingHorizontal: hp(4)
                    }}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'lock',
                        color: '#7b879b',
                        size: hp(2.5)
                    }}
                    placeholderTextColor={'#7b879b'}
                    inputStyle={{
                        fontSize: hp(2)
                    }}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Input
                    placeholder='Confirm Password'
                    containerStyle={{
                        paddingHorizontal: hp(4)
                    }}
                    leftIcon={{
                        type: 'font-awesome',
                        name: 'lock',
                        color: '#7b879b',
                        size: hp(2.5)
                    }}
                    placeholderTextColor={'#7b879b'}
                    inputStyle={{
                        fontSize: hp(2)
                    }}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={{
                        marginHorizontal: hp(4),
                        backgroundColor: '#0165ff',
                        padding: hp(2),
                        borderRadius: hp(1.3)
                    }}
                >

                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: hp(2)
                        }} onPress={() => { navigation.navigate("LoginScreen") }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 5,
                            color: '#717580',
                            fontSize: hp(1.8)
                        }}
                    >
                        Don't have an account? <Text onPress={() => { navigation.navigate("LoginScreen") }}
                            style={{ fontWeight: 'bold', color: '#0165ff' }}>
                            Login
                        </Text>

                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default RegisterScreen;
