import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bai04 from './Bai/Bai04';
import Bai05 from './Bai/Bai05';
import Bai06 from './Bai/Bai06';
// import RunningImage from './Bai/Bai06';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bai4" component={Bai04} />
      <Tab.Screen name="Bai5" component={Bai05} />
      <Tab.Screen name="Bai6" component={Bai06} />
      {/* <Tab.Screen name="Test" component={RunningImage} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
