import React from 'react'
import { View, StyleSheet } from 'react-native'
import CardHeader from '../components/CardHeader'
import CardBody from '../components/CardBody'
import CardFooter from './CardFooter'

const Card = (props) => {
    return (   
        <View style={styles.container}> 
            <CardHeader price={props.price} /> 
            
            <CardBody 
                photo={props.photo} 
                title={props.title} 
                desc={props.desc} 
            />  
            
            <CardFooter 
                size={props.size} 
                likes={props.likes} 
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 5,
    },
})

export default Card