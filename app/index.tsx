import { Href, Redirect } from 'expo-router'
import React from 'react'

const App = () => {
    const route = "/tabs" as Href
    // return <Redirect href='/home' />
    // return <Redirect href='/(stack)/home' />
    return <Redirect href={route} />

    // return (
    //     <SafeAreaView>
    //         <View className='mt-5 mx-2.5'>
    //             <Text className='text-3xl text-primary' style={{ fontFamily: 'WorkSans-Black' }}>hola mundo</Text>
    //             <Text className='text-3xl text-secondary font-work-medium'>hola mundo</Text>
    //             <Text className='text-3xl text-secondary-100 font-work-light'>hola mundo</Text>
    //             <Text className='text-3xl text-secondary-200 font-work-light'>hola mundo</Text>
    //             <Text className='text-3xl text-tertiary font-work-light'>hola mundo</Text>
    //             <Text className='text-3xl'>hola mundo</Text>
    //             <Link href='/products'>Productos</Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App