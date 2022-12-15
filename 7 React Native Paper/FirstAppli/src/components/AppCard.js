import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

// On récupére le contenu du fichier "tp.json" et on le met dans le composant MyData
const MyData = require('../../assets/tp.json')


const AppCard = () => (
    <ScrollView>
        {
            MyData.map((item, id) => (
                <Card key={id} style={{marginVertical:10, marginHorizontal:20, borderColor:'violet', borderWidth:2 }}> 
                    <Card.Content style={{flexDirection:'row'}}>
                        <Card.Content style={{flex:1}}>
                            <Paragraph>{item.date}</Paragraph>
                            <Title style={{marginBottom:40}}>{item.activity}</Title>
                            <Paragraph>Distance</Paragraph>
                            <Title>{item.distance}</Title>
                        </Card.Content>
        
                        <Card.Content style={{flex:1}}>
                            <Card.Cover source={{uri: item.photo}} style={{width:160, height: 100}}/>
                            <Paragraph>Durée</Paragraph>
                            <Title>{item.time}</Title>
                        </Card.Content>
                    </Card.Content>
                </Card>
            ))
        }
    </ScrollView>
);

export default AppCard;



