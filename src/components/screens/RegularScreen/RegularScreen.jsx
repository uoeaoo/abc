import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { history, menu, screenLeft, screenMiddle, screenRight } from '../../../../assets';

function RegularScreen() {
  

  return (
    <View style={ styles.view }>
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Image source={ menu } style={ styles.image }/>
          <View style={ styles.headerText }>
            <Text style={ styles.boldText }>
              CUPID
            </Text>
            <Text style={ styles.regularText }>
              Regular
            </Text>
          </View>
          <Image source={ history } style={ styles.image }/>
        </View>
        <View style={ styles.body }>
          <View style={ styles.bodyContainer }>
            <Text>
              Upload a screenshot of a chat or bio
            </Text>
            <View style={ styles.imageContainer }>
              <Image source={ screenLeft } style={ styles.screenshot } />
              <Image source={ screenMiddle } style={ styles.screenshot } />
              <Image source={ screenRight } style={ styles.screenshot } />
            </View>
          </View>
          <View style={ styles.buttonContainer }>
            <TouchableOpacity style={ styles.roundButton }>
              <Text style={ styles.buttonText }>
                ❤
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.uploadButton }>
              <Text style={ styles.buttonText }>
                Upload Screenshot
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({

});

export default RegularScreen