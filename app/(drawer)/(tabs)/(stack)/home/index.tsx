import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { Link, router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton color='primary' onPress={() => router.push('/products')} className='mb-4'>Productos</CustomButton>
                <CustomButton color='secondary' onPress={() => router.push('/profile')} className='mb-4'>Perfil</CustomButton>
                <CustomButton color='tertiary' onPress={() => router.push('/settings')} className='mb-4'>Ajustes</CustomButton>
                <CustomButton variant='text-only' onPress={() => router.push('/products')} className='mb-4'>Productos</CustomButton>

                <Link href='/products' asChild>
                    <CustomButton color='primary' onPress={() => router.push('/products')} className='mb-4'>Productos</CustomButton>
                </Link>

                <CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen