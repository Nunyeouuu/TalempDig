import * as React from 'react';
import { useState } from 'react';
import { Text, View, } from 'react-native';
import Sound from 'react-native-sound';
import { SFX } from './src/utils/constants';

const App = () => {
  const PlaySound = async (FileName: String) => {
    const sound = new Sound(FileName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error)
      }
    })
  };
  return(
    <>
    <View>
      
    </View>
    </>
    
  )
};

export default App;
