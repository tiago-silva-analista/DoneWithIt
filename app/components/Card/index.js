import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../config/colors";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    //flex:1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer:{
      padding: 20,
  },
  title:{
      marginBottom: 7,
  },
  subtitle:{
      color: colors.secondary,
      fontWeight: "bold",
  }
});

export default Card;
