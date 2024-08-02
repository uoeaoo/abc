import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { goBackBlack, plus } from '../../../../assets';

function UploadScreen() {
  

  return (
    <View style={ styles.view }>
      <ScrollView style={ styles.container }>
        <View style={ styles.header }>
          <Image source={ goBackBlack } style={ styles.image }/>
          <View style={ styles.headerText }>
            <Text style={ styles.boldText }>
              CUPID
            </Text>
            <Text style={ styles.regularText }>
              Regular
            </Text>
          </View>
          <Image source={ plus } style={ styles.image }/>
        </View>
        <View style={ styles.body }>
          <View style={ styles.uploadedScreen }>
            <Image style={ styles.uploadedImage }/>
          </View>
          <View style={ styles.bodyCopyRizz }>
            <View style={ styles.bodyCopyLine }></View>
            <Text style={ styles.bodyCopyText }>👇Tap to copy rizz👇</Text>
            <View style={ styles.bodyCopyLine }></View>
          </View>
          <View style={ styles.strangeContainer }>
              <View style={ styles.strangeContainerElement }>
                <Text style={ styles.strangeContainerEmoji }>
                  ❤
                </Text>
                <Text style={ styles.strangeContainerText }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Text>
              </View>
              <View style={ styles.strangeContainerElement }>
                <Text style={ styles.strangeContainerEmoji }>
                  👑
                </Text>
                <Text style={ styles.strangeContainerText }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Text>
              </View>
              <View style={ styles.strangeContainerElement }>
                <Text style={ styles.strangeContainerEmoji }>
                  🧠
                </Text>
                <Text style={ styles.strangeContainerText }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Text>
              </View>
              <View style={ styles.buttonContainer }>
                <TouchableOpacity style={ styles.roundButton }>
                  <Text style={ styles.roundButtonText }>
                    ❤
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.getRizzButton }>
                  <Text style={ styles.getRizzButtonText }>
                    Get Rizz Reply
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default UploadScreen