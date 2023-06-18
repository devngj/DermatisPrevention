import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Input } from '@rneui/themed'
import Toast from 'react-native-toast-message/lib/src/Toast';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setEmailError("");
        setPasswordError("");
        if (email == "") {
            setEmailError("Please enter your email.");
            return;
        }
        else if (password == "") {
            setPasswordError("Please enter your password.");
            return;
        }

        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoading(false);
                navigation.reset({
                    routes: [{ name: 'HomeStackScreen' }]
                })
            })
            .catch((err) => {
                console.log(err.code)
                const errorCode = err.code;
                const errorMessage = err.message;
                if (err.code == 'auth/invalid-email') {
                    Toast.show({
                        type: 'error',
                        text1: 'Please check your email.'
                    })
                }
                else if (err.code == 'auth/wrong-password') {
                    Toast.show({
                        type: 'error',
                        text1: 'Wrong password.'
                    })
                }
                else if (err.code == 'auth/user-not-found') {
                    Toast.show({
                        type: 'error',
                        text1: 'Account does not exist.'
                    })
                }
                setLoading(false);
            });
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/loginback.jpg')}
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
            >Login</Text>
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
                autoCapitalize='none'
                placeholderTextColor={'#7b879b'}
                inputStyle={{
                    fontSize: hp(2)
                }}
                onChangeText={setEmail}
                onChange={() => {
                    setEmailError("");
                }}
                errorMessage={emailError}
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
            <TouchableOpacity
                style={{
                    marginHorizontal: hp(4),
                    backgroundColor: '#0165ff',
                    padding: hp(2),
                    borderRadius: hp(1.3)
                }}
                onPress={() => {
                    login();
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
                            Login
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
                    Don't have an account? <Text onPress={() => { navigation.navigate("Register") }}
                        style={{ fontWeight: 'bold', color: '#0165ff' }}>
                        Register
                    </Text>

                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})

export default LoginScreen;
