import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

  return (
      <SafeAreaView className='bg-white flex-1 relative'>
        {/* First Section */}
        <View className="flex-row px-6 mt-8 items-center space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#00BCC9] text-3xl font-3xl font-semibold">Go</Text>
            </View>
            <Text className="text-[#2A2B4B] test-3xl font-semibold">Travel</Text>
        </View>

        {/* Second Section */}
        <View className='px-6 mt-8 space-y-3'>
            <Text className='text-[#3C6072] text-[40px]'>Enjoy the trip with</Text>
            <Text 
            className="text-[#00BCC9] text-[36px] font-bold"
            >Good Moments</Text>

            <Text className="text-[#3C6072] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem a dolore sequi, modi 
            </Text>
        </View>

        {/* Circle Section */}
        <View className="w-[300px] h-[300px] bg-[#00BCC9]  rounded-full absolute bottom-36 -right-28">
        </View>
        <View className="w-[300px] h-[300px] bg-[#E99265]  rounded-full absolute -bottom-20 -left-16">
        </View>

    </SafeAreaView> 
  )
}

export default Home

const styles = StyleSheet.create({})