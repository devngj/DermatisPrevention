import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Input } from '@rneui/themed'

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [passwordOrKey, setPasswordOrKey] = useState('');
  const [selectedOption, setSelectedOption] = useState('password');
  const [errorMessage, setErrorMessage] = useState('');

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
                }}    
            >
                    Login
            </Text>
        </TouchableOpacity>
        <View>
            <Text
                style={{
                    textAlign:'center',
                    marginTop: 5,
                    color: '#717580',
                    fontSize: hp(1.8)
                }}
            >
                Don't have an account? <Text onPress={() => {navigation.navigate("Register")}}
                style={{fontWeight: 'bold', color: '#0165ff'}}>
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
