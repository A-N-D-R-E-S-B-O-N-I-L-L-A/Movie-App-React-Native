import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const useMovieCredits = (movieId: string) => {

  const [movieCredits, setMovieCredits] = useState<any>({
    isLoading: true,
    cast: []
  });

  const getMovieCast = async() => {

      const cast = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=27c70ce40b0c86d41b23b004893a67f8&language=en-US`);

      setMovieCredits({
          isLoading: false,
          cast: cast.data.cast
      })
      
  }
  
  useEffect(() => {
    getMovieCast();
  }, [])
  

  return [movieCredits]
}

