import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CardHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.prix}> {props.price} € </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end'
    },
    prix: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
    }
})

export default CardHeader