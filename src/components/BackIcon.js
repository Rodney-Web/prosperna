import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

export default function BackIcon({onClick}) {
  return (
    <View>
        <TouchableOpacity onPress={() => onClick()}>
        <Feather name="corner-down-left" size={25}/>
        </TouchableOpacity>
    </View>
  )
}