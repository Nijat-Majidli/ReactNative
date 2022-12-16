import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const LikeBtn = (props) => {
    return (
        <View style={styles.container}>
            <FontAwesome name="heart" size={25} color='red' />
            <Text style={styles.like}>{props.likes}</Text>
        </View>
    )
        
};


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  like: {
    marginLeft: 10,
    fontSize: 20,
  }
})

export default LikeBtn