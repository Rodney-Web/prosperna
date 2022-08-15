import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useContext} from 'react'
import { Context } from '../context/ProductContext';
import styles from '../stylesheet/AddProductForm.style'

export default function AddProductForm({ navigation }) {
  const { addData } = useContext(Context)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Please insert title'
      value={title}
      onChangeText={newTitle => setTitle(newTitle)}
      />
      <TextInput
      style={styles.input}
      placeholder='Please insert price'
      keyboardType='numeric'
      maxLength={8}
      onChangeText={(newPrice) => setPrice(newPrice)}
      value={price}
      />
      <TextInput
      style={styles.input}
      placeholder='Please write your product description'
      value={description}
      onChangeText={newDescription => setDescription(newDescription)}
      />
      <TouchableOpacity
      style={styles.formBtn} 
      onPress={() => 
        addData(
        title, 
        price, 
        description, 
        () => navigation.pop()
        )}>
        <Text style={styles.formBtnText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  )
}