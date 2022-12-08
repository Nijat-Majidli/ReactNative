import * as React from 'react';
import { Text } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import AppbarTop from './src/components/AppbarTop';
import AppCard from './src/components/AppCard';
import AppbarBottom from './src/components/AppbarBottom';

export default function Main() {
  return (
    <PaperProvider>
      <AppbarTop/>
      <Text style={{fontSize:30, fontWeight:'bold', color:'violet', marginHorizontal:20, marginTop:10}}>Home</Text>
      <AppCard/>
      <AppbarBottom/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);




