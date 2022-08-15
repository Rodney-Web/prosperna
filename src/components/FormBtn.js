import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../stylesheet/FormBtn.style'

export default function FormBtn({ onClick, title }) {
  return (
    <View>
      <TouchableOpacity style={styles.editFormBtn} onPress={() => onClick()}>
        <Text style={styles.editFormBtnText}>{title}</Text>
      </TouchableOpacity>
      </View>
  )
}