import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../stylesheet/CartItem.style'

export default function CartItem() {
const itemsInCart = useSelector(state => state.cart);

const getTotal = () => {
  let totalPrice = 0
  itemsInCart.cart.forEach(item => {
    totalPrice += item.price * item.quantity
  })
  return {totalPrice}
}

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Product Name</Text>
      <Text style={styles.headerTitle}>Quantity</Text>
      <Text style={styles.headerTitle}>Price</Text>
      <Text style={styles.headerTitle}>Total</Text>
    </View>
    {itemsInCart.cart.map((item, index) =>
    <View style={styles.cell} key={index}>
      <Text style={styles.cellTitle}>{item.title}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.total}></Text>
    </View>
    )}
    <View style={styles.overAllContainer}>
      <View style={styles.overAll}>
      <Text style={styles.overAllText}>Total: ${getTotal().totalPrice}</Text>
      </View>
    </View>
  </View>
)
}