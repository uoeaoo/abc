import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Match } from '../../../../assets';
import GradientText from './GradientText';

function LoadingScreen() {
  

  return (
    <View style={styles.view}>
        <GradientText text="CUPID" />
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },

    gradient: {

    },

    text: {

    },

    image: {
 
    }
});

export default LoadingScreen;
