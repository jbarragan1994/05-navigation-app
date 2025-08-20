import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton color='primary' onPress={() => router.push('/tabs/(stack)/products')} className='mb-4'>Productos</CustomButton>
                <CustomButton color='secondary' onPress={() => router.push('/tabs/profile')} className='mb-4'>Perfil</CustomButton>
                <CustomButton color='tertiary' onPress={() => router.push('/tabs/settings')} className='mb-4'>Ajustes</CustomButton>
                <CustomButton variant='text-only' onPress={() => router.push('/tabs/products')} className='mb-4'>Productos</CustomButton>

                <Link href='/tabs/products' asChild>
                    <CustomButton color='primary' onPress={() => router.push('/tabs/products')} className='mb-4'>Productos</CustomButton>
                </Link>
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen