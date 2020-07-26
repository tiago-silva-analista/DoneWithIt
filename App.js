// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
          Text, 
          View, 
          Image,
          TouchableWithoutFeedback, 
          TouchableNativeFeedback, 
          TouchableOpacity, 
          TouchableHighlight, 
          SafeAreaView,
          Button,
          StatusBar,
          Platform,
          Alert } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text clicked");
  return (
    
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={handlePress}  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
