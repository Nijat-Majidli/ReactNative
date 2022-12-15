import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './src/navigations/NavigationDrawer';


export default function App() {
  return (
    <NavigationContainer>
      <MainDrawerNavigator/>
    </NavigationContainer>
  );
}
