import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

export const GradientText = ({ text }) => {
    return (
      <MaskedView
        maskElement={
          <View style={styles.maskContainer}>
            <Text style={styles.maskedText}>{text}</Text>
          </View>
        }
      >
        <LinearGradient
          colors={['#ED217C', '#5C1E35']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={[styles.maskedText, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    );
  };
  
  const styles = StyleSheet.create({
    maskContainer: {
      backgroundColor: 'transparent',
    },
    maskedText: {
      fontSize: 50,
      textAlign: 'center',
      color: 'black', 
      fontFamily: 'Syncopate-Bold'
    },
    gradient: {
      
    },
  });

export default GradientText