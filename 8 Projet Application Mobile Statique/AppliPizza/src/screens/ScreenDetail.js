import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';


const Detail = ({ route, navigation }) => {
    const { nom, photo, desc  } = route.params;

    return (
        <View style={styles.container}>    
            <Icon 
              name="arrow-back" 
              color='#4cb06b' 
              size={30} 
              onPress={() => navigation.navigate('Nos Pizzas')} 
              style={{margin: 10, alignItems: 'flex-start'}}
            />
            <View style={styles.div}>
                <Text style={styles.h1}>{nom}</Text>
                <Image source={{ uri:photo }} style={styles.logo} />
                <Text style={styles.text}>{desc}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('#')} style={styles.button}> 
                    <Text style={styles.textButton}>Commander </Text>
                </TouchableOpacity>
            </View>
        </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div: {
    flex: 1,
    alignItems: 'center',
  },
  h1: {
    color: 'red',
    margin: 20,
    fontSize: 30,
  },
  text: {
    margin: 30,
    fontSize: 20,
    textAlign: 'justify'
  },
  logo: {
    width: 350,
    height: 300,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20
  },
  button: {
    width: 300,
    height: 50, 
    backgroundColor: '#4cb06b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation:3,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})