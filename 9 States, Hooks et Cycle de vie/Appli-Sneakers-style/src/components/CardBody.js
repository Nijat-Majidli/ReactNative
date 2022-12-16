import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const CardBody = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.photo} style={styles.image}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.desc} </Text>
        </View>
    )
        
};


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    borderBottomWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
  },
  title: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    marginLeft: 10,
    fontSize: 20,
  }
})

export default CardBody