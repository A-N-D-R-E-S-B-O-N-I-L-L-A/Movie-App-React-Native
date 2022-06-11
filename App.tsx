import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
// import { FadeScreen } from './src/screens/FadeScreen';
import { GradientContextProvider } from './src/context/GradientContext';

const App = () => {
  return (
    <NavigationContainer>
      <GradientContextProvider>
            <Navigator />
            {/* <FadeScreen /> */}
      </GradientContextProvider>
    </NavigationContainer>
  )
}

export default App;
