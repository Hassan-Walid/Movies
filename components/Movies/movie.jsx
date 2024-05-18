import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/slices/favoriteSlice";
import { useNavigation } from "@react-navigation/native";

const Movie = ({ data }) => {
  const [favIcon, setFavIcon] = useState(true);
  const navigation = useNavigation();
  const favArr = useSelector((state) => state.favList.favList);
  useEffect(() => {
    favArr.find((m) => {
      if (m.id === data.id) {
        setFavIcon(false);
      }
    });
  }, [data.id]);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("details", data.id);
        }}
      >
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/w500/" + data.poster_path,
          }}
          style={styles.image}
        />
      </Pressable>

      <View style={styles.section}>
        <Text style={styles.text}>{data.title}</Text>
        {favIcon ? (
          <Icon
            name="favorite-outline"
            style={styles.icon}
            onPress={() => {
              setFavIcon(false);
              dispatch(addFav(data));
            }}
          ></Icon>
        ) : (
          <Icon
            name="favorite"
            style={[styles.text, styles.icon]}
            onPress={() => {
              setFavIcon(true);
              dispatch(removeFav(data.id));
            }}
          ></Icon>
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
    fontSize: 15,
  },
  icon: {
    fontSize: 28,
    paddingTop: 5,
    color: "red",
  },
});

export default Movie;
