import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

export default function HomeStackScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon type="ionicon" name="home-outline" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon type="ionicon" name="bar-chart-outline" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}