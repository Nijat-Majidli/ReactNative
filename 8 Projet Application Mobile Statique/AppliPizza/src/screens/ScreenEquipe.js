import React from "react";
import { View, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';


const Equipe = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
           <Icon 
              name="arrow-back" 
              color='#4cb06b' 
              size={30} 
              onPress={() => navigation.navigate("PageAccueil")} 
              style={{margin: 10, alignItems: 'flex-start'}}
            />
            <View style={styles.div}>
              <Text style={styles.h1}>Notre Equipe</Text>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div: {
    flex: 1,
    marginBottom: 15,
  },
  h1: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  },
});

export default Equipe;