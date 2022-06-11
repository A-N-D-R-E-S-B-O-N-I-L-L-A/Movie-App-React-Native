import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Dimensions,StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { MovieCard } from '../components/MovieCard';
import { Movie, MoviesResult } from '../interfaces/MovieInterface';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColor } from '../helpers/getImageColor';
import { GradientContext } from '../context/GradientContext';

const {width: WindowWidth} = Dimensions.get('window');

interface MoviesResultsInterface {
  now_playing: Movie[],
  popular: Movie[],
  upcoming: Movie[],
  top_rated: Movie[]
}

export const HomeScreen = () => {

  const [moviesResults, setMoviesResults] = useState<MoviesResultsInterface>({
    now_playing: [],
    popular: [],
    upcoming: [],
    top_rated: []
  })

  const gradientContext = useContext(GradientContext);

  useEffect(() => {

    const getNowPlayingMovies = axios.get<MoviesResult>('https://api.themoviedb.org/3/movie/now_playing?api_key=27c70ce40b0c86d41b23b004893a67f8&language=en-US&page=1')
    const getPopularsMovies = axios.get<MoviesResult>('https://api.themoviedb.org/3/movie/popular?api_key=27c70ce40b0c86d41b23b004893a67f8&language=en-US&page=1')
    const getUpcomingMovies = axios.get<MoviesResult>('https://api.themoviedb.org/3/movie/upcoming?api_key=27c70ce40b0c86d41b23b004893a67f8&language=en-US&page=1')
    const getTopRatedMovies = axios.get<MoviesResult>('https://api.themoviedb.org/3/movie/top_rated?api_key=27c70ce40b0c86d41b23b004893a67f8&language=en-US&page=1')

    const getMovies = async() => {
      const resps = await Promise.all([
        getNowPlayingMovies,
        getPopularsMovies,
        getUpcomingMovies,
        getTopRatedMovies
      ])

      setMoviesResults({
        now_playing: resps[0].data.results,
        popular: resps[1].data.results,
        upcoming: resps[2].data.results.reverse(),
        top_rated: resps[3].data.results
      })
      
    }

    getMovies();

    getPosterColor(0);
    

  }, []);

  const getPosterColor = async(index:number) => {

    const uri = `https://image.tmdb.org/t/p/w500${moviesResults.now_playing[index]!.poster_path}`;

    const [primaryColor, secondaryColor] = await getImageColor(uri);

    gradientContext.setMainColors(primaryColor, secondaryColor);

  }
  
  
  return (

    <GradientBackground>

        <ScrollView>

                <View>

                    <Carousel
                          data={moviesResults.now_playing}
                          renderItem={({item}:any)=><MovieCard Movie={item}/>}
                          sliderWidth={WindowWidth}
                          itemWidth={300}
                          onSnapToItem={index => getPosterColor(index)} // this listen when we do a slide
                    />

                </View>

                <HorizontalSlider Movies={moviesResults.popular} TitleSlide={'The most populars'} />
                <HorizontalSlider Movies={moviesResults.upcoming} TitleSlide={'Very soon'} />
                <HorizontalSlider Movies={moviesResults.top_rated} TitleSlide={'Top rated'} />

        </ScrollView>

    </GradientBackground>

  )
}

const styles = StyleSheet.create({

});