import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';
import { create } from 'react-test-renderer';
import { SFX } from './src/utils/constants';

const App = () => {
  const PlaySound = async (FileName: String) => {
    const sound = new Sound(FileName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error)
      }

        const toSeconds = 1000;
      
      const totalTime = sound.getDuration() * toSeconds + toSeconds * 1 ;
      sound.play((success) => {
        if (!success) return;

        setTimeout(() => {
          sound.release();
        }, totalTime)
      });
    })
  }

  return(
    <>
    <View>
      <View>
        <TouchableOpacity style={tombol.button1} onPress={() => PlaySound(SFX.NADA1)}/>
      </View>
    </View>
    </>
    
  )
};

const tombol = StyleSheet.create ({
  button1: {
    backgroundColor: 'red',
    width: 10,
    height: 20
  }
});

export default App;
