import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import HawkLogo from '../../../assets/images/hawk_watch_logo.png';
import DarkLogo from '../../../assets/images/dark_mode.png';
import LightLogo from '../../../assets/images/light_mode.png';

const About = () => {
  return (
    <SafeAreaView style={[styles.root]}>
    <Image source={LightLogo} style={styles.logo} />
    <View style = {styles.spacer} />
      <Text style = {styles.version_text}>Version 2.2.9</Text>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spacer: {
    flex: 1,
  },

  hawk_logo: {
    width: '15%',
    resizeMode: 'contain',
  },

  logo: {
    width: '80%',
    resizeMode: 'contain',
  },

  version_text: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',	
    marginBottom: 10
  }
});
