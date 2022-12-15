import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigator, BottomTabNavigator2, BottomTabNavigator3 } from '../navigations/NavigationTab';


const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    return (
      <Drawer.Navigator 
        screenOptions={{ 
          headerTintColor: 'white', 
          headerStyle: {backgroundColor:'#4cb06b'}, 
          drawerStyle: {backgroundColor: 'lightgreen', width: 200},
        }}
      >
          <Drawer.Screen  name="Page d'accueil" component={BottomTabNavigator}   options={{headerTitle:''}} />
          <Drawer.Screen  name="Nos Promos"     component={BottomTabNavigator2}  options={{headerTitle:''}} />
          <Drawer.Screen  name="Notre Equipe"   component={BottomTabNavigator3}  options={{headerTitle:''}} />
      </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
