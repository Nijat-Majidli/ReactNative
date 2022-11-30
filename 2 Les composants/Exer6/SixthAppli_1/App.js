import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

// On récupére le contenu du fichier "tp.json" et on le met dans le composant customData
const customData = require('./assets/tp.json');

// On crée le fonction (composant) Item qui accepte trois paramétres (title, img, desc) et affiche la vue de notre appli
const Item = ({ title, img, desc }) => (
    <View style={styles.div}>
      <View style={styles.div_image}>
        <Image 
          source={{uri: img, }}
          style={styles.image}
        />
      </View>
      <View style={styles.div_text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{desc}</Text>
      </View>
    </View>
);


export default function App() 
{
  // On crée le fonction renderItem qui appelle le composant Item en lui passant le paramétre item
  const renderItem = ({ item }) => (
    <Item 
      title={item.title} 
      img={item.img}
      desc={item.desc}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={customData}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    backgroundColor: '#191970',
  },

  div: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
  },

  div_image: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: '100%', 
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'darkmagenta',
  },

  div_text: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkorange',
  },

  text: {
    textAlign: 'left',
    fontSize: 19,
    color: 'white',
  },
  
});
