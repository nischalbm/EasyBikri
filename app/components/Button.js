import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    width: "60%",
    marginVertical: 10,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
