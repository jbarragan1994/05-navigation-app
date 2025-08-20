import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false}>
            <View className='flex-1 items-center justify-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex-1 items-center justify-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-3xl text-primary font-work-bold'>JB</Text>
                </View>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer