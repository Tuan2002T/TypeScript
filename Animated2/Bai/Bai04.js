import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

const Ball = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -300,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -300,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    );
    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.ball,
        {
          transform: [{ translateY: translateY }],
          opacity: opacity,
        },
      ]}
    />
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Ball />
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
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
});

export default App;
