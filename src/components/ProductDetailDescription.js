import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '../stylesheet/ProductDetailDescription.style'

export default function ProductDetailDescription({ title, price, description }) {
  return (
    <ScrollView>
      <View style={styles.rowDescription}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      </ScrollView>
  )
}