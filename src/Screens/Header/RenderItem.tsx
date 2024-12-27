import {Dimensions, Image, StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';

import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';


type Props = {
  item: any;
  index: number;
  scrollX: SharedValue<number>;
};
const {width} = Dimensions.get("screen")
const RenderItem = ({item, index, scrollX}: Props) => {
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
        transform : [
            {
                translateX : interpolate (
                    scrollX.value,
                    [(index-1) * width , index * width , (index + 1) * width],
                    [-width * 0.2, 0 , width * 0.2],
                    Extrapolation.CLAMP
                )
            }
        ]
    }
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image
        source={item.image}
        style={styles.titleImage}
      />
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  titleImage: {
    // position: 'absolute',
    width : 100,
    height: 100,
    resizeMode: 'contain',
  },
  container : {
    justifyContent : 'center',
    alignItems : 'center',
    width: width, height: width/2,
    gap : 20
  }
});