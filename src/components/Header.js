import { View } from 'react-native'
import React from 'react'
import SearchForm from './SearchForm'
import RightIcons from './RightIcons'
import BackIcon from './BackIcon'
import styles from '../stylesheet/Header.style'

export default function Header({ onClick }) {
  return (
    <View style={styles.container}>
     <BackIcon onClick={onClick}/>
     <SearchForm/>
     <RightIcons/>
    </View>
  )
}