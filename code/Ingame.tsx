import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Sound from 'react-native-sound';
import { create } from 'react-test-renderer';
import { SFX } from '../src/utils/constants';



const Ingame = () => {
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
      <View style={tombol.container}>
        <TouchableOpacity onPress={() => PlaySound(SFX.NADA1)}>
          <Image
            source={require('../IMAGES/talempong1.png')}
            style={tombol.button3} />
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => PlaySound(SFX.NADA2)}>
          <Image
            source={require('../IMAGES/talempong1.png')}
            style={tombol.button3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => PlaySound(SFX.NADA3)}>
            <Image
            source={require('../IMAGES/talempong1.png')}
            style={tombol.button3} />
        </TouchableOpacity> 
      </View>
    </View>
    </>
    
  )
};

const tombol = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  button1: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    
  },
  button2: {
    backgroundColor: 'tomato',
    width: 100,
    height: 50,
    
  },

  button3: {
    width: 125,
    height: 125,
    marginTop: 30
  
  },
    

  
});

export default Ingame;
