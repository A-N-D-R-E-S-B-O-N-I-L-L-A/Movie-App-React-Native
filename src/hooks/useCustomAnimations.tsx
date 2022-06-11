import React from 'react'
import { Animated} from 'react-native'

export const useCustomAnimations = (opacity:any, duration:number) => {

    const fadeIn = () => {
        Animated.timing(opacity, {toValue: 1, duration, useNativeDriver: true}).start()
    }

    const fadeOut = () => {
        Animated.timing(opacity, {toValue: 0, duration, useNativeDriver: true}).start()
    }


  return [fadeIn, fadeOut];

}

