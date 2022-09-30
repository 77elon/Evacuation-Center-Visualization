import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, cardStyleInterpolator } from '@react-navigation/stack';
import all_of_layers from './all_of_layers';
import shelter from './shelter';
import only_map from './only_map';
import water_leak from './water_leak';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName="내 주변 대피소 확인"
    >           
    <Stack.Screen name="지도" component= {only_map} options={{headerShown: false}}/>
    <Stack.Screen name="대피소" component= {shelter} options={{headerShown: false}}/>
    <Stack.Screen name="침수만" component= {water_leak} options={{headerShown: false}}/>
    <Stack.Screen name="침수" component= {all_of_layers} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
  }