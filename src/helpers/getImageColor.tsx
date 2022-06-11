import React from 'react'
import ImageColors from 'react-native-image-colors'

export const getImageColor = async(uri:string) => {

    let primaryColor;
    let secondaryColor;

    const result = await ImageColors.getColors(uri, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    });

    switch (result.platform) {
        case 'android':
          // android result properties
          primaryColor = result.dominant;
          secondaryColor = result.average;
          break
        case 'web':
          // web result properties
          primaryColor = result.dominant;
          secondaryColor = result.vibrant;
          break
        case 'ios':
          // iOS result properties
          primaryColor = result.primary;
          secondaryColor = result.secondary;
          break
        default:
          throw new Error('Unexpected platform key')
    }


  return [primaryColor, secondaryColor];
}

