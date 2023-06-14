import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Input } from '@rneui/themed'
import LoginScreen from './LoginScreen';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [passwordOrKey, setPasswordOrKey] = useState('');
  const [selectedOption, setSelectedOption] = useState('password');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.container}>
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
                type:'material',
                name: 'badge',
                color:'#7b879b',
                size: hp(2.5)
            }}
            placeholderTextColor={'#7b879b'}
            inputStyle={{
                fontSize: hp(2)
            }}
        />
        <Input
            placeholder='Email'
            containerStyle={{
                paddingHorizontal: hp(4)
            }}
            leftIcon={{
                type:'font-awesome',
                name: 'at',
                color:'#7b879b',
                size: hp(2.5)
            }}
            placeholderTextColor={'#7b879b'}
            inputStyle={{
                fontSize: hp(2)
            }}
        />
        <Input
            placeholder='Password'
            containerStyle={{
                paddingHorizontal: hp(4)
            }}
            leftIcon={{
                type:'font-awesome',
                name: 'lock',
                color:'#7b879b',
                size: hp(2.5)
            }}
            placeholderTextColor={'#7b879b'}
            inputStyle={{
                fontSize: hp(2)
            }}
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
                }} onPress={() => {navigation.navigate("Login")}}    
            >
            Register
            </Text>
        </TouchableOpacity>
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

export default RegisterScreen;
