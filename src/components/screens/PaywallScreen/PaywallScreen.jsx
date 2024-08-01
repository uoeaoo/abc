import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Match } from '../../../../assets';

function PaywallScreen () {
  

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.goBack}>
          <Text style={styles.goBackText}>{'<'}</Text>
        </TouchableOpacity>
        <Image source={Match} style={styles.match}/>
        <View style={styles.about}>
          <Text style={styles.aboutText}>🔥 Unlimited Rizz</Text>
          <Text style={styles.aboutText}>🤝 Trusted by Millions</Text>
          <Text style={styles.aboutText}>♥ Coach Recommended</Text>
          <Text style={styles.aboutText}>🍯 Proven to Get Dates</Text>
          <Text style={styles.aboutText}>📈 x10 More Responses</Text>
          <Text style={styles.aboutText}>😈 x8 More Dates</Text>
        </View>
        <View style={styles.subscribe}>
          <View style={styles.absoluteElement}>
            <Text style={styles.absoluteText}>Rizz God</Text>
          </View>
          <Text style={styles.subscribeTitle}>Elevate Your Game</Text>
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Unlock Free Trial</Text>
          </TouchableOpacity>
          <Text style={styles.risk}>risk-free trial then $8.67/week</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000000'
  },

  container: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  goBack: {
    display: 'flex',
    textAlign: 'left'
    
  },

  goBackText: {
    fontFamily: 'SF-Pro-Display-Regular',
    fontSize: 30,
    color: '#ED217C',
  }

});

export default PaywallScreen