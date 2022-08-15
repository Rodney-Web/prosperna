import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext} from 'react'
import { Context } from '../context/ProductContext';
import styles from "../stylesheet/EditProductForm.style"

export default function EditProductForm ({ navigation, id }) {
  const { state, updateData } = useContext(Context)

  //helper function
  const filteredData = state.find(e => e.id === id)

  const [title, setTitle] = useState(filteredData.title)
  const [price, setPrice] = useState(filteredData.price)
  const [description, setDescription] = useState(filteredData.description)

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      value={title}
      onChangeText={newTitle => setTitle(newTitle)}
      />
      <TextInput
      style={styles.input}
      keyboardType='numeric'
      maxLength={8}
      onChangeText={(newPrice) => setPrice(newPrice)}
      value={price}
      />
      <TextInput
      style={[styles.input, { height: 100 }]}
      multiline={true}
      numberOfLines={10}
      value={description}
      onChangeText={newDescription => setDescription(newDescription)}
      />
      <TouchableOpacity
      style={styles.formBtn} 
      onPress={() => 
      updateData(
      id, 
      title, 
      price, 
      description, 
      () => navigation.pop()
      )}>
      <Text style={styles.formBtnText}>
      Update Product
      </Text>
      </TouchableOpacity>
    </View>
  )
}