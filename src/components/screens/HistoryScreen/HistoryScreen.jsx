import React from 'react';
import { View, StyleSheet } from 'react-native';
import { goBackBlack, xmark } from '../../../../assets';

function HistoryScreen() {
  

  return (
    <View style={ styles.view }>
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Image source={ goBackBlack } style={ styles.headerImage }/>
          <Text style={ styles.headerText }>History</Text>
        </View>
        <View style={ styles.body }>
          <View style={ styles.bodyElement }>
            <Image style={ styles.usersImage }/>
            <TouchableOpacity style={ styles.xmarkButton }>
              <Image source={ xmark } style={ styles.xmark }/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default HistoryScreen