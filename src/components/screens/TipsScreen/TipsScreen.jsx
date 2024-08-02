import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { goBackWhite } from '../../../../assets';

function TipsScreen() {
  

  return (
    <ScrollView style={ styles.view }>
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Image source={ goBackWhite } style={ styles.image }/>
          <Text>TIPS</Text>
        </View>
        <TouchableOpacity>
          <Text>
            What Attracts People? 
          </Text>
          <Text>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default TipsScreen;