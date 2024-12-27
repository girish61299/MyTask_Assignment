import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Platform,
  useWindowDimensions
} from 'react-native';
import colors from '../styles/colors';
import imagePath from '../constant/imagePath';
import styles from './styles';

export default function ResturentCard() {
  const Dimensions = useWindowDimensions();
  const swiperRef = useRef<FlatList>(null);
  const [activeImgIndx, setActiveImgIndx] = useState<number>(0);

  const data = [
    {
      id: '1',
      title: 'Shawarma Grill & Momo Station',
      time: '26 mins',
      distance: '1 km',
      rating: '4.1',
      discount: 'Flat 10% OFF above ₹450',
      price: '₹150 for one',
      imageData: [
        { id: 1, image: require('../assets/images/upstate.jpg') },
        { id: 2, image: imagePath.app_icon },
        { id: 3, image: imagePath.app_icon },
        { id: 4, image: imagePath.app_icon }
      ]
    },
    {
      id: '2',
      title: 'Shawarma Grill & Momo Station',
      time: '26 mins',
      distance: '1 km',
      rating: '4.1',
      discount: 'Flat 10% OFF above ₹450',
      price: '₹150 for one',
      imageData: [
        { id: 1, image: require('../assets/images/upstate.jpg') },
        { id: 2, image: imagePath.app_icon },
        { id: 3, image: imagePath.app_icon },
        { id: 4, image: imagePath.app_icon }
      ]
    },
    {
      id: '3',
      title: 'Shawarma Grill & Momo Station',
      time: '26 mins',
      distance: '1 km',
      rating: '4.1',
      discount: 'Flat 10% OFF above ₹450',
      price: '₹150 for one',
      imageData: [
        { id: 1, image: require('../assets/images/upstate.jpg') },
        { id: 2, image: imagePath.app_icon },
        { id: 3, image: imagePath.app_icon },
        { id: 4, image: imagePath.app_icon }
      ]
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgIndx((prevIndex) => {
        const nextIndex = prevIndex === data[0].imageData.length - 1 ? 0 : prevIndex + 1;
        swiperRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Sync the active image index with manual scroll
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const index = viewableItems[0]?.index || 0;
    setActiveImgIndx(index);
  });

  // Handle manual scroll
  const onScroll = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / Dimensions.width);
    setActiveImgIndx(index);
  };

  // Render pagination dots for the images
  const renderPagination = (index: number) => {
    return (
      <View
        key={String(index)}
        style={[
          styles.paginationDot,
          {
            backgroundColor:
              activeImgIndx === index ? colors.shadeGreen : colors.teaGreen,
            marginLeft: index !== 0 ? 4 : 0,
            width: activeImgIndx === index ? 25 : 10,
            height: activeImgIndx === index ? 10 : 10,
            borderRadius: activeImgIndx === index ? 7.5 : 5
          }
        ]}
      />
    );
  };

  const renderItem = (item: any) => {
    const { imageData, time, distance, title, discount, rating } = item;

    return (
      <View style={[styles.card,{margin:15}]}>
        <FlatList
          ref={swiperRef}
          data={imageData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(image) => image.id.toString()}
          renderItem={({ item }) => (
            <ImageBackground
              source={item?.image}
              style={{
                width: Dimensions.width, // Full screen width
                height: 300, // Fixed height for image
                justifyContent: 'center',
              }}
            />
          )}
          onScroll={onScroll}
          scrollEventThrottle={16}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
        <View style={styles.topInfo}>
          <Text
            style={[
              styles.timeDistance,
              { backgroundColor: colors.black, flex: 0.5, borderTopRightRadius: 20 }
            ]}>
            {time} • {distance}
          </Text>
          {imageData.length > 1 && (
            <View style={styles.paginationContainer}>
              {/* Render the pagination dots dynamically */}
              {imageData.map((_, index) => renderPagination(index))}
            </View>
          )}
          <View
            style={{
              backgroundColor: 'black',
              flex: 0.5,
              borderBottomLeftRadius: 20
            }}>
            <TouchableOpacity style={{ padding: 0, margin: 0 }}>
              <Text style={{ lineHeight: 0 }}>{'.......'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.vStack}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.discount}>{discount}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{rating} ⭐</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </>
  );
}
