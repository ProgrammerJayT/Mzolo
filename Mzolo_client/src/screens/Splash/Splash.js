import {StyleSheet, Text, View, SafeAreaView, Image, Dimensions} from 'react-native';
import React from 'react';
import HawkLogo from '../../../assets/images/hawk_watch_logo.png';
import DarkLogo from '../../../assets/images/dark_mode.png';
import LightLogo from '../../../assets/images/light_mode.png';

const Splash = () => {
  return (
    <SafeAreaView style={[styles.root]}>
    <View style = {styles.spacer} />
    <Image source={DarkLogo} style={styles.logo} />
    <View style = {styles.spacer} />
    <Image source={HawkLogo} style={styles.hawk_logo} />
      <Text style = {styles.version_text}>Version 2.2.9</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  spacer: {
    flex: 1,
  },

  hawk_logo: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    resizeMode: 'contain',
  },

  logo: {
    width: '100%',
    resizeMode: 'contain',
  },

  version_text: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',	
    marginBottom: 10
  }
});
