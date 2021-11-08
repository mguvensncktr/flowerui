import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

//Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

//Constants

import { COLORS, icons } from '../constants'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Root"} component={BottomTab} />
                <Stack.Screen name={"Details"} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary
            }}
        >
            <Image
                source={icons.camera}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23,
                }}
            />
        </View>
    )
}

const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: "10%",
            }
        }}>
            <Tab.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.flash}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }} />
            <Tab.Screen
                name={"Box"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.cube}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }} />
            <Tab.Screen
                name={"Camera"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <CameraButton />
                    )
                }}
            />
            <Tab.Screen
                name={"Search"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={"Favourite"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.heart}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Router;