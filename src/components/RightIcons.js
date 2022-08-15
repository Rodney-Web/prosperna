import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import styles from '../stylesheet/RightIcons.style'

export default function CartIcon() {
  const navigation = useNavigation();
  const counter = useSelector(state => state.cart)

  //counter helper
  const getTotalQuantity = () => {
    let total = 0
    counter.cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.push("Cart")}>
    <Text style={styles.counter}>{getTotalQuantity() || 0}</Text>
    <Feather style={styles.cart} name="shopping-cart" size={25}/>
    </TouchableOpacity>
    <Feather name="user" size={25}/>
    </View>
  )
}