import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducers/cartSlice'
import styles from "../stylesheet/AddToCartBtn.style"

export default function AddToCartBtn({ btnTitle, id, title, price, quantity }) {
  const dispatch = useDispatch()
  return (
        <View>
          <TouchableOpacity
          onPress={() => dispatch(addToCart({id, title, price, quantity}))} 
          style={styles.addViewCart}>
          <Text style={styles.btnText}>{btnTitle}</Text>
          </TouchableOpacity>
        </View>
  )
}