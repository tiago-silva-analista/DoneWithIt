// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Dimensions, Platform, Button } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageScreen from "./app/screens/ImageScreen";
import ButtonLogin from "./app/components/ButtonLogin";
import Card from "./app/components/Card";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function App() {
  const handlePress = () => console.log("Text clicked");

  const { landscape } = useDeviceOrientation();

  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red Jacket for sale"
        subtitle="$100"
        image={require("./assets/jacket.jpg")}
      />
    </View>
    //  <WelcomeScreen />
  );
}
