// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions,
          Platform } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageScreen from './app/screens/ImageScreen'

export default function App() {
  
  const handlePress = () => console.log("Text clicked");

  const {landscape} = useDeviceOrientation();

  return (
        <ImageScreen />
  );
}

