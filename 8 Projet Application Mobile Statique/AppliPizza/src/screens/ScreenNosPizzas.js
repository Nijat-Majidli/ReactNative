import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mydata from '../../assets/data.json';
import { Icon } from '@rneui/themed';

const NosPizzas = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Icon 
                name="arrow-back" 
                color='#4cb06b' 
                size={30} 
                onPress={() => navigation.goBack()} 
                style={{margin: 10, alignItems: 'flex-start'}}
            />
            <View style={styles.div}>
                <Text style={styles.h1}>Nos pizzas</Text>
                <ScrollView>
                {
                    mydata.map((item, id) => (
                        <View key={id} style={styles.container2}>
                            <Text style={styles.text}>{item.nom}</Text>
                            <TouchableOpacity 
                                onPress={() => {
                                    navigation.navigate('Detail', { 
                                        nom: item.nom, 
                                        photo: item.photo, 
                                        desc: item.description,
                                    }); 
                                }} 
                            >
                                <Image source={{ uri:item.photo }} style={styles.logo} />
                            </TouchableOpacity>
                        </View>
                    ))
                }
                </ScrollView>
            </View>
        </View>
  );
}

export default NosPizzas;


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
  container2: {
    flex:1,
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 20,
  },
  logo: {
    width: 300,
    height: 200,
  },
  pizza: {
    backfaceVisibility: 'hidden',
  }
})