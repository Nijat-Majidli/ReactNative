import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from './src/components/Card';
import customData from './assets/data.js'  // On récupére les données depuis le fichier data.js et on les mets dans customData


export default function App() {
  return (
    <ScrollView style={styles.container}>
      {
        customData.map((item, index) => {
          return (
            <View key={index} style={styles.card}>
                <Card 
                  price={item.price} 
                  title={item.title} 
                  photo={item.photo} 
                  desc={item.desc} 
                  size={item.size} 
                  likes={item.likes} 
                />
            </View>
          )
        })
      }
    </ScrollView>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,   
  },
  card: {
    marginVertical: 15,
    marginHorizontal: 20,
  }
});
