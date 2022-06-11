import React, { useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native'
import { useCustomAnimations } from '../hooks/useCustomAnimations';


export const FadeScreen = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const [fadeIn, fadeOut] = useCustomAnimations(opacity, 300);
    
    
  return (
    <View style={styles.container}>

        <Animated.View style={{
                backgroundColor: 'red',
                width: 180,
                height: 180,
                borderColor: '#fff',
                borderWidth: 10,
                opacity: opacity
        }}>
        </Animated.View>


        <TouchableOpacity onPress={fadeIn}><View><Text style={styles.buttonStyle}>FadeIn</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={fadeOut}><View><Text style={styles.buttonStyle}>FadeOut</Text></View></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        marginTop: 10,
        fontSize: 30
    }
});