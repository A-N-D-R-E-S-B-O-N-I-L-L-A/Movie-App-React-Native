import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ActorCard } from '../components/ActorCard';
import { useMovieCredits } from '../hooks/useMovieCredits';

export const DetailScreen = ({route}:any) => {

  const movieInfo = route.params;

  const backgroundUri = `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`;

  const [movieCredits] = useMovieCredits(movieInfo.id.toString());

  return (
    <ScrollView>
        <Image style={styles.detailBackground} source={{uri: backgroundUri}} />

        <View style={styles.container}>

          <Text>{movieInfo.release_date}</Text>
          <Text style={styles.titlePrincipal}>{movieInfo.title}</Text>
          <Text style={styles.overView}>{movieInfo.overview}</Text>

          {!movieCredits.isLoading && <View>                                           
                                          <Text style={styles.subTitle}>Casting:</Text>
                                          <FlatList
                                              data={movieCredits.cast}
                                              renderItem={({item, index}:any)=><ActorCard Actor={item} With={140} Height={210}/>}
                                              keyExtractor={(item)=> item.id.toString()}
                                              horizontal={true}
                                              showsHorizontalScrollIndicator={false} 
                                          />
                                      </View>}


        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    detailBackground: {
      width: '100%',
      height: 200
    },
    titlePrincipal: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 26
    },
    overView: {
      marginTop: 10,
    },
    subTitle: {
      fontSize: 20,
      color: 'black',
      fontWeight: '700',
      marginTop: 10
    }
});