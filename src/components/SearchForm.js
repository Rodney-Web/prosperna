import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react';
import productsApi from '../api/productsApi';
import styles from '../stylesheet/SearchForm.style';

export default function SearchForm() {
  const [filteredData, setFilteredData] = useState([])
  const [masterData, setMasterData] = useState([])
  const [search, setSearch] = useState("")
 

  useEffect(() => {
    getSearchData()
  }, [])

  const getSearchData = () => {
    productsApi.get("/products")
    .then(response => {
      setFilteredData(response.data)
      setMasterData(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const searchFilter = (text) => {
    if(text) {
      const newData = masterData.filter(item => {
        const itemData = item.title ? item.title
            : ""
        const textData = text
        return itemData.indexOf(textData) > -1
      })
      setFilteredData(newData)
      setSearch(text)
    } else {
      setFilteredData(masterData)
      setSearch(text)
    }
    
  }

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      </View>
      </TouchableOpacity>
      
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: "#c8c8c8"  }}/>
    )
  }

  return (
    <View>
      <TextInput
      keyboardAppearance='dark'
      placeholder='Search Store or Product'
      style={styles.inputContainer}
      onChangeText={(text) => searchFilter(text)}
      value={search}
      />
      {/* <FlatList
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={ItemView}
      />
       */}
    </View>
  )
}