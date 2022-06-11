import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MovieCard } from './MovieCard';

export const HorizontalSlider = ({Movies, TitleSlide}:any) => {

  return (
    <View>
          
            <Text style={styles.titleText}>{TitleSlide}</Text>

            <FlatList
                data={Movies}
                renderItem={({item}:any)=><MovieCard Movie={item} With={140} Height={210}/>}
                keyExtractor={(item)=> item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

    </View>
  )
}

const styles = StyleSheet.create({
    titleText: {
        paddingHorizontal: 10,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
      }
});