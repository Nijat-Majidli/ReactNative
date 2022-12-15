import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SocialIcon } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

const Accueil = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}> 
            <View style={styles.div}>
                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                
                <Text style={styles.text}>
                    Notre pizzeria Guindeche Pizza a ouvert ses portes en aout 2015. Située sur les communes Nogent-sur-Oise 
                    et Creil, nous vous invitons à venir déguster une pizza authentique et savoureuse.
                </Text>

                <TouchableOpacity 
                    onPress={() => navigation.navigate("Nos Pizzas")} 
                    style={styles.button}
                > 
                    <Text style={styles.textButton}>Nos Pizzas <Ionicons name='pizza' color='white' size={30}/> </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={() => navigation.navigate('#')} 
                  style={styles.button}
                > 
                    <Text style={styles.textButton}>Appelez-nous <Ionicons name='call' color='white' size={30}/> </Text>
                </TouchableOpacity>

                <View style={{flex:1, flexDirection:'row'}}>
                    <SocialIcon type='whatsapp'/>
                    <SocialIcon type='facebook' />
                    <SocialIcon type='youtube' />
                </View>
            </View>
        </View>
  );
}

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div: {
    flex:1,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 130,
    marginTop: 40,
    borderColor: 'red',
    borderWidth: 3,
  },
  text: {
    marginTop: 20,
    margin: 40,
    textAlign: 'justify',
    fontSize: 20,
  },
  button: {
    width: 300,
    height: 50, 
    backgroundColor: '#4cb06b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation:3,
    marginBottom: 15,
  },
  textButton: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
})