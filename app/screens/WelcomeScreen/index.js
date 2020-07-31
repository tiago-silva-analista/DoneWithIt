import React from "react";

import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import ButtonLogin from "./../../components/ButtonLogin";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={2}
      source={require("./../../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonLogin title="Login" />
        <ButtonLogin title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer:{
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,

  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
