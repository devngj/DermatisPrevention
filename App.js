import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen';
import Toast from 'react-native-toast-message';
import HomeStackScreen from './pages/HomeStackScreen';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ headerShown: false}} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false}} initialParams={{sensorType: "sensor1"}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
