import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from '../screens/ScreenAccueil';
import NosPizzas from '../screens/ScreenNosPizzas';
import Detail from '../screens/ScreenDetail';


const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="PageAccueil" component={Accueil} />
      <Stack.Screen name="Nos Pizzas" component={NosPizzas} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};


export default MainStackNavigator;
