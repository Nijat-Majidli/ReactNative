import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';


const AppbarBottom = () => {
  return (
    <Appbar style={styles.bottom}>
      <Appbar.Action icon="home" size={36} color='white' style={{ marginLeft:50}} onPress={() => {}} />
      <Appbar.Action icon="history" size={36} color='white' style={styles.icons} onPress={() => {}} />
      <Appbar.Action icon="plus" size={36} color='white' style={styles.icons} onPress={() => {}} />
      <Appbar.Action icon="cog-outline" size={36} color='white' style={styles.icons} onPress={() => {}} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'violet',
    left: 0,
    right: 0,
    bottom: 0,
  },
  icons: {
    margin: 15
  }
  
});

export default AppbarBottom;