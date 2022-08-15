import { SafeAreaView } from 'react-native';
import React from 'react'
import Header from '../components/Header'
import ProductItem from '../components/ProductItem';
import FormBtn from '../components/FormBtn';
import styles from '../stylesheet/SafeAreaView.style';

export default function StoreScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <Header onClick={() => navigation.push("AddProduct")} />
    <ProductItem navigation={navigation}/>
    <FormBtn 
    title="Create Product"
    onClick={() => navigation.push("AddProduct")}
    />
    </SafeAreaView>
  )
}