import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ActorCard = ({Actor, With = 300, Height = 450}: any) => {


    const uri = `https://image.tmdb.org/t/p/w500${Actor.profile_path}`;

    return (
        <TouchableOpacity activeOpacity={0.9}>
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