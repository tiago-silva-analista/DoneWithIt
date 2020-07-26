import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked");
  return (
    
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} >Hello React Native</Text>
      <TouchableNativeFeedback onPress={(() => console.log('Image tapped'))}>
        
      <Image 
      blurRadius={0}
      fadeDuration={1001}
      source={{        
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}} />
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
