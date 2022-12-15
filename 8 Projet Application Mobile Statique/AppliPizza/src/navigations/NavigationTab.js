import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainStackNavigator from '../navigations/NavigationStack';
import Contact from '../screens/ScreenContact';
import Basket from '../screens/ScreenBasket';
import Map from '../screens/ScreenMap';
import Promos from '../screens/ScreenPromos';
import Equipe from '../screens/ScreenEquipe';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator 
        screenOptions={{ headerShown:false }}
        barStyle={{ backgroundColor: '#4cb06b'}}
        // labeled={false}
        activeColor='red'
        inactiveColor='white'
      >
        <Tab.Screen name="Accueil" component={ MainStackNavigator } options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26}/>),}}/>
        <Tab.Screen name="Contact" component={ Contact } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="chat" color={color} size={26}/>),}}/>
        <Tab.Screen name="Panier"  component={ Basket }  options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="basket" color={color} size={26}/>),}}/>
        <Tab.Screen name="Adresse" component={ Map } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="map" color={color} size={26}/>),}}/>
      </Tab.Navigator>
    );
}

const BottomTabNavigator2 = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown:false }}
      barStyle={{ backgroundColor: '#4cb06b'}}
      // labeled={false}
      activeColor='red'
      inactiveColor='white'
    >
      <Tab.Screen name="Promos" component={ Promos } options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="cash" color={color} size={26}/>),}}/>
      <Tab.Screen name="Contact" component={ Contact } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="chat" color={color} size={26}/>),}}/>
      <Tab.Screen name="Panier" component={ Basket } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="basket" color={color} size={26}/>),}}/>
      <Tab.Screen name="Adresse" component={ Map } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="map" color={color} size={26}/>),}}/>
    </Tab.Navigator>
  );
}

const BottomTabNavigator3 = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown:false }}
      barStyle={{ backgroundColor: '#4cb06b'}}
      // labeled={false}
      activeColor='red'
      inactiveColor='white'
    >
      <Tab.Screen name="Equipe" component={ Equipe } options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="head" color={color} size={26}/>),}}/>
      <Tab.Screen name="Contact" component={ Contact } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="chat" color={color} size={26}/>),}}/>
      <Tab.Screen name="Panier" component={ Basket } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="basket" color={color} size={26}/>),}}/>
      <Tab.Screen name="Adresse" component={ Map } options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="map" color={color} size={26}/>),}}/>
    </Tab.Navigator>
  );
}

export { BottomTabNavigator, BottomTabNavigator2, BottomTabNavigator3 };