import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import imagePath from '../../constant/imagePath';
import styles from './styles';

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const HScrollCard = () => {
  const DATA = [
    { id: '1', image: imagePath.app_icon, title: 'Dutt Guru Kripa', offer: 'Flat ₹125 OFF', time: '31 mins', distance: '1.5 km' },
    { id: '2',  image: imagePath.app_icon, title: 'Shawarma Grill & More', offer: 'Flat 10% OFF', time: '26 mins', distance: '1 km' },
    { id: '3', image: imagePath.app_icon, title: 'Nafees Restaurant', offer: 'Up to 50% OFF', time: '40 mins', distance: '2 km' },
    { id: '4',  image: imagePath.app_icon, title: 'Pizza Palace', offer: '40% OFF', time: '22 mins', distance: '0.8 km' },
    { id: '5',  image: imagePath.app_icon, title: 'Sweet Cravings', offer: '20% OFF', time: '20 mins', distance: '1.2 km' },
    { id: '6',  image: imagePath.app_icon, title: 'Spicy Treats', offer: 'Up to ₹100 OFF', time: '35 mins', distance: '1.8 km' },
    { id: '7',  image: imagePath.app_icon, title: 'Sweet Cravings', offer: '20% OFF', time: '20 mins', distance: '1.2 km' },
    { id: '8',  image: imagePath.app_icon, title: 'Spicy Treats', offer: 'Up to ₹100 OFF', time: '35 mins', distance: '1.8 km' },
  ];

  const groupedData = chunkArray(DATA, 2); // Groups of two items

  const renderGroup = ({ item }) => (
    <View style={styles.groupContainer}>
      {item.map((dataItem) => (
        <TouchableOpacity key={dataItem.id} style={styles.itemContainer}>
          <Image source={dataItem.image} style={styles.image} />
          <Text style={styles.offerText}>{dataItem.offer}</Text>
          <Text style={styles.title} numberOfLines={1}>{dataItem.title}</Text>
          <Text style={styles.details}>
            {dataItem.time} • {dataItem.distance}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <FlatList
      data={groupedData}
      renderItem={renderGroup}
      keyExtractor={(_, index) => `group-${index}`}
      horizontal // Enable horizontal scrolling
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};



export default HScrollCard;
