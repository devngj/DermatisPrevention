import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Input } from '@rneui/themed'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
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
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const register = async () => {
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        if (name == "") {
            setNameError("Please enter a name.");
            return;
        }
        else if (email == "") {
            setEmailError("Please enter your email.");
            return;
        }
        else if (password == "") {
            setPasswordError("Please enter your password.");
            return;
        }
        else if (confirmPassword != password) {
            setConfirmPasswordError("Password does not match.");
            return;
        }

        try {
            setLoading(true);
            const res = await createUserWithEmailAndPassword(auth, email, password);
            setLoading(false);
            navigation.navigate("Login");
        }
        catch (err) {
            console.log(err.code)
            if(err.code == "auth/email-already-in-use")
            {
                Toast.show({
                    type: 'error',
                    text1: 'This email already exists.'
                })
            }
            else if(err.code == "auth/invalid-email")
            {
                Toast.show({
                    type: 'error',
                    text1: 'Please write your email correctly.'
                })
            }
            else if(err.code == "auth/weak-password")
            {
                Toast.show({
                    type: 'error',
                    text1: 'Please improve your password.'
                })
            }
            setLoading(false);
        }
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
                    onChange={() => {
                        setNameError("");
                    }}
                    errorMessage={nameError}
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
                    autoCapitalize='none'
                    errorMessage={emailError}
                    onChange={() => {
                        setEmailError("");
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
                    errorMessage={passwordError}
                    onChange={() => {
                        setPasswordError("");
                    }}
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
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    errorMessage={confirmPasswordError}
                    onChange={() => {
                        setConfirmPasswordError("");
                    }}
                />
                <TouchableOpacity
                    style={{
                        marginHorizontal: hp(4),
                        backgroundColor: '#0165ff',
                        padding: hp(2),
                        borderRadius: hp(1.3)
                    }}
                    onPress={() => {
                        register();
                    }}
                >

                    {
                        loading ?
                            <ActivityIndicator color="white" size={hp(2)} />
                            :
                            <Text
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    fontSize: hp(2)
                                }}
                            >
                                Register
                            </Text>
                    }
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
                        Don't have an account? <Text onPress={() => { navigation.navigate("Login") }}
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
