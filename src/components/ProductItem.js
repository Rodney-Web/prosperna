import { View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useEffect} from 'react'
import ProductImage from './ProductImage'
import ProductDescriptions from './ProductDescriptions'
import { Context } from '../context/ProductContext'
import styles from '../stylesheet/ProductItem.style'

export default function ProductItem({ navigation }) {
  const { fetchData, state } = useContext(Context)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
      {state && state.map((item, index) =>
          <View 
            key={index}
            style={styles.row}
          >
          <TouchableOpacity 
            onPress={() => navigation.push("ProductDetail", 
            {
              id: item.id,
              title: item.title,
              image: item.image_url,
              description: item.description,
              price: item.price
            })}
          >
          <View>
          <ProductImage image={item.image_url}/>
          <ProductDescriptions
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
          </View>
          </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )
}