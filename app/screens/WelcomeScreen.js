import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Buy and sell effortlessly!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" />
        <Button title="Register" color="secondary" />
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
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "90%",
  },
  logo: {
    width: 150,
    height: 110,
  },
  logoContainer: {
    position: "absolute",
    color: colors.light,
    top: 110,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    color: colors.white,
    fontStyle: "italic",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
