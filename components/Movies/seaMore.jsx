import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import Movie from "./movie";
import { Button, CheckBox } from "@rneui/themed";
import { Dialog } from "./../../node_modules/@rneui/base/dist/Dialog/index";
import { color } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../redux/slices/moviesSlice";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const SeaMore = () => {
  const { params } = useRoute();
  console.log(params);
  const [visible5, setVisible5] = useState(false);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(1);
  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };

  useEffect(() => {
    // console.log("useEffect");
    dispatch(moviesAction());
  }, [dispatch]);

  // const moviesArr = useSelector((state) => state.movies.movies.results);
  const moviesArr = params.results;

  return (
    <>
      <FlatList
        data={moviesArr}
        renderItem={({ item }) => {
          return <Movie data={item}></Movie>;
        }}
        style={{ backgroundColor: "black" }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputSearch: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginHorizontal: 8,
    borderBottomColor: "wheat",
    borderWidth: 3,
    color: "red",
    fontSize: 18,
  },
  section: {
    backgroundColor: "black",
  },
});

export default SeaMore;
