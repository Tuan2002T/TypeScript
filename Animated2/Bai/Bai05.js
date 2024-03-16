import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, Image, StyleSheet } from 'react-native';

const Bai05 = () => {

  const translateX = useRef(new Animated.Value(-200)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 400,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -200,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);


  const fontSize = useRef(new Animated.Value(20)).current;
  const textColor = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(fontSize, {
            toValue: 30,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(fontSize, {
            toValue: 20,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(textColor, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false, 
          }),
          Animated.timing(textColor, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false, 
          }),
        ]),
      ]),
    ).start();
  }, []);


  const scale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri:'https://bambooship.cdn.vccloud.vn/wp-content/uploads/2021/11/shipper-1-1.png'}}
        style={[styles.shipper, { transform: [{ translateX }] }]}
      />
      <Animated.Text
        style={[
          styles.text,
          {
            fontSize: fontSize,
            color: textColor.interpolate({
              inputRange: [0, 1],
              outputRange: ['blue', 'red'],
            }),
          },
        ]}
      >
        Shopee cái gì cũng có...
      </Animated.Text>
      <View style={styles.imagesContainer}>
        <Animated.Image
           source={{uri:'https://songseafoodgrill.vn/wp-content/uploads/2022/03/Coca-2.png'}}
          style={[styles.image, { transform: [{ scale }] }]}
        />
        <Animated.Image
           source={{uri:'https://batos.vn/images/products/2023/07/22/dde75f2b66a14712a94d7160d4e8aab0-849.png?w=500'}}
          style={[styles.image, { transform: [{ scale }] }]}
        />
        <Animated.Image
           source={{uri:'https://png.pngtree.com/png-clipart/20230927/original/pngtree-large-shrimp-with-pasta-png-image_13146449.png'}}
          style={[styles.image, { transform: [{ scale }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shipper: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default Bai05;
