import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import AddProductForm from '../components/AddProductForm'
import FormHeader from '../components/FormHeader'
import styles from '../stylesheet/SafeAreaView.style';

export default function AddProductScreen({navigation}) {
  return (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()} 
    accessible={false}>
    <SafeAreaView style={styles.container}>
    <FormHeader headerTitle="Add Products" navigation={navigation}/>
    <AddProductForm navigation={navigation}/>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

