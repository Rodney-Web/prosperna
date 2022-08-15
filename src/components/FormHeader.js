import { View, Text } from 'react-native'
import React from 'react'
import BackIcon from '../components/BackIcon';
import RightIcons from '../components/RightIcons';
import styles from '../stylesheet/FormHeader.style'

export default function FormHeader({ headerTitle, navigation }) {
  return (
    <View style={styles.container}>
    <BackIcon 
    onClick={() => navigation.goBack()}
    />
    <Text style={styles.headerTitle}>
    {headerTitle}
    </Text>
    <RightIcons/>
    </View>
  )
}