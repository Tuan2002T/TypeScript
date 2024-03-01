https://docs.google.com/spreadsheets/d/1KeiGJj9kPR9l-QXvaYA2eKS0gTmWCwB...=sharing
https://support.console.aws.amazon.com/support/home#/case/?displayId=17...guage=en
10001410547160
912737957392572
requireNativeComponent: "RNSScreenStackHeaderConfig" was not found in the UlManager
https://docs.google.com/document/d/1ddfuyR7AgPDbOdgnmmgyywj9kqEsOqvFF3o...=sharing
https://docs.google.com/presentation/d/1ZjPZ7uu46IjelUAatn3hTFPSwmekaHf...&sd=true
https://docs.google.com/presentation/d/1vx12oADh2JsRMJ8LXq_lvsjyxZ3Cd5k...&sd=true
import React, {useRef,useState} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  
} from 'react-native';

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const width = new Animated.Value(100)
  const height= new Animated.Value(100)
  
  const zoom = () => {
    Animated.timing(width, {
      toValue: 200,
      duration: 200,
    }).start();
    
     Animated.timing(height, {
      toValue: 200,
      duration: 200,
    }).start();
  }
  
  const thunho = () => {
    Animated.timing(width, {
      toValue: 100,
      duration: 200,
    }).start();
    
     Animated.timing(height, {
      toValue: 100,
      duration: 200,
    }).start();
  }
  
   const x = new Animated.Value(0)
   const vetrai = () => {
    Animated.timing(x, {
      toValue: 2,
      duration: 0,
    }).start();
    
  }

  return (

    <SafeAreaView style={styles.container}>
    <Animated.Image style={{width ,height}} source={{               uri:'https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg'}} />
       <View
        style={[
          styles.box,
          {
            transform: [{translateX: -20}],
          },
        ]}>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Zoom" onPress={zoom} />
        <Button title="thu nho" onPress={thunho } />
        <Button title="Trai" onPress={vetrai} />
        <Button title="Phai" onPress={thunho } />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  box: {
    height: 40,
    width: 40,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: '#61dafb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
