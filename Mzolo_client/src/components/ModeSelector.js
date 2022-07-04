import {View, Text, Appearance} from 'react-native';
import React, {useState, useEffect} from 'react';

const ModeSelector = () => {
    const [mode, setMode] = useState(Appearance.getColorScheme());
    
  return (
    <View>
      <Text>ModeSelector</Text>
    </View>
  );
};

export default ModeSelector;
