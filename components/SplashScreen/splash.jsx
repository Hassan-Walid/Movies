import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import BackgroundImage from "./../../node_modules/@rneui/base/dist/helpers/BackgroundImage";

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/splash.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}> Movies </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // width: "100%",
    // backgroundColor: "black",
  },
  image: {
    justifyContent: "flex-start",
    flex: 1,
  },
  text: {
    marginTop: 150,
    color: "white",
    fontSize: 50,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "800",
    color: "wheat",
  },
});

export default Splash;
