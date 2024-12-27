import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../constant/imagePath';
import colors from '../../styles/colors';
// import Animated,{ useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import RenderItem from './RenderItem';
import Carousel from 'react-native-reanimated-carousel';
import { parallaxLayout } from '../../constant/parallax';

const {width} = Dimensions.get('window');
const PAGE_WIDTH = Dimensions.get('screen').width / 2;


const dummyData = [
  {id: '1', image: require('../../assets/images/confessionalTransparent.png')},
  {id: '2', image: require('../../assets/images/cafedeadend.jpg')},
  {id: '3', image: require('../../assets/images/confessionalTransparent.png')},
  {id: '4', image: require('../../assets/images/confessionalTransparent.png')},
];

const HeaderView = () => {
  const [isVegMode, setIsVegMode] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const flashAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        })
      ])
    );

    flashAnimation.start();

    return () => flashAnimation.stop(); // Cleanup on unmount
  }, [fadeAnim]);
  return (
    <LinearGradient
      colors={['#ff6a00', '#ff1900']} // Adjust gradient colors as needed
      style={styles.headerContainer}>
      {/* Location and Profile */}
      <View style={styles.topRow}>
        <View style={styles.locationContainer}>
          <Image
            source={imagePath.map}
            tintColor={colors.white}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
          <View>
            <Text style={styles.locationName}>Meena Masi</Text>
            <Text style={styles.locationAddress}>
              Flat 605, 6 Floor, Dilpasand Solitaire, Raj...
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileText}>G</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar and Veg Mode */}
      <View style={styles.middleRow}>
        <View style={styles.searchBar}>
          <Image
            source={imagePath.search}
            tintColor={colors.white}
            style={{height: 20, width: 20, resizeMode: 'contain'}}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search 'paneer'"
            placeholderTextColor="#fff"
            maxLength={25}
          />
          <Image
            source={imagePath.microphone}
            tintColor={colors.white}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              marginLeft: 'auto',
            }}
          />
        </View>
        <View style={styles.vegModeContainer}>
          <Text style={styles.vegModeText}>VEG MODE</Text>
          <Switch
            value={isVegMode}
            onValueChange={setIsVegMode}
            thumbColor={isVegMode ? '#fff' : '#f4f3f4'}
            trackColor={{false: '#767577', true: '#81b0ff'}}
          />
        </View>
      </View>

      {/* Flash Sale Slider */}
      <View style={styles.flashSaleContainer}>
        <Text style={styles.flashSaleText}>ENDS AT 9 PM</Text>
        <Animated.Image
        source={imagePath.flash}
        style={{
          width: 200,
          height: 100,
          resizeMode: 'contain',
          opacity: 0.9,
        }}
      />

        <View style = {{width : '100%', height : width*0.3}}>
        <Carousel
          loop
          width={PAGE_WIDTH}
          height={100}
          style={{
            width: width,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          autoPlay={true}
          data={dummyData}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log(index)}
          renderItem={({item, index}) => (
            <View
              style={{
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="contain"
              />
            </View>
          )}
          customAnimation={parallaxLayout(
            {
              size: PAGE_WIDTH,
              vertical: false,
            },
            {
              parallaxScrollingScale: 1,
              parallaxAdjacentItemScale: 0.5,
              parallaxScrollingOffset: 40,
            },
          )}
        />
      </View>
        <Text style={styles.flashSaleSubtext}>Dishes at FLAT 50% OFF</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
 
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal : 10
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  locationName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationAddress: {
    color: '#fff',
    fontSize: 12,
  },
  profileButton: {
    backgroundColor: 'blue',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 23,
  },
  searchBar: {
    flex: 0.9,
    backgroundColor: '#222422',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#222422',
    paddingHorizontal: 10,
  },
  vegModeContainer: {
    alignItems: 'center',
    flex: 0.1,
    margin : 10
  },
  vegModeText: {
    color: '#fff',
    fontSize: 12,
  },
  flashSaleContainer: {
    marginTop: 16,
    alignItems: 'center',
    marginBottom : 30
  },
  flashSaleText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: 'transparent',
    
    marginTop : 10,
    paddingTop: 10,
    paddingHorizontal: 15,
    borderColor: '#e88e2a',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 6,
  },
  imageContainer: {
    width: width, // 80% of the screen width
    alignItems: 'center',
    justifyContent: 'center',
    gap : 20,
    backgroundColor:'yellow',
    alignSelf:'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf:'center'
  },
  flashSaleSubtext: {
    color: '#fff',
    fontSize: 12,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 18,
    borderColor: '#e88e2a',
    borderWidth: 1,
    position : 'absolute',
    bottom : -35,
    zIndex : 1

  },
});

export default HeaderView;
