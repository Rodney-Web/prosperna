import { SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import ProductDetailImage from '../components/ProductDetailImage';
import ProductDetailDescription from '../components/ProductDetailDescription';
import FormBtn from '../components/FormBtn';
import styles from '../stylesheet/SafeAreaView.style';

export default function ProductDetailScreen({ navigation, route }) {
  const { id, title, image, description, price } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header onClick={() => navigation.goBack()}/>
      <ProductDetailImage 
      image={image}
      />
      <ProductDetailDescription
      title={title}
      description={description}
      price={price}
      />
      <FormBtn
      title="Edit Product" 
      onClick={() => navigation.navigate("EditProduct", { id: id })}
      />
    </SafeAreaView>
  )
}