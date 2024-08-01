import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoadingScreen from './src/components/screens/LoadingScreen/LoadingScreen';
import PaywallScreen from './src/components/screens/PaywallScreen/PaywallScreen';

function App(){
  

  return (
    <View>
      <PaywallScreen />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
