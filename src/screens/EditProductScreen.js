import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import EditProductForm from '../components/EditProductForm'
import FormHeader from '../components/FormHeader';
import styles from '../stylesheet/SafeAreaView.style';

export default function EditProductScreen({ route, navigation }) {
  const { id } = route.params;

  return (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()} 
    accessible={false}>
    <SafeAreaView style={styles.container}>
    <FormHeader headerTitle="Edit Products" navigation={navigation}/>
    <EditProductForm id={id} navigation={navigation} />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}