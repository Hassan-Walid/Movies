import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Movie from "../Movies/movie";

const Favorites = () => {
  const favArr = useSelector((state) => state.favList.favList);

  return (
    <>
      {favArr.length > 0 ? (
        <FlatList
          data={favArr}
          renderItem={({ item }) => {
            return <Movie data={item}></Movie>;
          }}
          style={{ backgroundColor: "black" }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "red", fontSize: 25, fontWeight: "800" }}>
            No Favorites Movies...
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Favorites;
