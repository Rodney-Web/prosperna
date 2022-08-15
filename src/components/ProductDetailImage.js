import { View, Image } from 'react-native'
import React from 'react'
import styles from '../stylesheet/ProductDetailImage.style'

export default function ProductDetailImage({ image }) {
  return (
    <View>
      <Image
      style={styles.imageStyle}
      source={{ uri: image }}
      />
    </View>
  )
}