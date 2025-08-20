import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { router, Stack, useNavigation } from 'expo-router'
import React from 'react'

const StackLayout = () => {
    const navigation = useNavigation()

    const onHeaderLeftPress = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            router.back() // Goes back to the previous screen
            // navigation.dispatch(StackActions.pop()) // Goes back to the previous screen
            return
        }
        navigation.dispatch(DrawerActions.toggleDrawer) // Opens the drawer menu
    }


    return (
        <Stack
            screenOptions={{
                // headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) => <Ionicons onPress={() => onHeaderLeftPress(canGoBack)} name={canGoBack ? 'arrow-back-outline' : 'grid-outline'} size={20} className='mr-5' />, // Example of adding a custom header left component
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Home Screen'
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products Screen',
                    animation: 'ios_from_left'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Profile Screen'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings Screen'
                }}
            />
        </Stack>
    )
}

export default StackLayout