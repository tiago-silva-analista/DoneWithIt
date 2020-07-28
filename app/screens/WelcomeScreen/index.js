import React from "react";

import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("./../../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../../../assets/logo-red.png")}
        />
        <Text>Sell What you don't need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 70,
  },
  registerBtn: {
    backgroundColor: "#4ecdc4",
    fontSize: 30,
    width: "100%",
    height: "10%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  }
});

export default WelcomeScreen;
