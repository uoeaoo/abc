import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { goBackWhite } from '../../../../assets';

function BlogScreen() {
  

  return (
    <ScrollView style={ styles.view }>
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Image source={ goBackWhite } style={ styles.goBack }/>
        </View>
        <View style={ styles.body }>
          <View style={ styles.bodyTitle }>
            <Text style={ styles.title }>
              How to quit social media
            </Text>
            <Text style={ styles.afterTitle }>
              and why is it so hard for your brain
            </Text>
            <Text style={ styles.text}>
            Imagine you’re at the peak of a mountain, the world spread out beneath you, a panorama of possibilities. 
            But every time you try to take a step forward, you’re held back by invisible chains. 
            These chains are the subtle, yet powerful, ties of social media. 
            Quitting social media can feel like trying to climb a mountain with these chains pulling you back. 
            But why is it so difficult for our brains to let go? 
            Let’s dive into the science and some practical steps to break free.
            </Text>
            <Text style={ styles.h2Title }>The Allure of Social Media</Text>
            <Text style={ styles.text}>
            Social media platforms are designed to be addictive. 
            They provide instant gratification, similar to the rush you get from gambling or eating sugary foods. 
            When you receive a notification, a like, or a comment, your brain releases dopamine, the “feel-good” neurotransmitter. 
            This dopamine release reinforces the behavior, making you crave more.
            </Text>
            <Text style={ styles.text}>
            In essence, social media hijacks the brain’s reward system. 
            The anticipation of social interactions and the validation from peers create a cycle that’s hard to break. 
            Over time, this cycle can lead to compulsive behavior, where you feel the need to check your phone constantly.
            </Text>
            <Text style={ styles.h2Title }>The Fear of Missing Out (FOMO)</Text>
            <Text style={ styles.text}>
            Another psychological aspect that makes quitting social media difficult is the Fear of Missing Out (FOMO). 
            Social media platforms showcase the highlights of everyone’s lives, often filtered and curated to show only the best moments. 
            This creates an illusion that everyone else is living a more exciting, fulfilling life.
            </Text>
            <Text style={ styles.text}>
            FOMO taps into our natural desire for social belonging and status. 
            The thought of missing out on important updates, events, or conversations can trigger anxiety and keep you tethered to social media.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default BlogScreen