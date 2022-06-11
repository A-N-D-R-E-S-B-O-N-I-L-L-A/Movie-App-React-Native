import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity} from 'react-native'

export const MovieCard = ({Movie, With = 300, Height = 450}: any) => {
   
    const navigation = useNavigation<any>()

    const uri = `https://image.tmdb.org/t/p/w500${Movie.poster_path}`;

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('DetailScreen', Movie)}>
            <Image style={{...styles.image, width: With, height: Height}} source={{uri}} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    image:{
        margin: 10,
        borderRadius: 10
    }
});