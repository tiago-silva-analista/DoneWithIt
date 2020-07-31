import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";


function ButtonLogin({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    // shadowColor: 'grey',
    // shadowOffset: { width:100, height: 100},
    // shadowOpacity:1,
    // borderTopLeftRadius: 25,
    // borderBottomRightRadius: 25,
    elevation: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default ButtonLogin;