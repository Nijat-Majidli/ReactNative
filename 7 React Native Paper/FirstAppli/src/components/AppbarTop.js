import * as React from 'react';
import { Appbar } from 'react-native-paper';
import AppAvatar from './AppAvatar';

const AppbarTop = () => (
  <Appbar.Header style={{backgroundColor:'violet'}}>
    <Appbar.Content title="Activity Tracker" titleStyle={{fontWeight:'bold', fontSize:30, textAlign:'center', color:'white'}}  />
    <AppAvatar />
  </Appbar.Header>
);

export default AppbarTop;