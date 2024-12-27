import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import imagePath from '../../constant/imagePath'


const ExpoleCard = () => {
        const DATA = [
          { id: '1', image: imagePath.app_icon, title: ''},
          { id: '2',  image: imagePath.app_icon, title: 'Shawarma Grill & More'},
          { id: '3', image: imagePath.app_icon, title: 'Nafees Restaurant'},
          { id: '4',  image: imagePath.app_icon, title: 'Pizza Palace'},
          { id: '5',  image: imagePath.app_icon, title: 'Sweet Cravings'},
          { id: '6',  image: imagePath.app_icon, title: 'Spicy Treats'},
          { id: '7',  image: imagePath.app_icon, title: 'Sweet Cravings'},
          { id: '8',  image: imagePath.app_icon, title: 'Spicy Treats'},
        ];
      
  return (
    <View style = {styles.container}>   
      <View style = {styles.headerContainer}>
      <View style={styles.line} />
        <Text style = {styles.midText}>Whats's in your mind</Text>
        <View style={styles.line} />

    
      </View>
      
    </View>
  )
}

export default ExpoleCard