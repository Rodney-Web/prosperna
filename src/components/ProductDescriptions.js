import { View, Text } from 'react-native'
import React from 'react'
import AddToCartBtn from './AddToCartBtn'
import styles from '../stylesheet/ProductDescriptions.style'

export default function ProductDescriptions({ id, title, price, quantity }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View>
      <AddToCartBtn 
      btnTitle="Add to Cart"
      id={id}
      title={title}
      price={price}
      quantity={quantity}
      />
      </View>
    </View>
  )
}