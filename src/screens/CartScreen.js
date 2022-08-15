import { SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import styles from '../stylesheet/SafeAreaView.style';

export default function CartScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <Header onClick={() => navigation.goBack()}/>
    <CartItem/>
    </SafeAreaView>
  )
}