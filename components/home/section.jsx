import { useNavigation } from "@react-navigation/native";
import { makeStyles } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Slideshow from "react-native-image-slider-show";

const Section = (props) => {
  let topRatedArr = [];
  if (props.arr) {
    topRatedArr = props.arr.results.slice(0, 3);
  }
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginBottom: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginLeft: 25,
            marginBottom: 10,
            color: "wheat",
          }}
        >
          {props.name}
        </Text>
        <Pressable
          onPress={() => {
            console.log("sea");
            navigation.navigate("seaMore", props.arr);
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginRight: 25,
              marginBottom: 10,
              marginTop: 5,
              color: "red",
            }}
          >
            Sea More
          </Text>
        </Pressable>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {topRatedArr.map((m) => {
            return (
              <Pressable onPress={() => navigation.navigate("details", m.id)}>
                <Image
                  key={m.id}
                  source={{
                    uri: "https://image.tmdb.org/t/p/w500/" + m.poster_path,
                  }}
                  style={styles.img}
                ></Image>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 150,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default Section;
