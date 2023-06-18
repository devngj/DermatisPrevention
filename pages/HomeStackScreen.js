import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";

const Tab = createBottomTabNavigator();

export default function HomeStackScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}