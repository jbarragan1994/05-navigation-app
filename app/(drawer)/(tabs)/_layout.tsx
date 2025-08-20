import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'indigo',
            // headerShown: false,
            // tabBarShowLabel: false,
            // tabBarStyle: {
            //     backgroundColor: 'black'
            // },
            // tabBarActiveBackgroundColor: 'white'
        }}>
            <Tabs.Screen
                name="(stack)"
                options={{
                    headerShown: false,
                    title: 'Stack',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home Screen',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="heart" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout