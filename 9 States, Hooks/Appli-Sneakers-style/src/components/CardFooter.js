import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LikeBtn from './LikeBtn';


const CardFooter = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.taille}>Taille: {props.size}</Text>
            <LikeBtn style={styles.like} likes={props.likes} /> 
        </View>
    )
        
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 10,
  },
  taille: {
    fontSize: 20,
    marginRight: 220,
  },
})

export default CardFooter