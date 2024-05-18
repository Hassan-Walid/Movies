import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import Movie from "./movie";
import { Button, CheckBox } from "@rneui/themed";
import { Dialog } from "./../../node_modules/@rneui/base/dist/Dialog/index";
import { color } from "@rneui/base";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../redux/slices/moviesSlice";
import { FlatList } from "react-native-gesture-handler";

const Moives = () => {
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

  const [searchMovies, setSearchMovies] = useState([]);

  const moviesArr = useSelector((state) => state.movies.movies.results);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (txt) => {
    setSearchValue(txt.toLowerCase());

    if (searchValue === "") {
      setSearchMovies([]);
    } else {
      const tmp = moviesArr.filter((m) =>
        m.title.toLowerCase().includes(searchValue)
      );
      setSearchMovies(tmp);
    }
  };
  if (searchMovies.length != 0) {
    // console.log(searchMovies);
    return (
      <>
        <View style={styles.section}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"wheat"}
            style={styles.inputSearch}
            value={searchValue}
            onChangeText={handleChange}
          />
          {/* <Button
            onPress={toggleDialog5}
            title="Filter ∇"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "red",
              borderRadius: 15,
            }}
            containerStyle={{
              padding: 5,
              marginTop: 16,
              // width: 200,
              // marginHorizontal: 50,
              // marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", color: "wheat" }}
          /> */}
          <Dialog isVisible={visible5} onBackdropPress={toggleDialog5}>
            <Dialog.Title title="Select Preference" />
            {["Option 1", "Option 2", "Option 3"].map((l, i) => (
              <CheckBox
                key={i}
                title={l}
                containerStyle={{
                  backgroundColor: "black",
                }}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={checked === i + 1}
                onPress={() => setChecked(i + 1)}
              />
            ))}

            <Dialog.Actions>
              {/* <Dialog.Button
              title="CONFIRM"
              onPress={() => {
                console.log(`Option ${checked} was selected!`);
                toggleDialog5();
              }}
            /> */}
              {/* <Dialog.Button title="CANCEL" onPress={toggleDialog5} /> */}
            </Dialog.Actions>
          </Dialog>
        </View>

        {/* {console.log(searchMovies)} */}
        <FlatList
          data={searchMovies}
          renderItem={({ item }) => {
            return <Movie data={item}></Movie>;
          }}
          style={{ backgroundColor: "black" }}
        />
      </>
    );
  } else {
    return (
      <>
        <View style={styles.section}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"wheat"}
            style={styles.inputSearch}
            value={searchValue}
            onChangeText={handleChange}
          />
          {/* <Button
            onPress={toggleDialog5}
            title="Filter ∇"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "red",
              borderRadius: 15,
            }}
            containerStyle={{
              padding: 5,
              marginTop: 16,
              // width: 200,
              // marginHorizontal: 50,
              // marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", color: "wheat" }}
          /> */}
          <Dialog isVisible={visible5} onBackdropPress={toggleDialog5}>
            <Dialog.Title title="Select Preference" />
            {["Option 1", "Option 2", "Option 3"].map((l, i) => (
              <CheckBox
                key={i}
                title={l}
                containerStyle={{
                  backgroundColor: "black",
                }}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={checked === i + 1}
                onPress={() => setChecked(i + 1)}
              />
            ))}

            <Dialog.Actions>
              {/* <Dialog.Button
              title="CONFIRM"
              onPress={() => {
                console.log(`Option ${checked} was selected!`);
                toggleDialog5();
              }}
            /> */}
              {/* <Dialog.Button title="CANCEL" onPress={toggleDialog5} /> */}
            </Dialog.Actions>
          </Dialog>
        </View>

        {/* {console.log(searchMovies)} */}
        <FlatList
          data={moviesArr}
          renderItem={({ item }) => {
            return <Movie data={item}></Movie>;
          }}
          style={{ backgroundColor: "black" }}
        />
      </>
    );
  }
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

export default Moives;
