import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// const [favIcon, setFavIcon] = useState(true);
const Movie = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.jpg")}
        style={styles.image}
      />
      <View style={styles.section}>
        <Text style={styles.text}>Movie</Text>
        {false ? (
          <Icon name="favorite-outline" style={styles.icon}></Icon>
        ) : (
          <Icon name="favorite" style={[styles.text, styles.icon]}></Icon>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1f1f",
    paddingBottom: 20,
    marginTop: 40,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  text: {
    paddingTop: 5,
    color: "wheat",
    fontSize: 20,
  },
  icon: {
    fontSize: 28,
    paddingTop: 5,
  },
});

export default Movie;
