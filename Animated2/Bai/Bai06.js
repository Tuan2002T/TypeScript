import React, { useEffect } from 'react';
import { Animated, Dimensions, Image, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const Bai06 = () => {
  const imagePositionX = new Animated.Value(0);
  const imagePositionY = new Animated.Value(-50);
  const imageScaleX = imagePositionX.interpolate({
    inputRange: [0, width - 50, width],
    outputRange: [1, -1, 1],
  });
  const imageScaleY = imagePositionY.interpolate({
    inputRange: [-50, height - 100, height],
    outputRange: [1, -1, 1],
  });

  useEffect(() => {
    const animateImageX = Animated.loop(
      Animated.sequence([
        Animated.timing(imagePositionX, {
          toValue: width,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(imagePositionX, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    );

    const animateImageY = Animated.loop(
      Animated.sequence([
        Animated.timing(imagePositionY, {
          toValue: height,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(imagePositionY, {
          toValue: -50,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    );

    const stopAnimation = () => {
      animateImageX.stop();
      animateImageY.stop();
    };

    const detectCollision = Animated.event(
      [null, { listener: ({ value }) => detectCollisionHelper(value, stopAnimation) }],
      { useNativeDriver: true }
    );

    animateImageX.start();
    animateImageY.start(detectCollision);

    return () => {
      animateImageX.stop();
      animateImageY.stop();
    };
  }, []);

  const detectCollisionHelper = (valueY, stopAnimation) => {
    const xPos = imagePositionX._value;
    const yPos = valueY;
    if (yPos >= height - 100 && Math.abs(xPos - (width / 2)) < 50) {
      stopAnimation();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.Image
        source={{ uri: 'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2021/11/shipper-1-1.png' }}
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          left: imagePositionX,
          top: 100,
          transform: [{ scaleX: imageScaleX }],
        }}
      />
      <Animated.Image
        source={{ uri: 'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2021/11/shipper-1-1.png' }}
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          left: width / 2 - 25,
          top: imagePositionY,
          transform: [{ scaleY: imageScaleY }],
        }}
      />
    </View>
  );
};

export default Bai06;